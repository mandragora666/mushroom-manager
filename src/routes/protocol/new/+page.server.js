// MushroomManager_protocol_new_page.server.js_v1 – erstellt am 17.09.2025 16:45
import { redirect, fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, locals: { supabase, getSession } }) => {
    const session = await getSession();

    if (!session) {
      return fail(401, { message: 'You must be logged in to create a protocol.' });
    }

    const formData = await request.formData();
    const strain_name = formData.get('strain_name');
    const notes = formData.get('notes');

    if (!strain_name) {
      return fail(400, { message: 'A strain name is required.' });
    }

    const { error } = await supabase
      .from('protocols')
      .insert([
        { 
          strain_name, 
          notes, 
          user_id: session.user.id
        }
      ]);

    if (error) {
      console.error('Error inserting new protocol:', error);
      return fail(500, { message: `Database error: ${error.message}` });
    }

    throw redirect(303, '/protocol');
  }
};