<script>
	import "../styles/global.css"
	import { Svroller } from "svrollbar"
	export let keys
	// export let values
</script>

<div class="slider">
	<div class="sidepanel">
		<h3>Enteries</h3>
		<!-- <div class="line" /> -->
		<Svroller width="100%" height="90vh">
			{#each keys as key, i}
				<div class="section">
					<li><span class="section-title">{key}</span></li>
					<!-- <ul>
						{#each values as value}
							<li class="inner">{value[i]}</li>
						{/each}
					</ul> -->
				</div>
			{/each}
		</Svroller>
	</div>
</div>

<style>
	.sidepanel {
		position: fixed;
		height: 100vh;
		/* background-color: var(--c-text-secondary); */
		background-color: var(--c-background-primary);
		width: 23%;
		min-width: 100px;
		margin-left: 0;
		z-index: 2;
		line-height: 1.5em;
		color: var(--c-text-primary);
		padding-left: 3.2rem;
		padding-top: 10px;
		padding-right: 0;
		/* FOR SVROLLBAR */
		--svrollbar-track-width: 5px;
		--svrollbar-track-background: #787983;
		--svrollbar-track-opacity: 1;

		--svrollbar-thumb-width: 4px;
		--svrollbar-thumb-background: var(--c-text-primary);
		--svrollbar-thumb-opacity: 1;
	}
	.sidepanel:before {
		content: "";
		position: absolute;
		min-height: 100vh;
		width: 10px;
		top: 0;
		left: 100%;
		background-image: linear-gradient(
			to left,
			#fa9884,
			rgba(0, 0, 0, 0.3) 10px
		);
		z-index: 1;
	}
	.sidepanel span {
		position: relative;
		display: block;
		width: calc(100% - 2em);
		min-width: 100px;
		/* padding: 1em; */
		/* background-color: var(--c-text-secondary); */
	}
	/* TITLE */
	h3 {
		display: block;
		font-size: 1.3rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 600;
		margin-bottom: 5px;
	}
	/* SECTION ELEMENTS */
	.section {
		text-align: left;
		margin: 7%;
	}
	.section-title {
		display: block;
		/* padding-bottom: 0.8rem; */
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 600;
		padding-bottom: 0;
	}
	li {
		display: block;
		line-height: 1.7;
		margin: 0;
		cursor: pointer;
	}
	li:hover {
		text-decoration: underline;
	}
	/* .inner {
		margin: 0;
		cursor: pointer;
		line-height: 1.5;
	}
	.inner:hover {
		text-decoration: underline;
	}
	ul {
		margin: 0;
		padding-left: 10px;
	} */
</style>
