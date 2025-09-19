<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="min-h-screen flex flex-col">
  
  <Navbar />

  <main class="flex-grow container mx-auto p-4">
    <slot />
  </main>

  <footer class="w-full p-4 text-center border-t border-outline">
    <p class="text-secondary text-sm">&copy; 2025 Mushroom Manager. Alle Rechte vorbehalten.</p>
  </footer>

</div>