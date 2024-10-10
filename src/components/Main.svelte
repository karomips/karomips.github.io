<script>
    import Step from "./Step.svelte";

    let steps = [
        { name: 'DaveStore', icon: 'fa-solid fa-cart-shopping' },
        { name: 'Workshop', icon: 'fa-solid fa-list-check' },
        { name: 'Projects', icon: 'fa-solid fa-diagram-project' }
    ];
</script>

<main class="flex flex-col flex-1 p-4">
    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                A few of my creative endeavors
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl text-white">
                Curious to <span class="poppins text-dark-green">see</span> my work?
            </h3>
        </div>

        <a href="https://www.youtube.com/watch?v=RXKabdUBiWM" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-dark-green duration-200">
            <i class="fa-regular fa-circle-play text-white" />
            <p class="text-white">Watch the video</p>
        </a>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg-gap-10">
            <Step step={{ name: 'Weather App', icon: 'fa-solid fa-sun' }}>
                <a href="https://github.com/karomips/weather-app2" target="_blank" class="block p-4 bg-white rounded-lg transition-transform transform hover:scale-105 shadow-lg">
                    <p class="text-black">The Weather App provides real-time weather updates <strong class="text-dark-green">using a weather API</strong>. Thank you!</p>
                </a>
            </Step>
            <Step step={{ name: 'Push Notification App', icon: 'fa-solid fa-bell' }}>
                <a href="https://github.com/Dumgrammer/pushnotiftracer" target="_blank" class="block p-4 bg-white rounded-lg transition-transform transform hover:scale-105 shadow-lg">
                    <p class="text-black">The Push Notification App allows users to receive alerts <strong class="text-dark-green">for important events and updates</strong>. Thank you!</p>
                </a>
            </Step>
            <Step step={{ name: 'Task Tracker', icon: 'fa-solid fa-tasks' }}>
                <a href="https://github.com/PickleC137/TaskTraker" target="_blank" class="block p-4 bg-white rounded-lg transition-transform transform hover:scale-105 shadow-lg">
                    <p class="text-black">The Task Tracker helps users manage their tasks <strong class="text-dark-green">effectively and efficiently</strong>. Thank you!</p>
                </a>
            </Step>
        </div>        
        
    </section>

    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="relative shadow-2xl grid place-items-center">
            <img src={"images/id-pic-trans.png"} alt="Profile Image" class="object-cover z-[2] max-h-[70vh] rounded-lg shadow-lg" />
        </div>
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl text-white">
                Hi! I'm <span class="poppins text-dark-green">Dave Justin</span> Arcilla<br />Front End
                <span class="poppins text-dark-green">Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl text-white">
                My <span class="text-dark-green">favorite tech</span> includes JavaScript (SvelteKit), TailwindCSS, CSS, and HTML.
            </p>
            <a class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer shadow-lg transition-transform transform hover:scale-105" href="https://www.facebook.com/djra.25/" target="_blank">
                <div class="absolute top-0 right-full w-full h-full bg-dark-green opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                <h4 class="relative z-10">Get in touch &rarr;</h4>
            </a>            
        </div>
    </section>

    <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-dark-green after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-dark-green py-4">
            <h6 class="text-lg sm:text-xl md:text-2xl text-white">Want to know more about me?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl text-white">
                A bit <span class="poppins text-dark-green">about</span> me.
            </h3>
        </div>
        <h1 class="text-lg sm:text-xl md:text-2xl text-center text-white">
            I'm currently a student with a passion for learning and growing. I enjoy immersing myself in online games during my free time, where I can unwind and connect with friends. When I'm not gaming, you'll often find me indulging in my favorite foods or catching up on some much-needed sleep. Life is all about balance, and I strive to enjoy every moment of it!
        </h1>
    </section>
</main>

<style>
    /* Custom CSS for dark green color */
    .text-dark-green {
        color: #246624; /* Dark green color */
    }

    .bg-dark-green {
        background-color: #246624; /* Dark green background */
    }
</style>
