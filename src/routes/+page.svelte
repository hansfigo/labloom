<script lang="ts">
	import { goto } from '$app/navigation';
	import AccountIcon from '$lib/components/icons/AccountIcon.svelte';
	import type { Asisten } from '$lib/types/types.js';
	import { transformArray } from '$lib/utils/image.js';

	export let data;

	const asisten: Asisten[] = data.data;
	const transformed = transformArray(asisten, 4);

	console.log(transformed);
	
</script>

<svelte:head>
	<title>LabLoom | Track, Find, And Discover Assistant</title>
</svelte:head>
<div class="fixed z-[-10] h-full w-full bg-gradient-to-t from-surface-600 opacity-30" />

<nav class="flex w-full justify-center bg-secondary-600 py-8 px-8">
	<div class="container flex justify-between items-center">
		<img class="h-12 text-white" src="favicon.svg" alt="" />

		{#if data.username}
			<button class="btn text-white">
				<AccountIcon />
			</button>
		{:else}
			<div class="flex gap-8">
				<button on:click={() => goto('/login')} class="text-white btn font-semibold text-lg"
					>Login</button
				>
				<button
					on:click={() => goto('/register')}
					class="btn variant-filled-primary text-white font-semibold text-lg">Sign Up</button
				>
			</div>
		{/if}
	</div>
</nav>

<div class="flex flex-col gap-2 relative overflow-y-scroll justify-center items-center w-full">
	<div class="container md:px-0 px-8">
		<div class="w-full mt-12 md:px-12">
			<div class="w-full bg-secondary-600 relative md:px-8 px-12 rounded-[2rem] shadow-md py-28">
				<h1 class="text-white text-center pb-6">The Next-Gen Assistant Platform</h1>
				<p class="text-center text-tertiary-300 font-normal xl:text-2xl">
					Track, Find, And Discover Assistant <br />
					for your Need with LabLoom
				</p>
				<button
					on:click={() => goto(!data.username ? '/register' : '/admin')}
					class="btn md:btn-xl absolute bottom-[-1.5rem] right-0 left-[50%] translate-x-[-50%] w-fit variant-filled-primary text-white font-semibold text-lg"
				>
					<p>{!data.username ? 'Join Now' : 'Go to Dashboard'}</p>
					<div
						class="rounded-full bg-white w-10 h-10 text-2xl flex justify-center items-center text-center text-primary-500"
					>
						<p>></p>
					</div>
				</button>
			</div>
		</div>

		<section class="mt-24 px-8 sm:px-12">
			<h1 class="py-12">Daftar Asisten</h1>
			<section class="grid grid-cols-2 content-start md:grid-cols-4 gap-2 md:gap-4">
				{#each transformed as e}
					<div class="grid gap-2 content-between">
						{#each e as x}
							<div
								class="xl:min-h-[24rem] flex  cursor-pointer w-fit rounded-xl scale-100 xl:rounded-3xl shadow-xl overflow-hidden"
							>
								<section
									class="absolute z-[1] asisten-card h-full w-full bg-gradient-to-t from-slate-800 opacity-70"
								/>
								<img
									class="h-auto asisten-img object-cover max-w-full duration-700 transition-all ease-in-out"
									src={x.gambar}
									alt={`photo-${x.nama}`}
								/>
								<p
									class="absolute z-10 bottom-0 text-xl md:text-2xl font-semibold px-4 py-6 md:py-8 text-white"
								>
									{x.nama}
								</p>
							</div>
						{/each}
					</div>
				{/each}
			</section>
		</section>
	</div>
</div>

<style lang="postcss">
	h1 {
		@apply text-[2rem] md:text-[3.5rem] font-semibold leading-8;
	}

	.asisten-img {
		transform: scale(1);
	}

	.asisten-card:hover + .asisten-img {
		transform: scale(1.2);
	}
</style>
