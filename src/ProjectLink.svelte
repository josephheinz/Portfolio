<script>
    const { color, link, text } = $props();
</script>

<a
    href={link}
    target="_blank"
    style="--color:{color};"
    class="py-1 px-2 text-lg border-4 border-black shadow-custom-small bg-[var(--color)] text-black transition-all hover:shadow-none"
>
    {@html text}
</a>
