<script>
  import ThemeToggle from './ThemeToggle.svelte';
</script>

<aside class="w-64 flex flex-col bg-white dark:bg-gray-800 p-6 shadow-md">
  <a href="/" class="mb-8 block">
    <h1 class="text-2xl font-bold text-green-700 dark:text-green-500 hover:text-green-600">
      Mushroom Manager
    </h1>
  </a>

  <nav>
    <ul>
      <li class="mb-4">
        <a href="/protocol" class="text-lg hover:text-green-700 dark:hover:text-green-500">Zuchtprotokoll</a>
      </li>
      <li class="mb-4">
        <a href="/wiki" class="text-lg hover:text-green-700 dark:hover:text-green-500">Wiki</a>
      </li>
    </ul>
  </nav>

  <div class="mt-auto flex justify-center">
    <ThemeToggle />
  </div>
</aside>