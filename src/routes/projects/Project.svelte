<script>
    const { inDev = false } = $props();
</script>

<div
    class="grid grid-cols-1 grid-rows-3 gap-4 h-[28.75rem] w-full mx-auto bg-pink border-4 border-black shadow-custom relative overflow-hidden"
>
    {#if inDev}
        <div
            class="absolute top-20 -left-14 w-48 h-12 text-white text-sm font-bold flex items-center justify-center transform -rotate-45 origin-top-left overflow-hidden"
        >
            <div
                class="absolute inset-0 bg-blue-500 [background:repeating-linear-gradient(45deg,#1e3a8a,#1e3a8a_5px,#3b82f6_5px,#3b82f6_10px)]"
            ></div>
            <span class="relative z-10 text-xl font-black">In Dev</span>
        </div>
    {/if}
    <div class="w-full h-full border-b-4 border-black">
        <slot name="Thumbnail" />
    </div>
    <div class="p-2 relative">
        <h1 class="text-xl font-black font-unbounded">
            <slot name="ProjectName">Default Name</slot>
        </h1>
        <span>
            <slot name="Projectdesc"
                >Default project description. Change this later</slot
            >
        </span>
        <img
            src="Squiggle.png"
            alt="Squiggle line"
            class="absolute bottom-0 w-[95%] left-[2.5%] right-[2.5%]"
        />
    </div>
    <div
        class="flex flex-col w-full h-full gap-2 p-2 items-center justify-evenly"
    >
        <div class="h-2 grow w-full">
            <slot name="Technologies" />
        </div>
        <div class="grow mt-4">
            <slot name="Buttons" />
        </div>
    </div>
</div>
