<script>
    import Card from "../../Card.svelte";
    import Title from "../../Title.svelte";
    import ProjectLink from "./ProjectLink.svelte";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faMapPin } from "@fortawesome/free-solid-svg-icons";
    import Navbar from "../../Navbar.svelte";
    import Project from "./Project.svelte";
    import ProjectTechnologies from "./ProjectTechnologies.svelte";
    import SvelteTooltip from "svelte-tooltip";
</script>

<Navbar />
<section class="mx-4 mb-4 flex-grow h-1">
    <Card>
        <div class="w-full h-full flex justify-stretch items-stretch z-10">
            <div class="w-3/6 p-8 flex items-center justify-center">
                <Title text={"Projects"} />
            </div>
            <div
                class="w-3/6 max-h-full relative p-8 grid grid-cols-2 gap-4 overflow-x-hidden overflow-y-scroll gap-12"
            >
                <Project inDev={false}>
                    <img
                        slot="Thumbnail"
                        src="Projects/Josephheinzlive.png"
                        alt="Joseph Heinz Live Open Graph Image"
                        class="w-full h-full object-cover"
                    />
                    <span slot="ProjectName">JosephHeinz.Live</span>
                    <span slot="Projectdesc"
                        >A custom livestreaming website I built with my own RTMP
                        server.</span
                    >
                    <ProjectTechnologies slot="Technologies">
                        <SvelteTooltip tip="Supabase" top color="#e9e9e9">
                            <i
                                class="devicon-supabase-plain text-2xl text-black"
                            ></i>
                        </SvelteTooltip>
                        <SvelteTooltip tip="Svelte" top color="#e9e9e9">
                            <i class="devicon-svelte-plain text-black text-2xl"
                            ></i>
                        </SvelteTooltip>
                        <SvelteTooltip tip="NodeJS" top color="#e9e9e9">
                            <i
                                class="devicon-nodejs-plain-wordmark text-black text-2xl"
                            ></i>
                        </SvelteTooltip>
                        <SvelteTooltip tip="Cloudflare" top color="#e9e9e9">
                            <i
                                class="devicon-cloudflare-plain text-black text-2xl"
                            ></i>
                        </SvelteTooltip>
                        <SvelteTooltip tip="Docker" top color="#e9e9e9">
                            <i class="devicon-docker-plain text-black text-2xl"
                            ></i>
                        </SvelteTooltip>
                        <SvelteTooltip tip="NGINX" top color="#e9e9e9">
                            <i
                                class="devicon-nginx-original text-black text-2xl"
                            ></i>
                        </SvelteTooltip>
                        <SvelteTooltip tip="TailwindCSS" top color="#e9e9e9">
                            <i
                                class="devicon-tailwindcss-original text-black text-2xl"
                            ></i>
                        </SvelteTooltip>
                    </ProjectTechnologies>
                    <div slot="Buttons">
                        <ProjectLink
                            github={"https://github.com/josephheinz/Livestream-Website"}
                            live={"https://josephheinz.live/"}
                        />
                    </div>
                </Project>
                <Project>
                    <img
                        slot="Thumbnail"
                        src="Projects/Portfolio.png"
                        alt="Picture of my portfolio homepage"
                        class="w-full h-full object-cover"
                    />
                    <span slot="ProjectName">My Portfolio</span>
                    <span slot="Projectdesc"
                        >The portfolio site you are on right now, built to
                        showcase my work.</span
                    >
                    <ProjectTechnologies slot="Technologies">
                        <SvelteTooltip tip="Svelte" top color="#e9e9e9">
                            <i class="devicon-svelte-plain text-black text-2xl"
                            ></i>
                        </SvelteTooltip>
                        <SvelteTooltip tip="TailwindCSS" top color="#e9e9e9">
                            <i
                                class="devicon-tailwindcss-original text-black text-2xl"
                            ></i>
                        </SvelteTooltip>
                    </ProjectTechnologies>
                    <div slot="Buttons">
                        <ProjectLink
                            github={"https://github.com/josephheinz/Portfolio"}
                        />
                    </div>
                </Project>
                <Project inDev={true}>
                    <!--<img
                        slot="Thumbnail"
                        alt="Picture of my portfolio homepage"
                        class="w-full h-full object-cover"
                    />-->
                    <span slot="ProjectName">Student Tracker Dashboard</span>
                    <span slot="Projectdesc"
                        >A dashboard for the classroom tracking system that
                        allows you to view and edit where students are.</span
                    >
                    <ProjectTechnologies slot="Technologies">
                        <SvelteTooltip tip="Svelte" top color="#e9e9e9">
                            <i class="devicon-svelte-plain text-black text-2xl"
                            ></i>
                        </SvelteTooltip>
                        <SvelteTooltip tip="TailwindCSS" top color="#e9e9e9">
                            <i
                                class="devicon-tailwindcss-original text-black text-2xl"
                            ></i>
                        </SvelteTooltip>
                        <SvelteTooltip tip="TypeScript" top color="#e9e9e9">
                            <i
                                class="devicon-typescript-plain text-black text-2xl"
                            ></i>
                        </SvelteTooltip>
                    </ProjectTechnologies>
                    <div slot="Buttons">
                        <ProjectLink
                            github={"https://github.com/josephheinz/Student-Tracker-Dashboard"}
                        />
                    </div>
                </Project>
            </div>
        </div>
    </Card>
</section>
