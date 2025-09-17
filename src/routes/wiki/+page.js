// MushroomManager_wiki_page.js_v1 – erstellt am 2025-09-17 16:25
import { supabase } from '$lib/supabaseClient';

/** @type {import('./$types').PageLoad} */
export async function load() {
  const { data, error } = await supabase
    .from('wiki_entries')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Fehler beim Laden der Wiki-Einträge:', error);
    // Im Fehlerfall geben wir ein leeres Array zurück, damit die Seite nicht abstürzt
    return {
      wikiEntries: []
    };
  }

  return {
    wikiEntries: data ?? []
  };
}