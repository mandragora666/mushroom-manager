<script>
  import Card from '$lib/components/Card.svelte';
  import Button from '$lib/components/Button.svelte';
  import Input from '$lib/components/Input.svelte';

  // Diese Daten kommen von der zugehörigen `+page.js`-Datei
  export let data;
  const { wikiEntries } = data;

  // Hilfsfunktion, um HTML-Tags aus dem Inhalt zu entfernen für die Vorschau
  function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>?/gm, '');
  }
</script>

<div class="space-y-8">
  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div>
      <h1>Wiki & Wissensdatenbank</h1>
      <p class="mt-1">Sammeln und verwalten Sie hier Ihr Wissen und Ihre Erkenntnisse.</p>
    </div>
    <a href="/wiki/new">
      <Button variant="primary">Neuer Eintrag</Button>
    </a>
  </div>

  <div class="flex items-center gap-4">
    <div class="flex-grow">
      <Input id="search" placeholder="Einträge durchsuchen..." />
    </div>
  </div>

  {#if wikiEntries && wikiEntries.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {#each wikiEntries as entry (entry.id)}
        <a href="/wiki/{entry.id}" class="block hover:scale-[1.02] transition-transform duration-200 ease-in-out">
          <Card>
            <div class="flex flex-col h-full space-y-4">
              <div class="flex-grow">
                <span class="text-xs bg-border-primary text-text-secondary px-2 py-1 rounded-full">{entry.category || 'Allgemein'}</span>
                <h3 class="font-bold text-lg text-text-primary mt-3">{entry.title}</h3>
                <p class="text-sm mt-2 h-20 overflow-hidden">
                  {stripHtml(entry.content) || 'Kein Inhalt.'}
                </p>
              </div>
              <div class="pt-4 border-t border-border-primary text-xs text-text-secondary">
                <span>Erstellt am: {new Date(entry.created_at).toLocaleDateString('de-DE')}</span>
              </div>
            </div>
          </Card>
        </a>
      {/each}
    </div>
  {:else}
    <div class="text-center border-2 border-dashed border-border-primary rounded-lg py-16">
      <h3 class="text-xl font-semibold">Keine Wiki-Einträge gefunden</h3>
      <p class="mt-2">Legen Sie den ersten Wissensartikel an.</p>
      <div class="mt-6">
        <a href="/wiki/new">
          <Button variant="primary">Ersten Eintrag erstellen</Button>
        </a>
      </div>
    </div>
  {/if}
</div>