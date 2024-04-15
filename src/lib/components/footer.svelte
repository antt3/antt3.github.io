<script>
	import LinkedIn from './icons/linkedin.svelte';
	import GitHub from './icons/github.svelte';
</script>

<footer class="footer footer-center bg-primary text-primary-content rounded p-10">
	<nav class="grid grid-flow-col gap-4">
		<a class="link link-hover" href="/projects">Projects</a>
		<a class="link link-hover" href="/about">About Me</a>
		<a class="link link-hover" href="/posts">Blog</a>
	</nav>
	<nav>
		<div class="grid grid-flow-col gap-4">
			<a href="https://www.linkedin.com/in/antt3/">
				<LinkedIn />
			</a>
			<a href="https://github.com/antt3">
				<GitHub />
			</a>
		</div>
	</nav>
	<aside>
		<p>Copyright &copy; {`${new Date().getFullYear()}`} - All right reserved by ME</p>
	</aside>
</footer>
