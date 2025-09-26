import { redirect, fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, locals: { supabase, getSession } }) => {
    const session = await getSession();

    // A user must be logged in to create an entry
    if (!session) {
      return fail(401, { message: 'You must be logged in to create a wiki entry.' });
    }

    const formData = await request.formData();
    const title = formData.get('title')?.toString().trim();
    const category = formData.get('category')?.toString().trim();
    const content = formData.get('content')?.toString().trim();

    const fields = { title, category, content };
    const errors = {
      title: title ? null : 'Bitte geben Sie einen Titel an.',
      category: category ? null : 'Bitte wählen Sie eine Kategorie.',
      content: content ? null : 'Bitte füllen Sie den Inhalt aus.'
    };

    if (!title || !category || !content) {
      return fail(400, {
        message: 'Bitte füllen Sie alle Pflichtfelder aus.',
        fields,
        errors
      });
    }

    const { error } = await supabase
      .from('wiki_entries')
      .insert([
        { 
          title, 
          category, 
          content, 
          user_id: session.user.id // Add the user's ID to the new entry
        }
      ]);

    if (error) {
      console.error('Error inserting new wiki entry:', error);
      return fail(500, {
        message: `Database error: ${error.message}`,
        fields,
        errors
      });
    }

    throw redirect(303, '/wiki');
  }
};