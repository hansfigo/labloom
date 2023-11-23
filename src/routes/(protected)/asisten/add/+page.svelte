<script lang="ts">
	import { enhance } from '$app/forms';
	import { nama, nim, prodi } from '$lib/input';
	import { isAdd } from '$lib/stores/store';
	import { fade } from 'svelte/transition';
</script>

<div class="flex-1 card p-8 z-10 relative">
	<form
		use:enhance
		enctype="multipart/form-data"
		method="POST"
		action="?/post"
		class=" flex flex-col gap-4"
	>
		<h1 class="h3 font-bold">Add Data</h1>
		<label class="label">
			<span>NIM</span>
			<input name="nim" bind:value={$nim} class="input" title="Input (text)" type="text" />
		</label>

		<label class="label">
			<span>Nama</span>
			<input name="nama" bind:value={$nama} class="input" title="Input (text)" type="text" />
		</label>

		<label class="label">
			<span>Prodi</span>
			<input name="prodi" bind:value={$prodi} class="input" title="Input (text)" type="text" />
		</label>

		<label class="label">
			<span>Foto</span>
			<input name="gambar" class="input" type="file" />
		</label>
		<div class="flex flex-col gap-2">
			<button
				type="submit"
				on:click={() => {
					// handleSend(files);
					// isAdd.set(!$isAdd);
				}}
				class="btn variant-filled">Send</button
			>
			<button
				type="button"
				on:click={() => {
					isAdd.set(!$isAdd);
				}}
				class="btn variant-filled-error">Cancel</button
			>
		</div>
	</form>
</div>
