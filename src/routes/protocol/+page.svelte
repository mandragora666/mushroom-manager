<script>
  import Card from '$lib/components/Card.svelte';
  import Button from '$lib/components/Button.svelte';
  import Input from '$lib/components/Input.svelte';

  // Diese Daten kommen von der zugehörigen `+page.js`-Datei
  export let data;
  const { protocols } = data;
</script>

<div class="space-y-8">
  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div>
      <h1>Protokoll-Übersicht</h1>
      <p class="mt-1">Verwalten Sie hier Ihre laufenden und abgeschlossenen Zuchtprojekte.</p>
    </div>
    <a href="/protocol/new">
      <Button variant="primary">Neues Protokoll anlegen</Button>
    </a>
  </div>

  <div class="flex items-center gap-4">
    <div class="flex-grow">
      <Input id="search" placeholder="Protokolle durchsuchen..." />
    </div>
    </div>

  {#if protocols && protocols.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {#each protocols as protocol (protocol.id)}
        <a href="/protocol/{protocol.id}" class="block hover:scale-[1.02] transition-transform duration-200 ease-in-out">
          <Card>
            <div class="flex flex-col h-full space-y-4">
              <div class="flex-grow">
                <h3 class="font-bold text-lg text-text-primary">{protocol.strain_name}</h3>
                <p class="text-sm mt-2 h-16 overflow-hidden">
                  {protocol.notes ? protocol.notes : 'Keine Notizen vorhanden.'}
                </p>
              </div>
              <div class="pt-4 border-t border-border-primary text-xs text-text-secondary">
                <span>Erstellt am: {new Date(protocol.created_at).toLocaleDateString('de-DE')}</span>
              </div>
            </div>
          </Card>
        </a>
      {/each}
    </div>
  {:else}
    <div class="text-center border-2 border-dashed border-border-primary rounded-lg py-16">
      <h3 class="text-xl font-semibold">Keine Protokolle gefunden</h3>
      <p class="mt-2">Starten Sie, indem Sie Ihr erstes Zuchtprotokoll anlegen.</p>
      <div class="mt-6">
        <a href="/protocol/new">
          <Button variant="primary">Erstes Protokoll erstellen</Button>
        </a>
      </div>
    </div>
  {/if}
</div>