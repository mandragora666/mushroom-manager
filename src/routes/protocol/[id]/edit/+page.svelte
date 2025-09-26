<script>
  import { supabase } from '$lib/supabaseClient';
  import { goto } from '$app/navigation';

  /** @type {import('./$types').PageData} */
  export let data;
  let { protocol } = data;

  async function updateProtocol() {
    const updatedData = {
      strain_name: protocol.strain_name,
      start_date: protocol.start_date,
      status: protocol.status,
      notes: protocol.notes
    };

    const { error } = await supabase
      .from('protocols')
      .update(updatedData)
      .eq('id', protocol.id);

    if (error) {
      alert('Fehler beim Speichern: ' + error.message);
    } else {
      await goto(`/protocol/${protocol.id}`);
    }
  }
</script>

<h1 class="text-3xl font-bold mb-6">Protokoll bearbeiten: {protocol.strain_name}</h1>

<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
  <form on:submit|preventDefault={updateProtocol}>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label for="strain_name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Pilzart</label>
        <input
          id="strain_name"
          bind:value={protocol.strain_name}
          type="text"
          class="input mt-1 bg-gray-100 dark:bg-gray-700 p-2 rounded w-full"
          required
        />
      </div>

      <div>
        <label for="start_date" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Startdatum</label>
        <input
          id="start_date"
          bind:value={protocol.start_date}
          type="date"
          class="input mt-1 bg-gray-100 dark:bg-gray-700 p-2 rounded w-full"
          required
        />
      </div>
    </div>

    <div class="mt-4">
      <label for="status" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
      <input
        id="status"
        bind:value={protocol.status}
        type="text"
        class="input mt-1 bg-gray-100 dark:bg-gray-700 p-2 rounded w-full"
        required
      />
    </div>

    <div class="mt-4">
      <label for="notes" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Notizen</label>
      <textarea
        id="notes"
        bind:value={protocol.notes}
        class="input mt-1 bg-gray-100 dark:bg-gray-700 p-2 rounded w-full"
        rows="4"
      ></textarea>
    </div>

    <div class="flex justify-end mt-6">
      <button type="submit" class="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg">
        Änderungen speichern
      </button>
    </div>
  </form>
</div>
