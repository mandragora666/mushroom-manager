<script>
  /** @type {'button' | 'submit' | 'reset'} */
  export let type = 'button';

  /** @type {'primary' | 'secondary'} */
  export let variant = 'primary';

  export let disabled = false;

  // Gemeinsame Basis-Stile für alle Buttons
  const baseClasses = `
    inline-flex items-center justify-center px-4 py-2 
    border rounded-md shadow-sm text-sm font-medium 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-secondary focus:ring-accent-green 
    transition-colors disabled:opacity-50 disabled:cursor-not-allowed
  `;

  // Stile für die verschiedenen Varianten
  const variantClasses = {
    primary: 'border-transparent bg-accent-green text-bg-primary font-bold hover:bg-accent-green-hover',
    secondary: 'border-border-primary bg-transparent text-text-secondary hover:bg-border-primary hover:text-text-primary'
  };
</script>

<button
  {type}
  {disabled}
  class="{baseClasses} {variantClasses[variant]}"
  on:click
>
  <slot />
</button>