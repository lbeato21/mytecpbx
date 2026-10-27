import { pgTable, text, varchar, timestamp, boolean } from 'drizzle-orm/pg-core';
import { uuidv7 } from 'uuidv7';

export const tenants = pgTable('tenants', {
  id: varchar('id', { length: 36 }).primaryKey().$defaultFn(() => uuidv7()),
  name: text('name').notNull(),
  domain: varchar('domain', { length: 255 }).unique().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const extensions = pgTable('extensions', {
  id: varchar('id', { length: 36 }).primaryKey().$defaultFn(() => uuidv7()),
  tenantId: varchar('tenant_id', { length: 36 }).references(() => tenants.id).notNull(),
  extension: varchar('extension', { length: 20 }).notNull(),
  password: text('password').notNull(),
  enabled: boolean('enabled').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});