<script>
    import Card from "../../Card.svelte";
    import FuzzyBlob from "../../FuzzyBlob.svelte";
    import Title from "../../Title.svelte";
    import LinkButton from "../../LinkButton.svelte";
    import WaveEmoji from "../../WaveEmoji.svelte";
    import Heading from "../../Heading.svelte";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faMapPin } from "@fortawesome/free-solid-svg-icons";
    import Navbar from "../../Navbar.svelte";
</script>

<Navbar />
<section class="w-full h-full block">
    <Card bg={"#f5ebd7"}>
        <div class="w-full h-full flex justify-stretch items-stretch z-10">
            <div class="w-3/6 p-8 flex items-center justify-center">
                <Title text={"Projects"} />
            </div>
            <div
                class="w-3/6 h-96 p-8 block overflow-x-hidden overflow-y-scroll gap-12"
            >
                <Card bg={"#ff5e8c"}>adsf</Card>
            </div>
        </div>
    </Card>
</section>
