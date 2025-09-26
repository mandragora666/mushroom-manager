<script>
  import Button from '$lib/components/Button.svelte';
  import { goto } from '$app/navigation';

  /** @type {import('./$types').PageData} */
  export let data;
  const { protocol } = data;

  const strainName = protocol.strain_name ?? protocol.strain ?? 'Unbekannt';
  const title = protocol.title ?? strainName;
  const startDate = protocol.start_date ?? protocol.startDate ?? '—';
  const status = protocol.status ?? '—';
  const notes = protocol.notes ?? '—';
</script>

<div class="flex items-start justify-between gap-4">
  <div>
    <p class="text-sm uppercase tracking-wide text-secondary">Protokoll</p>
    <h1 class="text-3xl font-bold text-primary mt-1">{title}</h1>
  </div>
  <Button variant="secondary" type="button" on:click={() => goto(`/protocol/${protocol.id}/edit`)}>
    Bearbeiten
  </Button>
</div>

<div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
  <section class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
    <h2 class="text-xl font-semibold text-primary mb-4">Allgemeine Informationen</h2>
    <dl class="space-y-3 text-secondary">
      <div>
        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Pilzart</dt>
        <dd class="text-base text-primary">{strainName}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Startdatum</dt>
        <dd class="text-base text-primary">{startDate}</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Status</dt>
        <dd class="text-base text-primary">{status}</dd>
      </div>
    </dl>
  </section>

  <section class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
    <h2 class="text-xl font-semibold text-primary mb-4">Notizen</h2>
    <p class="text-secondary whitespace-pre-wrap">{notes}</p>
  </section>
</div>
