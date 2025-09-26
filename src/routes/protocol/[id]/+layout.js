// src/routes/protocol/[id]/+layout.js

import { supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').LayoutLoad} */
export async function load({ params }) {
  const { data, error: dbError } = await supabase
    .from('protocols')
    .select('*')
    .eq('id', params.id)
    .single();

  if (dbError) {
    throw error(404, 'Protokoll nicht gefunden');
  }

  return {
    protocol: data
  };
}
