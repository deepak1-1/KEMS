CREATE TABLE "organisation"."organisation" ("id" serial NOT NULL, "name" varchar NOT NULL, "domain" varchar NOT NULL, "logo" varchar, "theme_config" jsonb NOT NULL DEFAULT '{}'::jsonb, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("id"), UNIQUE ("domain"));