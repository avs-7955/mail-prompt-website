<script>
	import SidePanel from "../../components/SidePanel.svelte"
	import { onMount } from "svelte"
	import * as d3 from "d3"
	let data, keys
	let values = []
	onMount(async () => {
		data = await d3.csv("../src/files/data.csv")
		console.log(data)
		keys = Object.keys(data[0])
		console.log(keys)
		data.forEach((data_el) => {
			values.push(Object.values(data_el))
		})
		console.log(values)
	})
</script>

<!-- <h1>Welcome to the dashboard!</h1> -->
{#if keys != undefined}
	<SidePanel {keys} {values} />
	<!-- {#each keys as key}
		<p>{key}</p>
	{/each} -->
{/if}

<style>
	/* h1 {
		position: relative;
		top: 20px;
		left: 50px;
	} */
</style>
