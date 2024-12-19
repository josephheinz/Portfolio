<script>
    import "../../app.css";
</script>

<svelte:head>
    <title>About Me</title>
</svelte:head>

<main class="bg-black w-screen min-h-screen flex flex-col font-karla absolute">
    <slot />
</main>

<style global>
    @import url("https://fonts.googleapis.com/css2??family=Unbounded:wght@200..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Karla:ital,wght@0,200..800;1,200..800&display=swap");
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    main {
        scroll-behavior: smooth;
    }
</style>
