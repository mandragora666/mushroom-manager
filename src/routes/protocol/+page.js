import { supabase } from '$lib/supabaseClient';

export async function load() {
  const { data, error } = await supabase
    .from('protocols')
    .select('*');

  if (error) {
    console.error('Fehler beim Laden der Protokolle:', error);
    return { protocols: [] };
  }

  return {
    protocols: data,
  };
}