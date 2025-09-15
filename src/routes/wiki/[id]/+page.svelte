<script>
  import { supabase } from '$lib/supabaseClient';
  import { goto } from '$app/navigation';

  /** @type {import('./$types').PageData} */
  export let data;

  let { wikiEntry } = data;

  // NEU: Funktion zum Aktualisieren des Eintrags
  async function updateWikiEntry() {
    const updatedData = {
      title: wikiEntry.title,
      category: wikiEntry.category,
      content: wikiEntry.content
    };

    const { error } = await supabase
      .from('wiki_entries')
      .update(updatedData)
      .eq('id', wikiEntry.id);

    if (error) {
      alert('Fehler beim Speichern: ' + error.message);
    } else {
      // Bei Erfolg zurück zur Wiki-Übersicht
      await goto('/wiki');
    }
  }
</script>

<h1 class="text-3xl font-bold mb-6">Wiki-Eintrag bearbeiten</h1>

<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
  <form on:submit|preventDefault={updateWikiEntry}>
    <div>
      <label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Titel</label>
      <input 
        id="title"
        bind:value={wikiEntry.title}
        type="text" 
        class="input mt-1 bg-gray-100 dark:bg-gray-700 p-2 rounded w-full"
        required
      />
    </div>

    <div class="mt-4">
      <label for="category" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Kategorie</label>
      <input 
        id="category"
        bind:value={wikiEntry.category}
        type="text"
        class="input mt-1 bg-gray-100 dark:bg-gray-700 p-2 rounded w-full"
        required
      />
    </div>

    <div class="mt-4">
      <label for="content" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Inhalt</label>
      <textarea 
        id="content"
        bind:value={wikiEntry.content}
        class="input mt-1 bg-gray-100 dark:bg-gray-700 p-2 rounded w-full"
        rows="6"
      ></textarea>
    </div>

    <div class="flex justify-end mt-6">
      <button type="submit" class="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg">
        Änderungen speichern
      </button>
    </div>
  </form>
</div>