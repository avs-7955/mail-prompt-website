<script>
	import "../styles/global.css"
	let dragover = false
	let hide = false
	let fileName = ""
	let files, input
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
/>

<form action="?/upload" method="POST" enctype="multipart/form-data">
	<div class="modal">
		<div class="modal-header">
			<div class="modal-logo">
				<span class="logo-circle">
					<span class="material-symbols-outlined"> folder_open </span>
				</span>
			</div>
			<button class="btn-close">
				<span class="material-symbols-outlined"> close </span>
			</button>
		</div>
		<div class="modal-body">
			<h2 class="modal-title">Upload a file</h2>
			<p class="modal-description">Attach the file below</p>
			<div
				class="dropzone-wrapper"
				on:dragover={() => {
					dragover = true
				}}
				on:dragleave={() => {
					dragover = false
				}}
				on:drop={() => {
					hide = true
				}}
				class:dragover
			>
				<div class="dropzone-desc" class:hide>
					<span class="material-symbols-outlined upload_file_icon">
						upload_file
					</span>
					<span class="upload-area-title"
						>Drag file(s) here to upload.</span
					>
					<span class="upload-area-description">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						Alternatively, you can select a file by <br />
						<span class="box-in-click">clicking here</span>
					</span>
				</div>
				<input
					type="file"
					name="file"
					class="dropzone"
					bind:files
					bind:this={input}
					on:click={() => {
						hide = true
					}}
				/>
				{#if files?.[0]}
					<div class="preview">{files[0].name}</div>
				{/if}
			</div>
		</div>
		<div class="modal-footer">
			<button class="btn-secondary" on:click={() => (input.value = "")}
				>Cancel</button
			>
			<button type="submit" class="btn-primary">Upload File</button>
		</div>
	</div>
</form>

<style>
	button {
		font: inherit;
		cursor: pointer;
	}

	.modal {
		width: 90%;
		max-width: 500px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 8vh;
		margin-bottom: 8vh;
		background-color: #fff;
		border-radius: 0.5rem;
		box-shadow: 0 5px 15px rgba(#000, 0.2);
	}

	.modal-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding: 1.5rem 1.5rem 1rem;
	}

	.logo-circle {
		width: 3.5rem;
		height: 3.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		background-color: var(--c-action-primary-accent);
	}
	.logo-circle .material-symbols-outlined {
		max-width: 1.5rem;
		color: var(--c-action-primary);
	}

	.btn-close {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 0.25rem;
		border: none;
		background-color: transparent;
	}
	.btn-close:hover,
	.btn-close:focus {
		background-color: var(--c-action-primary-accent);
	}

	.modal-body {
		padding: 1rem 1.5rem;
	}

	.modal-title {
		font-weight: 700;
		margin-bottom: 0;
	}

	.modal-description {
		margin-top: 5px;
		color: var(--c-text-secondary);
	}
	.upload_file_icon {
		font-size: 2.5rem;
		color: var(--c-action-primary);
	}

	.upload-area-title {
		margin-top: 0.5rem;
		display: block;
		font-weight: 700;
		color: var(--c-text-primary);
	}

	.upload-area-description {
		display: block;
		color: var(--c-text-secondary);
	}
	.box-in-click {
		color: var(--c-action-primary);
		font-weight: 700;
		border-bottom: 1px solid var(--c-action-primary);
		cursor: pointer;
	}

	.modal-footer {
		padding: 1rem 1.5rem 1.5rem;
		display: flex;
		justify-content: flex-end;
	}
	.modal-footer [class*="btn-"] {
		margin-left: 0.75rem;
	}

	.btn-secondary,
	.btn-primary {
		padding: 0.5rem 1rem;
		font-weight: 500;
		border: 2px solid var(--c-action-secondary);
		border-radius: 0.25rem;
		background-color: transparent;
	}

	.btn-primary {
		color: #fff;
		background-color: var(--c-action-primary);
		border-color: var(--c-action-primary);
	}
	.dropzone-wrapper {
		border: 2px dashed #91b0b3;
		color: #92b0b3;
		position: relative;
		height: 170px;
	}

	.dropzone-desc {
		position: absolute;
		margin: 0 auto;
		left: 0;
		right: 0;
		text-align: center;
		width: 60%;
		top: 20px;
		font-size: 16px;
	}

	.dropzone,
	.dropzone:focus {
		position: absolute;
		outline: none !important;
		width: 100%;
		height: 150px;
		cursor: pointer;
		opacity: 0;
	}

	.dropzone-wrapper:hover,
	.dropzone-wrapper.dragover {
		background: #ecf0f5;
		border: 2px dashed var(--c-action-primary);
	}
	.hide {
		display: none;
	}
	.preview {
		font-weight: 700;
		position: relative;
		top: 45%;
		left: 45%;
		color: var(--c-text-primary);
	}
</style>
