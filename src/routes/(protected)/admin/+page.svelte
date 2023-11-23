<script lang="ts">
	import { goto } from '$app/navigation';
	import AddDataForm from '$lib/components/AddDataForm.svelte';
	import EditForm from '$lib/components/EditForm.svelte';
	import DeleteIcon from '$lib/components/icons/DeleteIcon.svelte';
	import EditIcon from '$lib/components/icons/EditIcon.svelte';
	import { clearInputValue, nama, nim, prodi } from '$lib/input.js';
	import { asisten, currrentEditedData, isAdd, isEdit, isError } from '$lib/stores/store.js';
	import { deleteData } from '$lib/utils/api.js';
	import { Avatar, LightSwitch } from '@skeletonlabs/skeleton';
	import { get } from 'svelte/store';

	export let data;
	$: asisten.set(data.data);

	const showEdit = (i: number) => {
		currrentEditedData.set($asisten[i]);
		nim.set(get(currrentEditedData).nim!);
		nama.set(get(currrentEditedData).nama!);
		prodi.set($currrentEditedData.prodi!);

		isEdit.set(!$isEdit);
	};
</script>


<svelte:head>
	<title>Dashboard | LabLoom</title>
</svelte:head>

<div class="w-full h-full relative">
	<div class="absolute z-[1] h-full w-full bg-gradient-to-t from-surface-600 opacity-80" />
	<div class="flex z-10 min-w-full justify-center px-8 pt-8 mb-12 items-center relative">
		<div class="flex justify-between w-full container items-center">
			<h1>Welcome, {data.user}</h1>
			<div class="hidden md:flex gap-4 items-center shadow-md px-6 rounded-2xl py-4">
				<Avatar
					src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"
					width="w-14"
					rounded="rounded-full"
				/>
				<div>
					<p class="font-semibold">{data.user}</p>
					<p>admin</p>
				</div>
				<div class="rotate-90 text-2xl font-medium">></div>
			</div>
			<button class="btn variant-ghost-error" on:click={() => goto('/logout')}>Logout</button>
		</div>
	</div>
	<div
		class="flex gap-2 relative overflow-hidden justify-center items-center w-full h-full min-h-screen px-8"
	>
		<div class="z-10 flex overflow-x-scroll container items-center">
			<AddDataForm />
			<EditForm />
			<div class=" flex-1 z-10 flex flex-col gap-2">
				<div class="flex justify-between w-fit items-center">
					<!-- <LightSwitch /> -->
					<div>
						<button
							type="button"
							on:click={() => {
								goto('/asisten/add')
							}}
							class="btn variant-filled-primary text-white">Add +</button
						>
					</div>
				</div>
				<div class="table-container w-full">
					<table class="table table-hover">
						<thead>
							<tr>
								<th>Profile</th>
								<th>NIM</th>
								<th>Name</th>
								<th>Prodi</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{#each $asisten as row, i}
								<tr on:click={()=>goto('/asisten/'+row.nim)}>
									<td>
										<Avatar src={row.gambar} width="w-14" alt="pfp" rounded="rounded-full" />
									</td>
									<td>{row.nim}</td>
									<td>{row.nama}</td>
									<td>{row.prodi}</td>
									<td class="z-20 ">
										<div class="flex absolute gap-2">
											<!-- <button
												type="button"
												class="btn variant-filled-error"
												on:click={() => {
													if (row.nim) {
														deleteData(row.nim);
													}
												}}><DeleteIcon /></button
											> -->
										</div></td
									>
								</tr>
							{/each}
						</tbody>
					</table>
					{#if $isError.isError}
						<h1>ERROR : {$isError.message}</h1>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	h1 {
		@apply text-4xl font-semibold;
	}
</style>
