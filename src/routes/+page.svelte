<script>
    import Card from "../Card.svelte";
    import FuzzyBlob from "../FuzzyBlob.svelte";
    import Title from "../Title.svelte";
    import WaveEmoji from "../WaveEmoji.svelte";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faUser } from "@fortawesome/free-solid-svg-icons";
    const color = "#FF0000";
    const posX = 0;
    const posY = 0;
    const bgWhite = "#FFFFFF";
</script>

<main class="bg-black w-screen h-screen block font-karla px-4 absolute">
    <section class="w-full">
        <Card bg={bgWhite}>
            <div class="w-full h-full flex items-center">
                <Title text={"JH"} />
            </div>
        </Card>
    </section>
    <section class="w-full h-5/6">
        <Card bg={"#F7E7CE"}>
            <div class="w-full h-full flex">
                <div class="grow p-8 flex flex-col items-left justify-evenly">
                    <div>
                        <span>Hey I'm</span>
                        <span>
                            <Title text={"Joseph Heinz"} />
                            <WaveEmoji/>
                        </span>
                    </div>
                </div>
                <div class="grow">adf</div>
            </div>
        </Card>
    </section>
</main>
