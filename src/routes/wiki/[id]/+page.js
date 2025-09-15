// src/routes/wiki/[id]/+page.js

import { supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const { data, error: dbError } = await supabase
    .from('wiki_entries')
    .select('*')
    .eq('id', params.id)
    .single();

  if (dbError) {
    throw error(404, 'Wiki-Eintrag nicht gefunden');
  }

  return {
    wikiEntry: data
  };
}