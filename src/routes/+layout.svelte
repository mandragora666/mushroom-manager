<script>
  import '../app.css';
</script>

<div class="flex flex-col min-h-screen bg-bg-primary text-text-primary">
  <header class="bg-bg-secondary/80 backdrop-blur-sm border-b border-border-primary sticky top-0 z-10">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center space-x-8">
          <a href="/" class="text-xl font-bold text-text-primary hover:text-accent-green transition-colors">
            Mushroom Manager
          </a>
          <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="/" class="text-text-secondary hover:text-text-primary transition-colors" data-sveltekit-reload>Dashboard</a>
            <a href="/protocol" class="text-text-secondary hover:text-text-primary transition-colors" data-sveltekit-reload>Protokolle</a>
            <a href="/wiki" class="text-text-secondary hover:text-text-primary transition-colors" data-sveltekit-reload>Wiki</a>
          </nav>
        </div>

        <div class="flex items-center space-x-4">
          <button class="text-text-secondary hover:text-text-primary transition-colors" aria-label="Theme wechseln">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </button>
          <button class="text-text-secondary hover:text-text-primary transition-colors" aria-label="Benutzerprofil">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          </button>
        </div>
      </div>
    </div>
  </header>

  <main class="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
    <slot />
  </main>

  <footer class="bg-bg-secondary border-t border-border-primary">
    <div class="container mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-text-secondary text-sm">
      &copy; {new Date().getFullYear()} Mushroom Manager. Alle Rechte vorbehalten.
    </div>
  </footer>
</div>