<script>
	import SidePanel from "../../components/SidePanel.svelte"
	import TextArea from "../../components/text_area.svelte"
	import { onMount } from "svelte"
	import * as d3 from "d3"
	// For parsing the CSV file and extracting the column names.
	let data, keys
	let values = []
	onMount(async () => {
		data = await d3.csv("../src/files/data.csv")
		// console.log(data)
		keys = Object.keys(data[0])
		// console.log(keys)
		data.forEach((data_el) => {
			values.push(Object.values(data_el))
		})
		// console.log(values)
	})

	// When a li tag is clicked, adding the template string to the textbox.
	let addColName
	const handleClick = (e) => {
		// console.log(e.detail.key)
		addColName(e.detail.key)
	}
</script>

<!-- <h1>Welcome to the dashboard!</h1> -->
{#if keys != undefined}
	<SidePanel {keys} on:add={handleClick} />
	<!-- {#each keys as key}
		<p>{key}</p>
	{/each} -->
	<TextArea bind:appendText={addColName} />
{/if}

<style>
	/* h1 {
		position: relative;
		top: 20px;
		left: 50px;
	} */
</style>
