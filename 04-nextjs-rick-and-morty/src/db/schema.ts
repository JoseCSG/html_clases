import {
  integer,
  pgTable,
  serial,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  user_id: uuid("user_id").defaultRandom().primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").unique().notNull(),
  password: varchar("password").notNull(),
  created: timestamp("created_at").defaultNow().notNull(),
});

export const favorites = pgTable("favorites", {
  favorite_id: serial("favorite_id").primaryKey().notNull(),
  character_id: integer("character_id").notNull(),
  user_id: uuid("user_id")
    .references(() => users.user_id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    })
    .notNull(),
});
