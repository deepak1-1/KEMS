FROM node:20.10-alpine AS base

# 1. Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app/frontend

# Install dependencies
COPY ./frontend/package.json ./frontend/yarn.lock ./
RUN yarn --frozen-lockfile

# 2. Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app/frontend
COPY --from=deps /app/frontend/node_modules ./node_modules
COPY ./frontend .
RUN yarn build

# 3. Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app/frontend

COPY --from=builder /app/frontend/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder /app/frontend/.next/standalone ./
COPY --from=builder /app/frontend/.next/static ./.next/static

EXPOSE 3000

# Backend Setup
WORKDIR /app/server

COPY ./server/package.json ./server/yarn.lock ./

# Get the chrome binary from puppeteer
# Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer
ENV CHROME_BIN="/usr/bin/chromium-browser" \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"
RUN set -x \
    && apk update \
    && apk upgrade \
    && apk add --no-cache \
    udev \
    ttf-freefont \
    chromium
ENV CHROMIUM_PATH=/usr/bin/chromium-browser

# Install Dependencies
RUN yarn --frozen-lockfile

# Copy the Code
COPY ./server ./

EXPOSE 4000

WORKDIR /app
RUN yarn global add concurrently

CMD ["concurrently", "\"cd frontend && node server.js\"", "\"cd server && yarn start\""]
