<script>
    const { bg, id = "" } = $props();
</script>

<section
    class="w-full h-full rounded-lg block relative my-4 p-4 overflow-hidden isolate"
    {id}
    style="background:{bg};"
>
    <!-- <img
        src="PaperTexture.jpg"
        alt="paper texture"
        class="absolute inset-0 w-full h-full object-cover mix-blend-multiply pointer-events-none opacity-20 z-0"
    />-->
    <slot class="z-10" />
</section>
