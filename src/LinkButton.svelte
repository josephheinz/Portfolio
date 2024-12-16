<script>
    const { color, link, text } = $props();
</script>

<a href={link} style="--color:{color};" class="p-2 text-lg border-4 border-[var(--color)] bg-none text-[var(--color)] rounded-xl transition-all hover:rounded-none hover:bg-[var(--color)] hover:text-white">
    {text}
</a>
