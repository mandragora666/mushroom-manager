import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, params, locals: { supabase, getSession } }) => {
    const session = await getSession();

    if (!session) {
      return fail(401, {
        message: 'You must be logged in to update a wiki entry.'
      });
    }

    const formData = await request.formData();
    const title = (formData.get('title') ?? '').toString().trim();
    const category = (formData.get('category') ?? '').toString().trim();
    const content = (formData.get('content') ?? '').toString().trim();

    const values = { title, category, content };
    const errors = {};

    if (!title) {
      errors.title = 'Bitte geben Sie einen Titel ein.';
    }

    if (!category) {
      errors.category = 'Bitte geben Sie eine Kategorie an.';
    }

    if (!content) {
      errors.content = 'Bitte geben Sie einen Inhalt ein.';
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, {
        message: 'Bitte korrigieren Sie die Fehler im Formular.',
        errors,
        values
      });
    }

    const { error } = await supabase
      .from('wiki_entries')
      .update({ title, category, content })
      .eq('id', params.id);

    if (error) {
      console.error('Error updating wiki entry:', error);
      return fail(500, {
        message: `Database error: ${error.message}`,
        values
      });
    }

    throw redirect(303, '/wiki');
  }
};
