<script>
	import { nim, nama, prodi } from '$lib/input';
	import { isEdit, currrentEditedData } from '$lib/stores/store';
	import { updateData } from '$lib/utils/api';
	import { fade } from 'svelte/transition';
	import { enhance } from '$app/forms';
</script>

{#if $isEdit}
	<div transition:fade={{ delay: 250, duration: 300 }} class="flex-1 card p-8 z-10 relative">
		<form
			use:enhance
			enctype="multipart/form-data"
			method="POST"
			action="?/update"
			class="flex flex-col gap-4"
		>
			<h1 class="h3 font-bold">Edit {$currrentEditedData.nim}</h1>
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
			</label>F
			<div class="flex flex-col gap-2">
				<button type="submit" class="btn variant-filled">Send</button>
				<button
					type="button"
					on:click={() => {
						isEdit.set(!$isEdit);
					}}
					class="btn variant-filled-error">Cancel</button
				>
			</div>
		</form>
	</div>
{/if}
