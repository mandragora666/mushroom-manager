<script>
  import Input from '$lib/components/Input.svelte';
  import Textarea from '$lib/components/Textarea.svelte';
  import Button from '$lib/components/Button.svelte';
  import Card from '$lib/components/Card.svelte';

  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<div class="max-w-3xl mx-auto">
  <a href="/protocol" class="text-sm text-text-secondary hover:text-text-primary mb-6 inline-block">
    &larr; Zurück zur Protokoll-Übersicht
  </a>

  <Card>
    <div class="p-2">
      <h1 class="text-2xl">Neues Zuchtprotokoll anlegen</h1>
      <p class="mt-1">Starten Sie ein neues Projekt, indem Sie die grundlegenden Informationen erfassen.</p>

      <form method="POST" class="mt-8 space-y-6">
        <Input
          id="strain_name"
          name="strain_name"
          label="Sorten- oder Stammesname"
          placeholder="z.B. Austernpilz (Pleurotus ostreatus)"
          required={true}
        />

        <Textarea
          id="notes"
          name="notes"
          label="Notizen"
          rows={8}
          placeholder="Beschreiben Sie hier das Ziel des Projekts, die Herkunft des Myzels oder andere wichtige Startinformationen..."
        />

        {#if form?.message}
          <div class="bg-red-900/50 border border-red-500 text-red-200 text-sm rounded-md p-4" role="alert">
            <p><strong>Fehler:</strong> {form.message}</p>
          </div>
        {/if}

        <div class="flex justify-end gap-4 pt-4 border-t border-border-primary">
          <a href="/protocol">
            <Button type="button" variant="secondary">Abbrechen</Button>
          </a>
          <Button type="submit" variant="primary">Protokoll speichern</Button>
        </div>
      </form>
    </div>
  </Card>
</div>