<div
    class="grid grid-cols-1 grid-rows-3 gap-4 h-[28.75rem] w-full mx-auto bg-pink border-4 border-black shadow-custom"
>
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
