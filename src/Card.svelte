<script>
    const { bg = "#FFFFFF", id = "" } = $props();
</script>

<section
    class="w-full h-full block relative my-2 p-4 overflow-hidden isolate"
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
