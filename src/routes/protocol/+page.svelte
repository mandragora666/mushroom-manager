<script>
  import { supabase } from '$lib/supabaseClient.js';
  import { invalidateAll } from '$app/navigation';

  export let data;

  let newProtocol = {
    strain_name: '',
    start_date: '',
    status: '',
    notes: ''
  };

  async function addProtocol() {
    const { error } = await supabase
      .from('protocols')
      .insert([newProtocol]);

    if (error) {
      alert('Fehler: ' + error.message);
    } else {
      newProtocol = { strain_name: '', start_date: '', status: '', notes: '' };
      await invalidateAll();
    }
  }

  async function deleteProtocol(id) {
    if (!confirm('Bist du sicher, dass du dieses Protokoll löschen möchtest?')) {
      return;
    }

    const { error } = await supabase
      .from('protocols')
      .delete()
      .eq('id', id);

    if (error) {
      alert('Fehler beim Löschen: ' + error.message);
    } else {
      await invalidateAll();
    }
  }
</script>

<h1 class="text-3xl font-bold mb-6">Meine Zuchtprotokolle</h1>

<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
  <h2 class="text-2xl font-semibold mb-4">Neues Protokoll starten</h2>
  <form on:submit|preventDefault={addProtocol}>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input 
        bind:value={newProtocol.strain_name}
        type="text" 
        placeholder="Pilzart (z.B. Kräuterseitling)" 
        class="input bg-gray-100 dark:bg-gray-700 p-2 rounded w-full"
        required
      />
      <input 
        bind:value={newProtocol.start_date}
        type="date"
        class="input bg-gray-100 dark:bg-gray-700 p-2 rounded w-full"
        required
      />
      <input 
        bind:value={newProtocol.status}
        type="text" 
        placeholder="Status (z.B. Beimpft)" 
        class="input bg-gray-100 dark:bg-gray-700 p-2 rounded w-full"
        required
      />
    </div>
    <textarea 
      bind:value={newProtocol.notes}
      placeholder="Notizen..." 
      class="input bg-gray-100 dark:bg-gray-700 p-2 rounded w-full mt-4"
      rows="3"
    ></textarea>
    <button type="submit" class="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg">
      Protokoll speichern
    </button>
  </form>
</div>

<h2 class="text-2xl font-semibold mb-4">Aktive Protokolle</h2>
{#each data.protocols as protocol (protocol.id)}
  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4">
    
    <div class="flex justify-between items-start mb-4">
      <h2 class="text-2xl font-semibold text-green-700 dark:text-green-500">{protocol.strain_name}</h2>
      
      <div class="flex items-center space-x-2">
        <a href="/protocol/{protocol.id}" class="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg">
          Bearbeiten
        </a>

        <button 
          on:click={() => deleteProtocol(protocol.id)}
          class="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg"
          aria-label="Protokoll löschen"
        >
          Löschen
        </button>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <span class="text-sm font-bold text-gray-500 dark:text-gray-400">Startdatum</span>
        <p>{new Date(protocol.start_date).toLocaleDateString()}</p> </div>
      <div>
        <span class="text-sm font-bold text-gray-500 dark:text-gray-400">Status</span>
        <p class="font-mono bg-gray-200 dark:bg-gray-700 rounded px-2 py-1 inline-block">{protocol.status}</p>
      </div>
    </div>

    <div class="mt-4">
      <span class="text-sm font-bold text-gray-500 dark:text-gray-400">Notizen</span>
      <p class="mt-1">{protocol.notes}</p>
    </div>
  </div>
{:else}
  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <p>Noch keine Protokolle gefunden. Zeit, mit dem Züchten zu beginnen!</p>
  </div>
{/each}