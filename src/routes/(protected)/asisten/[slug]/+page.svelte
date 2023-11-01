<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { ActionData, PageData } from './$types';
	import { goto } from '$app/navigation';
	import EditIcon from '$lib/components/icons/EditIcon.svelte';
	import { enhance } from '$app/forms';
	import { isEditingTitle, isEditingNim, toggleIsEditing } from '$lib/input';
	import CheckIcon from '$lib/components/icons/CheckIcon.svelte';

	export let data: PageData;
	export let form: ActionData;

	let name: HTMLInputElement;
	let nim: HTMLInputElement;
	let formName: HTMLFormElement;
	let formNim: HTMLFormElement;

	$: {
		isEditingTitle.set(form?.isEditingName!);
		isEditingNim.set(form?.isEditingNim!);
	}

	let fileinput: any;
	let imageForm: any;
</script>

<svelte:head>
	<title>{data.asisten.nama} | Profile</title>
</svelte:head>

<section class="min-h-[100vh] w-full flex justify-center items-center">
	<div class="container flex">
		<div class="flex flex-col flex-1 pr-16 gap-8">
			<div class="flex gap-6">
				<div class="flex-initial flex items-start">
					<button
						on:click={() => {
							goto('/admin');
						}}
						class="btn text-[3rem] font-semibold">{'<'}</button
					>
				</div>
				<h1>Profile</h1>
			</div>

			<div class=" flex-1 flex justify-center">
				<div class="relative">
					<Avatar width="w-72" src={data.asisten.gambar} />
					<button
						on:click={() => fileinput.click()}
						class="btn rounded-full right-8 h-16 w-16 text-2xl bottom-6 absolute variant-filled-primary"
					>
						<EditIcon />
					</button>
					<form
						bind:this={imageForm}
						enctype="multipart/form-data"
						use:enhance
						method="POST"
						action="?/updateImage"
					>
						<input
							name="gambar"
							style="display:none"
							type="file"
							on:change={() => imageForm.requestSubmit()}
							accept=".jpg, .jpeg, .png"
							bind:this={fileinput}
						/>
					</form>
				</div>
			</div>
			<div class="w-full container flex flex-col justify-center gap-8">
				<div class="w-full flex flex-col gap-4">
					<p class="p-form">Nama Asisten</p>
					{#if $isEditingTitle}
						<div class=" justify-between items-center">
							<form
								bind:this={formName}
								class="flex gap-4"
								use:enhance
								action="?/update"
								method="post"
							>
								<input
									class="bg-transparent border-0 px-0 text-2xl focus:border-primary-500 w-full"
									value={data.asisten.nama}
									type="text"
									on:blur={() => {
										formName.requestSubmit();
										toggleIsEditing('nama');
									}}
									bind:this={name}
									name="nama"
								/>
								<button type="submit" class="text-black">
									<CheckIcon />
								</button>
							</form>
						</div>
					{:else}
						<div class="flex justify-between items-center">
							<p class="text-2xl">{data.asisten.nama}</p>
							<button
								on:click={() => {
									toggleIsEditing('nama');
									setTimeout(() => {
										name.focus();
									}, 100);
								}}
								class="flex gap-2 items-center"
							>
								<EditIcon />
							</button>
						</div>
					{/if}
				</div>
				<div class="w-full flex flex-col gap-4">
					<p class="text-2xl font-semibold text-left">Nim</p>
					{#if $isEditingNim}
						<div class=" justify-between items-center">
							<form
								bind:this={formNim}
								class="flex gap-4"
								use:enhance
								action="?/updateNim"
								method="post"
							>
								<input
									class="bg-transparent border-0 px-0 text-2xl focus:border-primary-500 w-full"
									value={data.asisten.nim}
									type="text"
									on:blur={() => {
										formNim.requestSubmit();
										toggleIsEditing('nim');
									}}
									bind:this={nim}
									name="nim"
								/>
								<button type="submit" class="text-black">
									<CheckIcon />
								</button>
							</form>
						</div>
					{:else}
						<div class="flex justify-between items-center">
							<p class="text-2xl">{data.asisten.nim}</p>
							<button
								on:click={() => {
									toggleIsEditing('nim');
									setTimeout(() => {
										nim.focus();
									}, 200);
								}}
								class="flex gap-2 items-center"
							>
								<EditIcon />
							</button>
						</div>
					{/if}
				</div>
				<div class="w-full flex flex-col gap-4">
					<p class="text-2xl font-semibold text-left">Prodi</p>
					<p class="text-2xl">{data.asisten.prodi}</p>
				</div>
			</div>
		</div>
		<div class="flex-1 w-full">
			<h1>Jadwal Asisten</h1>
			<button class="btn variant-ghost-primary mt-4 text-end ">Semua Jadwal</button>
			<div class="flex flex-col mt-12">
				<div class="card h-24 ">
					Test
				</div>
			</div>
		</div>
	</div>
</section>

<style class="postcss">
	.p-form {
		@apply text-2xl font-semibold text-left;
	}
	h1 {
		@apply text-4xl font-semibold;
	}
</style>
