<script>
  import { supabase } from '$lib/supabaseClient.js';
  import { invalidateAll } from '$app/navigation';

  export let data;

  let newEntry = {
    title: '',
    content: '',
    category: ''
  };

  async function addWikiEntry() {
    const { error } = await supabase.from('wiki_entries').insert([newEntry]);
    if (error) {
      alert('Fehler: ' + error.message);
    } else {
      newEntry = { title: '', content: '', category: '' };
      await invalidateAll(); // Daten neu laden
    }
  }

  async function deleteWikiEntry(id) {
    if (!confirm('Bist du sicher, dass du diesen Wiki-Eintrag löschen möchtest?')) {
      return;
    }
    const { error } = await supabase.from('wiki_entries').delete().eq('id', id);
    if (error) {
      alert('Fehler beim Löschen: ' + error.message);
    } else {
      await invalidateAll(); // Daten neu laden, damit der Eintrag verschwindet
    }
  }
</script>

<h1 class="text-3xl font-bold mb-6">Substrat & Zucht Wiki</h1>

<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
  <h2 class="text-2xl font-semibold mb-4">Neuen Wiki-Eintrag erstellen</h2>
  <form on:submit|preventDefault={addWikiEntry}>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input bind:value={newEntry.title} type="text" placeholder="Titel" class="input bg-gray-100 dark:bg-gray-700 p-2 rounded w-full" required />
      <input bind:value={newEntry.category} type="text" placeholder="Kategorie (z.B. Substrat)" class="input bg-gray-100 dark:bg-gray-700 p-2 rounded w-full" required />
    </div>
    <textarea bind:value={newEntry.content} placeholder="Inhalt..." class="input bg-gray-100 dark:bg-gray-700 p-2 rounded w-full mt-4" rows="3"></textarea>
    <button type="submit" class="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg">Eintrag speichern</button>
  </form>
</div>

<h2 class="text-2xl font-semibold mb-4">Bestehende Einträge</h2>
{#each data.entries as entry (entry.id)}
  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4">
    <div class="flex justify-between items-start">
      <div>
        <h3 class="text-xl font-bold text-green-700 dark:text-green-500">{entry.title}</h3>
        <span class="text-sm font-mono bg-gray-200 dark:bg-gray-700 rounded px-2 py-1 inline-block mt-1">{entry.category}</span>
        <p class="mt-4">{entry.content}</p>
      </div>
      
      <div class="flex items-center space-x-2">
        <a href="/wiki/{entry.id}" class="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg">
          Bearbeiten
        </a>
        
        <button 
          on:click={() => deleteWikiEntry(entry.id)}
          class="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg"
          aria-label="Eintrag löschen"
        >
          Löschen
        </button>
      </div>
    </div>
  </div>
{:else}
  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <p>Noch keine Wiki-Einträge vorhanden.</p>
  </div>
{/each}