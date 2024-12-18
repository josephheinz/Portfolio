<script>
    const { github = "", live = "" } = $props();

    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faGithub } from "@fortawesome/free-brands-svg-icons";
    import { faGlobe } from "@fortawesome/free-solid-svg-icons";
</script>

{#if github != ""}
    <a
        href={github}
        target="_blank"
        class="py-2 px-4 m-4 text-lg border-4 border-black shadow-custom-small bg-custom-black text-white transition-all hover:shadow-none cursor-pointer"
    >
        <FontAwesomeIcon icon={faGithub} /> GitHub
    </a>
{/if}
{#if live != ""}
    <a
        href={live}
        target="_blank"
        class="py-2 px-4 m-4 text-lg border-4 border-black shadow-custom-small bg-gray text-black transition-all hover:shadow-none cursor-pointer"
    >
        <FontAwesomeIcon icon={faGlobe} /> Live Site
    </a>
{/if}
