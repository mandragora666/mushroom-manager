<script>
  import { supabase } from '$lib/supabaseClient';
  import { onMount } from 'svelte';

  let protocols = []; // Hier speichern wir die Daten aus der DB

  // Diese Funktion wird ausgeführt, sobald die Seite geladen ist
  onMount(async () => {
    // Frage die 'protocols'-Tabelle nach allen (*) Einträgen
    const { data, error } = await supabase.from('protocols').select('*');

    if (error) {
      console.error('Fehler beim Abrufen der Daten:', error);
    } else {
      // Speichere die erhaltenen Daten in unserer Variable
      protocols = data;
    }
  });
</script>

<h1>Mushroom Manager</h1>
<h2>Meine Zuchtprotokolle</h2>

{#each protocols as protocol}
  <div style="border: 1px solid grey; padding: 1rem; margin-bottom: 1rem;">
    <h3>{protocol.strain_name}</h3>
    <p><strong>Start:</strong> {protocol.start_date}</p>
    <p><strong>Status:</strong> {protocol.status}</p>
    <p><strong>Notizen:</strong> {protocol.notes}</p>
  </div>
{:else}
  <p>Lade Protokolle...</p>
{/each}