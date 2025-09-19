<script>
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<header class="w-full p-4 border-b border-outline bg-background">
  <nav class="container mx-auto flex justify-between items-center">
    
    <div class="flex items-center gap-8">
      <a href="/" class="text-lg font-bold text-primary hover:text-secondary transition-colors">
        Mushroom Manager
      </a>
      <div class="flex items-center gap-4">
        <a href="/" class="text-secondary hover:text-primary transition-colors">Dashboard</a>
        <a href="#" class="text-secondary hover:text-primary transition-colors">Substrate</a>
        <a href="#" class="text-secondary hover:text-primary transition-colors">Inventar</a>
      </div>
    </div>
    
    <div class="flex items-center gap-4">
      <ThemeToggle />
      <div class="w-8 h-8 bg-surface rounded-full">
        </div>
    </div>

  </nav>
</header>