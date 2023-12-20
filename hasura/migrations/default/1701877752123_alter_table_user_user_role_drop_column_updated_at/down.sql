alter table "user"."user_role" alter column "updated_at" set default now();
alter table "user"."user_role" alter column "updated_at" drop not null;
alter table "user"."user_role" add column "updated_at" timestamptz;
