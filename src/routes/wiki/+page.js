import { supabase } from '$lib/supabaseClient';

export async function load() {
  const { data, error } = await supabase
    .from('wiki_entries')
    .select('*');

  if (error) {
    console.error('Fehler beim Laden der Wiki-Einträge:', error);
    return { entries: [] };
  }

  return {
    entries: data,
  };
}