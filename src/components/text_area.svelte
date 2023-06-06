<script>
	import "../styles/global.css"
	import { redirect } from "@sveltejs/kit"
	import { error } from "@sveltejs/kit"

	let text

	// Sending the text to the backend for file creation.
	async function handleSubmit(event) {
		let data = {
			message: text,
		}
		console.log(JSON.stringify(data))

		let fetchOptions = {
			//HTTP method set to POST.
			method: "POST",
			mode: "no-cors",
			body: JSON.stringify(data),
		}
		const res = await fetch("http://localhost:3000/dashboard", fetchOptions)
		// if (!res.ok) {
		// 	throw error(400, res.text())
		// }
		// upon successful file creation,sending an alert message.
		text = ""
		alert("The txt files have been created.")
	}

	// Appending the clicked column header as a template string to the text
	export const appendText = (key) => {
		// console.log(text)
		text = `${text.trim()} {{.${key}}}`
	}
</script>

<section class="text-area">
	<!-- <div>I am visible</div> -->
	<form method="POST" on:submit|preventDefault={handleSubmit}>
		<div class="container">
			<div
				id="textInput"
				contenteditable="true"
				bind:innerText={text}
				spellcheck="true"
			/>
			<button type="submit" class="post-btn">Post</button>
		</div>
	</form>
</section>

<style>
	.text-area {
		/* background-color: var(--c-background-primary); */
		background-color: #fa9884;
		height: 100vh;
		width: 77%;
		left: 23%;
		position: relative;
	}
	.container {
		background-color: #fff;
		width: min(90vmin, 90%);
		padding: 50px 30px;
		position: absolute;
		transform: translate(-50%, -50%);
		left: 50%;
		top: 50%;
		border-radius: 10px;
		box-shadow: 0 25px 50px rgba(7, 20, 35, 0.2);
	}
	#textInput {
		padding: 20px;
		margin-top: 10px;
		border: 1px solid #ddd;
		height: 50vh;
	}
	#textInput:focus {
		box-shadow: 0 0 0 2px #fff 0 0 0 3px #020929;
	}
	.post-btn {
		position: relative;
		left: 85%;
		padding: 10px 20px;
		margin-top: 10px;
		background-color: #fa9884;
		border: none;
		border-radius: 10px;
		font-size: large;
		cursor: pointer;
		color: var(--c-text-primary);
	}
	.post-btn:hover {
		transition: transform 0.3s ease-out;
		transform: scale(1.05, 1.1);
	}
</style>
