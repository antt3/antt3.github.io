<script>
	import { onMount } from 'svelte';
	import { themes } from './themes';

	let current_theme = '';

	onMount(() => {
		if (typeof window !== 'undefined') {
			const theme = window.localStorage.getItem('theme');
			if (theme && themes.includes(theme)) {
				document.documentElement.setAttribute('data-theme', theme);
				current_theme = theme;
			}
		}
	});

	function set_theme(event) {
		const select = event.target;
		const theme = select.value;
		if (themes.includes(theme)) {
			const one_year = 60 * 60 * 24 * 365;
			window.localStorage.setItem('theme', theme);
			document.cookie = `theme=${theme}; max-age=${one_year}; path=/; SameSite=Lax`;
			document.documentElement.setAttribute('data-theme', theme);
			current_theme = theme;
		}
	}
</script>

<div>
	<select
		bind:value={current_theme}
		data-choose-theme
		class="pr-9 select select-bordered select-primary bg-base-100 select-xs text-base-content"
		on:change={set_theme}
	>
		<option value="" disabled={current_theme !== ''}> Choose a theme </option>
		{#each themes as theme}
			<option value={theme} class="capitalize">{theme}</option>
		{/each}
	</select>
</div>
