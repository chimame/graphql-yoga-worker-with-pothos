/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
  DATABASE_URL: string
}

import { createYoga } from 'graphql-yoga'
import { schema } from './schema'
import { createContext } from './context'

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema })

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const context = createContext(env.DATABASE_URL)
    const response = await yoga(request, context)

		await context.db.destroy()
		return response
  },
}
