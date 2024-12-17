<script>
    const { color, link, text } = $props();
</script>

<a
    href={link}
    style="--color:{color};"
    class="py-2 px-4 text-lg border-4 border-black shadow-custom-small bg-[var(--color)] text-black transition-all hover:shadow-none"
>
    {@html text}
</a>
