<script>
  /** @type {import('./$types').PageData} */
  export let data;
  const { protocol } = data;

  let formattedDate = '—';
  if (protocol.start_date) {
    const parsedDate = new Date(protocol.start_date);
    formattedDate = Number.isNaN(parsedDate.getTime())
      ? protocol.start_date
      : parsedDate.toLocaleDateString();
  }
</script>

<h1 class="text-3xl font-bold mb-6">Protokoll: {protocol.strain_name}</h1>

<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-6">
  <section>
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Übersicht</h2>
    <dl class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
      <div>
        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Status</dt>
        <dd class="mt-1 text-base text-gray-900 dark:text-gray-100">{protocol.status}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Startdatum</dt>
        <dd class="mt-1 text-base text-gray-900 dark:text-gray-100">{formattedDate}</dd>
      </div>
      <div class="md:col-span-2">
        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Notizen</dt>
        <dd class="mt-1 text-base text-gray-900 dark:text-gray-100 whitespace-pre-wrap">
          {protocol.notes || 'Keine Notizen vorhanden.'}
        </dd>
      </div>
    </dl>
  </section>

  <div class="flex justify-end">
    <a
      href="./edit"
      class="inline-flex items-center px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg"
    >
      Protokoll bearbeiten
    </a>
  </div>
</div>
