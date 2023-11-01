<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { goto } from '$app/navigation';

	export let form: ActionData;

	let ready = false;
	onMount(() => (ready = true));
</script>

<div
	class=" relative flex h-screen overflow-hidden justify-center text items-center bg-blue-700/80"
>
	{#if ready}
		<div
			transition:fly={{ duration: 800, x: 0, y: 500, opacity: 0.5, easing: quintOut }}
			class="bg-white z-10 flex shadow-xl overflow-hidden w-[68rem] h-[40rem] rounded-[2rem]"
		>
			<form use:enhance action="?/login" method="post" class="section-left">
				<h1 class="title text-center leading-[3.5rem]">WELCOME BACK</h1>
				<p class="text-xl text-center pt-4">Hello how was your day?</p>
				<div class="flex flex-col gap-8 pt-8">
					<input name="username" class="input" type="text" placeholder="Username" />
					<input name="password" class="input" type="password" placeholder="Password" />
					{#if form?.missing}<p class="error">{form.message}</p>{/if}
					{#if form?.invalid}<p class="error">{form.message}</p>{/if}
				</div>
				<button type="submit" class="submit-btn">Submit</button>
				<p class="pt-4">
					Dont have an accout? Register <button
						on:click={() => goto('/register')}
						class="text-blue-600 font-semibold underline">here</button
					>
				</p>
			</form>
			<div class="section-right relative">
				<div class="w-full h-full relative overflow-hidden rounded-[2rem]">
					<div class="w-full h-full shadow overflow-hidden rounded-[2rem] absolute" />
					<img class="object-cover w-full h-full" src="../login.png  " alt="" srcset="" />
				</div>
			</div>
		</div>
	{/if}

	<svg
		class="absolute z-0 top-0 left-[44rem] h-[24rem] w-full"
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill="#173AC4"
			d="M32,-46.2C43.9,-35.5,57.5,-29.3,62,-19.2C66.5,-9.2,61.9,4.7,55.3,15.8C48.6,26.8,40,35,30.5,39.9C20.9,44.7,10.5,46.2,-0.5,46.9C-11.5,47.6,-23,47.6,-34.2,43.2C-45.4,38.9,-56.3,30.4,-64.7,17.9C-73.1,5.3,-79.1,-11.1,-72.4,-20.9C-65.6,-30.7,-46.2,-33.8,-32.1,-43.8C-17.9,-53.7,-8.9,-70.5,0.6,-71.3C10.1,-72,20.2,-56.8,32,-46.2Z"
			transform="translate(50 50)"
		/>
	</svg>

	<svg
		class="absolute z-0 top-[22rem] left-[-52rem] h-[42rem] w-full"
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill="#173AC4"
			d="M42.6,-67.9C47,-55.4,36.7,-32,37.4,-15.5C38.1,0.9,49.7,10.4,50,18.3C50.3,26.3,39.3,32.6,29.1,36.5C18.8,40.5,9.4,42.1,2.7,38.3C-3.9,34.5,-7.9,25.4,-22.3,22.8C-36.7,20.2,-61.5,24.1,-72.2,17.3C-82.9,10.5,-79.3,-7,-66.5,-14C-53.8,-20.9,-31.8,-17.2,-19.2,-27C-6.5,-36.9,-3.3,-60.2,7.9,-71.1C19.1,-82,38.2,-80.4,42.6,-67.9Z"
			transform="translate(100 100)"
		/>
	</svg>
</div>

<style lang="postcss">
	.error {
		@apply text-red-600;
	}
	.submit-btn {
		@apply flex w-full text-white text-center px-4 py-4 justify-center text-lg font-semibold rounded-2xl hover:bg-black/80 transition-all duration-500 mt-8 bg-black/90;
	}
	.input {
		@apply rounded-2xl py-3 bg-gray-200 border-none px-4 py-4;
	}

	.shadow {
		-webkit-box-shadow: inset 0 0 10px 10px #000;
		-moz-box-shadow: inset 0 0 10px 10px #000;
		box-shadow: inset 0px 0px 40px rgba(0, 0, 0, 0.7);
	}
	.title {
		@apply text-[4rem] font-black;
	}

	.section-left {
		@apply flex-1 py-24 px-16 gap-8;
	}

	.section-right {
		@apply flex-1 py-12 px-12;
	}
</style>
