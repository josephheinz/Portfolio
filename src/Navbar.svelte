<script>
    import Card from "./Card.svelte";
</script>

<section class="mx-4">
    <Card>
        <div class="w-full h-full flex items-center justify-between">
            <h1 class="text-2xl font-black font-unbounded">
                <a href="../" class="cursor-pointer">Joseph Heinz</a>
            </h1>
            <div class="flex gap-2">
                <a
                    href="/projects"
                    class="py-1 px-2 border-4 border-black bg-pink transition-all hover:shadow-custom-small"
                    >Projects</a
                >
                <a
                    href="/about"
                    class="py-1 px-2 border-4 border-black bg-pink transition-all hover:shadow-custom-small"
                    >About Me</a
                >
            </div>
        </div>
    </Card>
</section>
