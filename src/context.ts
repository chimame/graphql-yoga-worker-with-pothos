import type { DB } from './types'
import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'

// MEMO: https://developers.cloudflare.com/workers/databases/connect-to-postgres/#connection-pooling--startup
// Cloudflare Workers seems to require a TCP connection for each connection. Therefore, using Kysely's Connection Pooling will not work properly as it will not connect when a second request is received.
// Therefore, I try to make the connection each time.
export const connection = () => new Kysely<DB>({
  // Use MysqlDialect for MySQL and SqliteDialect for SQLite.
  dialect: new PostgresDialect({
    pool: new Pool({
      host: 'localhost',
      database: 'postgres',
      user: 'postgres',
      password: 'password',
    }),
  }),
})