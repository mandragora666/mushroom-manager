<script>
  import Input from '$lib/components/Input.svelte';
  import Textarea from '$lib/components/Textarea.svelte';
  import Button from '$lib/components/Button.svelte';
  import Card from '$lib/components/Card.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
  /** @type {import('./$types').ActionData} */
  export let form;

  const { wikiEntry } = data;

  $: effectiveForm = form ?? data.form;
  $: titleValue = effectiveForm?.values?.title ?? '';
  $: categoryValue = effectiveForm?.values?.category ?? '';
  $: contentValue = effectiveForm?.values?.content ?? '';
  $: fieldErrors = effectiveForm?.errors ?? {};
</script>

<div class="max-w-3xl mx-auto">
  <a href="/wiki" class="text-sm text-text-secondary hover:text-text-primary mb-6 inline-block">
    &larr; Zurück zur Wiki-Übersicht
  </a>

  <Card>
    <div class="p-2">
      <h1 class="text-2xl">Wiki-Eintrag bearbeiten</h1>
      <p class="mt-1">Aktualisieren Sie die Details dieses Eintrags.</p>

      <form method="POST" class="mt-8 space-y-6">
        <div>
          <Input
            id="title"
            name="title"
            label="Titel"
            value={titleValue}
            required={true}
          />
          {#if fieldErrors.title}
            <p class="mt-2 text-sm text-red-500">{fieldErrors.title}</p>
          {/if}
        </div>

        <div>
          <Input
            id="category"
            name="category"
            label="Kategorie"
            value={categoryValue}
            required={true}
          />
          {#if fieldErrors.category}
            <p class="mt-2 text-sm text-red-500">{fieldErrors.category}</p>
          {/if}
        </div>

        <div>
          <Textarea
            id="content"
            name="content"
            label="Inhalt"
            rows={8}
            value={contentValue}
            required={true}
          />
          {#if fieldErrors.content}
            <p class="mt-2 text-sm text-red-500">{fieldErrors.content}</p>
          {/if}
        </div>

        {#if effectiveForm?.message}
          <div class="bg-red-900/50 border border-red-500 text-red-200 text-sm rounded-md p-4" role="alert">
            <p><strong>Fehler:</strong> {effectiveForm.message}</p>
          </div>
        {/if}

        <div class="flex justify-end gap-4 pt-4 border-t border-border-primary">
          <a href="/wiki">
            <Button type="button" variant="secondary">Abbrechen</Button>
          </a>
          <Button type="submit" variant="primary">Änderungen speichern</Button>
        </div>
      </form>
    </div>
  </Card>
</div>
