<div
    class="grid grid-cols-2 grid-rows-2 gap-4 h-72 w-[90%] mx-auto bg-slate-100 border-4 border-black shadow-custom p-2"
>
    <div class="w-full h-full border-4 border-black shadow-custom-small">
        <slot name="Thumbnail"/>
    </div>
    <div>
        <h1 class="text-xl font-black font-unbounded">
            <slot name="ProjectName">Default Name</slot>
        </h1>
        <span>
            <slot name="Projectdesc"
                >Default project description. Change this later</slot
            >
        </span>
    </div>
    <div class="flex flex-col w-full h-full gap-2">
        <h2 class="text-md font-bold font-unbounded">Technologies</h2>
        <div class="h-2 grow w-full">
            <slot name="Technologies" />
        </div>
    </div>
    <slot name="Buttons" />
</div>
