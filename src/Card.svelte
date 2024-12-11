<script>
    const { bg } = $props();
</script>

<section
    class="w-full h-full rounded-lg block relative my-4 p-4 overflow-hidden"
    style="background:{bg};"
>
    <slot/>
</section>
