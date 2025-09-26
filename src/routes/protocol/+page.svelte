<script>
  import Card from '$lib/components/Card.svelte';
  import Button from '$lib/components/Button.svelte';
  import { goto } from '$app/navigation';
  export let data;
</script>

<h1 class="text-3xl font-bold mb-6 text-primary">Deine Projekte</h1>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each data.protocols as protocol (protocol.id)}
    <Card>
      <div class="flex flex-col h-full">
        <div class="flex-grow">
          <div class="flex justify-between items-start">
            <h2 class="font-bold text-lg text-primary">{protocol.title}</h2>
            {#if protocol.status === 'Fruiting'}
              <span class="bg-orange-500/20 text-orange-400 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {protocol.status}
              </span>
            {:else if protocol.status === 'Active'}
              <span class="bg-green-500/20 text-green-400 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {protocol.status}
              </span>
            {:else}
              <span class="bg-gray-500/20 text-gray-400 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {protocol.status}
              </span>
            {/if}
          </div>
          <p class="text-secondary mt-1">{protocol.strain}</p>
          <p class="text-sm text-secondary mt-4">Gestartet: {protocol.startDate}</p>
        </div>
        
        <div class="mt-6 pt-4 border-t border-outline flex items-center gap-2">
          <Button
            variant="primary"
            type="button"
            on:click={() => goto(`/protocol/${protocol.id}`)}
          >
            Details
          </Button>
          <Button
            variant="secondary"
            type="button"
            on:click={() => goto(`/protocol/${protocol.id}/edit`)}
          >
            Bearbeiten
          </Button>
        </div>
        
      </div>
    </Card>
  {/each}
</div>
