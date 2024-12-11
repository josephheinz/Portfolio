<script>
    const { color, posX, posY } = $props();
</script>

<div
    class="w-40 h-40 rounded-full absolute"
    style="background: radial-gradient(circle, {color} 20%, rgba(0, 0, 0, 0) 100%); 
         filter: blur(60px); top:{posY}px; left:{posX}px;"
></div>
