<script>
  import '../app.css';
  import '$lib/themeStore.js'; // Diese Zeile hinzufügen
  import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
  
  <Sidebar />

  <main class="flex-1 p-8">
    <slot />
  </main>

</div>