<script>
  import '../app.css';
  // Wir gehen davon aus, dass Navbar.svelte noch im alten, funktionierenden Zustand ist.
  import Navbar from '$lib/components/Navbar.svelte'; 
</script>

<div class="min-h-screen flex flex-col">
  
  <Navbar />

  <main class="flex-grow container mx-auto p-4">
    <slot />
  </main>

  <footer class="w-full p-4 text-center border-t border-gray-700">
    <p class="text-gray-400 text-sm">&copy; 2025 Mushroom Manager. Alle Rechte vorbehalten.</p>
  </footer>

</div>