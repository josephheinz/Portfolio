<script>
    import Card from "../Card.svelte";
    import FuzzyBlob from "../FuzzyBlob.svelte";
    import Title from "../Title.svelte";
    import LinkButton from "../LinkButton.svelte";
    import WaveEmoji from "../WaveEmoji.svelte";
    import Heading from "../Heading.svelte";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faMapPin } from "@fortawesome/free-solid-svg-icons";
    import Navbar from "../Navbar.svelte";
    const bgWhite = "#FFFFFF";
</script>

<Navbar />
<section class="mx-4 h-1 grow mb-4">
    <Card>
        <div class="w-full h-full flex justify-stretch items-stretch z-10">
            <div class="w-3/6 p-8 flex items-center justify-end">
                <img
                    src="Headshot.png"
                    alt="Headshot of Joseph Heinz"
                    class="w-5/6"
                />
            </div>
            <div
                class="w-3/6 p-8 flex flex-col items-start justify-center gap-12"
            >
                <div>
                    <span>Hey I'm</span>
                    <span class="flex">
                        <Title text={"Joseph Heinz"} />
                        <WaveEmoji />
                    </span>
                    <span
                        >A <span class="font-bold">Web-Developer</span> from</span
                    ><br />
                    <span>📍Grand Haven, Michigan, USA </span>
                </div>
                <div>
                    <LinkButton
                        text={"My Work"}
                        color={"#FF4747"}
                        link={"/projects"}
                    />
                </div>
            </div>
        </div>
    </Card>
</section>
