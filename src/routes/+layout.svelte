<script lang="ts">
  import "../app.css";
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'

  export let data

  let { supabase, session } = data
  $: ({ supabase, session } = data)

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth')
      }
    })

    return () => data.subscription.unsubscribe()
  })
</script>

<svelte:head>
  <title>Kasih Ibu</title>
</svelte:head>

<div class="w-full min-h-screen bg-neutral-900">
  <div class="container max-w-lg mx-auto min-h-screen bg-neutral-100">
    <slot />
  </div>
</div>