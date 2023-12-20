CREATE TABLE "user"."role_permission" ("permission" text NOT NULL, "role_id" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("permission","role_id") );
