<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";

    let y;
    let innerHeight = 0;
    let innerWidth = 0;

    function goTop() {
        document.body.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <div class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] transition-opacity " + (
        y > 100 
        ? "opacity-100 pointer-events-auto" 
        : "pointer-events-none opacity-0")}
    >

        <button 
            on:click={goTop} 
            aria-label="Scroll to top"
            class="ml-auto rounded-full bg-blue-600 text-white px-4 py-2 shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105 focus:outline-none"
        >
            <i class="fa-solid fa-arrow-up grid place-items-center aspect-square" />
        </button>
    </div>
    
    <Header y={y} />
    <slot />
    <Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
