// src/routes/+page.server.ts
import { redirect, fail } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
  const session = await getSession()

  return { url: url.origin }
}

export const actions = {
  default: async ({ request, url, locals: { supabase } }) => {
    
  }
};