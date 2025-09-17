<script>
  export let id;
  export let label = '';
  export let placeholder = '';
  export let value = '';
  export let rows = 4;
  export let required = false;
</script>

<div class="w-full">
  {#if label}
    <label for={id} class="block text-sm font-medium text-text-secondary mb-1">
      {label}
    </label>
  {/if}
  <textarea
    {id}
    {placeholder}
    {required}
    {rows}
    bind:value
    class="block w-full bg-bg-primary border-border-primary rounded-md shadow-sm 
           text-text-primary placeholder:text-gray-500
           focus:ring-accent-green focus:border-accent-green 
           sm:text-sm"
    {...$$props}
  ></textarea>
</div>