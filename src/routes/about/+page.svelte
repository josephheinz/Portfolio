<script>
    import Card from "../../Card.svelte";
    import Title from "../../Title.svelte";
    import Navbar from "../../Navbar.svelte";
    import TechStack from "./TechStack.svelte";
</script>

<Navbar />
<section class="mx-4 mb-4 flex-grow h-1">
    <Card>
        <div class="w-full h-full flex justify-stretch items-stretch z-10">
            <div class="w-3/6 p-8 flex items-center justify-center">
                <Title text={"About Me"} />
            </div>
            <div
                class="w-3/6 max-h-full"
            >
                <TechStack/>
            </div>
        </div>
    </Card>
</section>
