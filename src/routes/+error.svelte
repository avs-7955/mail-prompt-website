<script>
	import "../styles/global.css"
	import { page } from "$app/stores"
	import { base } from "$app/paths"
</script>

<div class="error">
	<h1>{$page.status}: {$page.error.message}</h1>
	<a href="{base}/">Go back to file upload...</a>
</div>

<style>
	.error {
		text-align: center;
		margin: 20% auto;
	}
	a {
		color: var(--c-action-primary);
		text-decoration: none;
	}
	a:hover {
		border-bottom: 1px solid var(--c-action-primary);
	}
</style>
