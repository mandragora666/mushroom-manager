<script>
  export let id;
  export let type = 'text';
  export let label = '';
  export let placeholder = '';
  export let value = '';
  export let required = false;
</script>

<div class="w-full">
  {#if label}
    <label for={id} class="block text-sm font-medium text-text-secondary mb-1">
      {label}
    </label>
  {/if}
  <input
    {type}
    {id}
    {placeholder}
    {required}
    bind:value
    class="block w-full bg-bg-primary border-border-primary rounded-md shadow-sm 
           text-text-primary placeholder:text-gray-500
           focus:ring-accent-green focus:border-accent-green 
           sm:text-sm"
    {...$$props}
  />
</div>