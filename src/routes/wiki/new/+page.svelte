<script>
  import Input from '$lib/components/Input.svelte';
  import Textarea from '$lib/components/Textarea.svelte';
  import Button from '$lib/components/Button.svelte';
  import Card from '$lib/components/Card.svelte';

  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<div class="max-w-3xl mx-auto">
  <a href="/wiki" class="text-sm text-text-secondary hover:text-text-primary mb-6 inline-block">
    &larr; Zurück zur Wiki-Übersicht
  </a>

  <Card>
    <div class="p-2">
      <h1 class="text-2xl">Neuen Wiki-Eintrag anlegen</h1>
      <p class="mt-1">Erfassen Sie die wichtigsten Informationen, um den Wissensschatz zu erweitern.</p>

      <form method="POST" class="mt-8 space-y-6">
        <div>
          <Input
            id="title"
            name="title"
            label="Titel"
            placeholder="z.B. Austernseitling"
            required={true}
            value={form?.fields?.title}
            aria-invalid={Boolean(form?.errors?.title)}
            aria-describedby={form?.errors?.title ? 'title-error' : undefined}
          />
          {#if form?.errors?.title}
            <p id="title-error" class="mt-1 text-sm text-red-300">{form.errors.title}</p>
          {/if}
        </div>

        <div>
          <Input
            id="category"
            name="category"
            label="Kategorie"
            placeholder="z.B. Anbau, Artenportrait, Technik"
            required={true}
            value={form?.fields?.category}
            aria-invalid={Boolean(form?.errors?.category)}
            aria-describedby={form?.errors?.category ? 'category-error' : undefined}
          />
          {#if form?.errors?.category}
            <p id="category-error" class="mt-1 text-sm text-red-300">{form.errors.category}</p>
          {/if}
        </div>

        <div>
          <Textarea
            id="content"
            name="content"
            label="Inhalt"
            rows={8}
            placeholder="Beschreiben Sie den Eintrag mit allen relevanten Informationen..."
            required={true}
            value={form?.fields?.content}
            aria-invalid={Boolean(form?.errors?.content)}
            aria-describedby={form?.errors?.content ? 'content-error' : undefined}
          />
          {#if form?.errors?.content}
            <p id="content-error" class="mt-1 text-sm text-red-300">{form.errors.content}</p>
          {/if}
        </div>

        {#if form?.message}
          <div class="bg-red-900/50 border border-red-500 text-red-200 text-sm rounded-md p-4" role="alert">
            <p><strong>Fehler:</strong> {form.message}</p>
          </div>
        {/if}

        <div class="flex justify-end gap-4 pt-4 border-t border-border-primary">
          <a href="/wiki">
            <Button type="button" variant="secondary">Abbrechen</Button>
          </a>
          <Button type="submit" variant="primary">Eintrag speichern</Button>
        </div>
      </form>
    </div>
  </Card>
</div>