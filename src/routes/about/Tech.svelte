<script>
    const { icon, name } = $props();
</script>

<div class="flex h-full w-full bg-green p-2 text-black gap-2 border-4">
    <i class="{icon} text-5xl"></i>
    <h1 class="font-unbounded font-medium">{name}</h1>
</div>
