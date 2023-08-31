<script lang="ts">
  import { enhance } from '$app/forms'
  export let form
</script>

<div class="flex flex-col h-screen px-2 py-3 bg-white">
  <div class="w-10 h-10 rounded-full flex justify-center items-center">
    <a href="/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>

  <div class="flex flex-row justify-center gap-2 h-24 mb-8">
    <div class="absolute top-[45px] text-pink-500">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-16 h-16">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    </div>
    <div class="absolute z-100 text-4xl font-bold text-pink-500 text-center flex flex-col gap-0">
      <div class="flex gap-0">
        k
        <span class="text-white">
          asi
        </span>
        h
      </div>
      <div class="text-pink-500 -top-50">
        ibu
      </div>
    </div>
  </div>

  <form class="space-y-6" action="#" method="POST" use:enhance>
    <div>
      <label for="email" class="block text-sm font-medium leading-6 text-neutral-800">Email address</label>
      <div class="mt-2">
        <input id="email" name="email" type="email" autocomplete="email" value={form?.email ?? 'demo@nickyirawan.id'} required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6">
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between">
        <label for="password" class="block text-sm font-medium leading-6 text-neutral-800">Password</label>
      </div>
      <div class="mt-2">
        <input id="password" name="password" type="password" value={form?.email ?? '12345678'} autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6">
      </div>
    </div>

    <div>
      <button type="submit" class="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 px-2 text-sm font-semibold leading-6 text-neutral-200 shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Sign in</button>
    </div>
  </form>
</div>