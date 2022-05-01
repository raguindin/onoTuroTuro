<script>
	// imports;
	import Normalize from "./dependencies/Normalize.svelte"
	import Header from "./components/Header.svelte"

	let styles = {
		'primary-g': 'hsl(105, 23%, 40%)',
		'primary-b': 'hsl(234, 21%, 48%)',
		'primary-r': 'hsl(7, 45%, 42%)',
		'primary-y': 'hsl(45, 78%, 65%)',
		'background': 'hsl(46, 100%, 93%)',
	};
	
	$: cssVarStyles = Object.entries(styles)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');
</script>

<main style:global="{cssVarStyles}">
	<Normalize/>
	<Header/>
</main>