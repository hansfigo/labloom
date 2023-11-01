<script>
	import { ProgressBar } from '@skeletonlabs/skeleton';
	import '../app.css';
	import { navigating } from '$app/stores';
</script>

<div class="relative">
	{#if $navigating}
		<div class="fixed z-20 w-full top-0">
			<ProgressBar />
		</div>
	{/if}
	<slot />
</div>

<style>
</style>
