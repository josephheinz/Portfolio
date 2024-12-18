<script>
    import Tech from "./Tech.svelte";
</script>

<div
    class="w-full h-content bg-pink border-4 border-black shadow-custom p-2 relative"
>
    <h1 class="text-2xl font-medium font-unbounded">My Tech Stack</h1>
    <br /><br />
    <div class="w-full grid grid-cols-4 gap-2">
        <Tech icon={"devicon-javascript-plain"} name={"JavaScript"} />
        <Tech icon={"devicon-html5-plain"} name={"HTML"} />
        <Tech icon={"devicon-css3-plain"} name={"CSS"} />
        <Tech icon={"devicon-python-plain"} name={"Python"} />
        <Tech icon={"devicon-csharp-plain"} name={"C#"} />
        <Tech icon={"devicon-nodejs-plain"} name={"Node.JS"} />
        <Tech icon={"devicon-supabase-plain"} name={"Supabase"} />
        <Tech icon={"devicon-svelte-plain"} name={"Svelte"} />
        <Tech icon={"devicon-tailwindcss-plain"} name={"TailwindCSS"} />
    </div>
</div>
