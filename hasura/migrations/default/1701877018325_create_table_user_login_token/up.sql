CREATE TABLE "user"."login_token" ("id" serial NOT NULL, "type" varchar NOT NULL, "token" text NOT NULL, "id_address" text, "user_id" integer NOT NULL, "device" text, "created_at" timestamptz NOT NULL DEFAULT now(), "is_active" bool NOT NULL DEFAULT true, "family_id" uuid NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY ("id") , UNIQUE ("id"), UNIQUE ("token"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;