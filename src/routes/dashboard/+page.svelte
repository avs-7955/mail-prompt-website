<script>
	import SidePanel from "../../components/SidePanel.svelte"
	import { onMount } from "svelte"
	import * as d3 from "d3"
	let data, keys
	onMount(async () => {
		data = await d3.csv("../src/files/data.csv")
		console.log(data)
		keys = Object.keys(data[0])
		console.log(keys)
	})
</script>

<h1>Welcome to the dashboard!</h1>
{#if keys != undefined}
	<SidePanel {keys} />
	<!-- {#each keys as key}
		<p>{key}</p>
	{/each} -->
{/if}
