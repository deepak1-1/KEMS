CREATE TABLE "user"."permission" ("name" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("name") , UNIQUE ("name"));
