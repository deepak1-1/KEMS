CREATE TABLE "user"."user_role" ("user_id" integer NOT NULL, "role_id" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("user_id","role_id") );
