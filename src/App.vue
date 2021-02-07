<template>
    <body class="font-sans antialiased bg-gray-100">
        <div id="app" class="min-h-screen">
            <div class="flex justify-center">
                <img alt="Vue logo" src="./assets/logo.png">
            </div>

            <div class="mt-5 lg:text-center">
                <h2 class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Tileset Converter
                </h2>
                <p class="mt-2 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Converts "A2" and partically "A4" tilesets to 47 tilesets. <a @click="goTo('#faq')" href="#" class="font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">Learn More</a>
                </p>
            </div>

            <div class="py-6 px-3 lg:px-8 sm:p-6">
                <dropzone
                    :onFile="addImage"
                />

                <div v-if="files.length > 0" class="pt-6 text-right">
                    <button @click="generateTilesets" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Process Images
                    </button>
                </div>
            </div>

            <div v-if="files.length > 0" class="pb-6 px-3 lg:px-8 sm:pb-6 sm:px-6">
                <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                        <previews
                            v-for="(file, index) in files"
                            :key="index"
                            :file="file"
                            :onDelete="removeImage"
                        />
                    </div>
                </div>
            </div>

            <div id="faq" class="px-3 lg:px-8 sm:p-6 mt-20">
                <div class="lg:text-center">
                    <h2 class="text-2xl mb-3 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                        About / FAQ
                    </h2>
                </div>

                <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-1 gap-8">
                            <div class="col-span-1">
                                <h3 class="text-xl mb-3 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl">
                                    What is an "A1" tileset and what does it convert to?
                                </h3>

                                <p class="text-base text-gray-700 mb-6">A1 or "animated" tilesets consists of 6 tiles in a 2x3 grid. Each frame is the same composition as A2's, A1's just have more frames. This tool will attempt to convert individual A1 frames into "47" autotile formats:</p>

                                <div class="flex justify-center items-center">
                                    <img alt="a2 tileset" src="./assets/a2-example.png">
                                    <svg class="h-12 w-12 mx-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                    </svg>
                                    <img alt="a2 autotile" src="./assets/a2-autotile.png">
                                </div>
                            </div>

                            <div class="col-span-1">
                                <h3 class="text-xl mb-3 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl">
                                    What is an "A2" tileset and what does it convert to?
                                </h3>

                                <p class="text-base text-gray-700 mb-6">A2 or "ground" tilesets consists of 6 tiles in a 2x3 grid. This tool will attempt to convert A2's into a "47" autotile format:</p>

                                <div class="flex justify-center items-center">
                                    <img alt="a2 tileset" src="./assets/a2-example.png">
                                    <svg class="h-12 w-12 mx-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                    </svg>
                                    <img alt="a2 autotile" src="./assets/a2-autotile.png">
                                </div>
                            </div>

                            <div class="col-span-1">
                                <h3 class="text-xl mb-3 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl">
                                    What is an "A4" tileset and what does it convert to?
                                </h3>

                                <p class="text-base text-gray-700 mb-6">A4 or "wall" tilesets tilesets consists of an "A2" tileset (blue) and a 4 tile wall tileset (green). This tool will attempt to convert the A4 part into a stacked "47" tilset like below. If you know how to map the wall tileset (green) to a 16 tileset (if at all possible), please let me know!</p>

                                <div class="flex justify-center items-center mt-8">
                                    <img alt="a4 tileset" src="./assets/a4-example.png">
                                    <svg class="h-12 w-12 mx-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                    </svg>
                                    <img alt="a4 autotile" src="./assets/a4-autotile.png">
                                </div>
                            </div>

                            <div class="col-span-1">
                                <h3 class="text-xl mb-3 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl">
                                    Why is "A3" tilesets not supported?
                                </h3>

                                <p class="text-base text-gray-700 mb-6">A3 or "building" tilesets consists of 4 tiles in a 2x2 grid. A2's are not supported by this tool, because honestly I don't know if they can be mapped to a 16 autotile or 47. If you know how to map the these tilesets to a 16 tileset (if at all possible), please let me know!</p>

                                <!-- <p class="text-base text-gray-700 mb-6">A2 or "building" tilesets consists of 4 tiles in a 2x2 grid. This tool will attempt to convert A2's into a "16" autotile format:</p>

                                <div class="flex justify-center items-center">
                                    <img alt="a2 tileset" src="./assets/a3-example.png">
                                    <svg class="h-12 w-12 mx-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                    </svg>
                                    <img alt="a2 autotile" src="./assets/a3-autotile.png">
                                </div> -->
                            </div>

                            <div class="col-span-1">
                                <h3 class="text-xl mb-3 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl">
                                    Why is "A5" tilesets not supported?
                                </h3>

                                <p class="text-base text-gray-700 mb-6">A5 or "normal" tilesets are a mix of tiles with no (to my knowledge) autotile support as such. A5's are not supported by this tool.</p>
                            </div>

                            <div class="col-span-1">
                                <h3 class="text-xl mb-3 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl">
                                    Who made this?
                                </h3>
                                <p class="text-base text-gray-700 mb-6">
                                    <a href="https://sirmre.com" class="font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">SirMrE</a>, I have made a lot of other crap, but this is the first RPG Maker/GMS/GD/etc tool.<br>
                                    The tool is <a href="https://github.com/MrEliasen/tileset-converter" class="font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">open source</a> (CC-BY-NC), not my finest work but that is what you get for a weekend project!
                                </p>
                                
                            </div>

                            <div class="col-span-1">
                                <h3 class="text-xl mb-3 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl">
                                    Can I buy you a coffee?
                                </h3>
                                <p class="text-base text-gray-700 mb-6">
                                    I appreciate the gesture, but don't worry. Take care of yourself instead, specially during these times.
                                </p>
                            </div>

                            <div class="col-span-1">
                                <h3 class="text-xl mb-3 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl">
                                    How can I learn more about tilesets?
                                </h3>
                                <p class="text-base text-gray-700">
                                    I personally found <a href="https://medium.com/@robotsweater/bots-guide-to-custom-art-in-rpgmaker-mv-understanding-tilesets-9178fe09e475" target="_blank" class="font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">this post</a> to be very helpful.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import dropzone from './components/dropzone.vue'
import previews from './components/previews.vue'
import TilesetCutter from './tileset/tileset_cutter.js'

export default {
    name: 'App',
    components: {
        dropzone,
        previews,
    },
    data() {
        return {
            processing: false,
            uploads: [],
            files: [],
        };
    },
    methods: {
        // tileset image loading and cutting
        async generateTilesets() {
            await Promise.all(this.files.map((tileset) => tileset.process()));
        },
        // UI and component related
        goTo(targetId) {
            const el = document.querySelector(targetId);

            window.scroll({
              top: el.getBoundingClientRect().top,
              behavior: 'smooth'
            });
        },
        async addImage(file) {
            try {
                const newTilset = new TilesetCutter(file);
                await newTilset.load();
                this.uploads.push(newTilset);
            } catch (error) {
                console.log(error);
            }

        },
        removeImage(index) {
            this.uploads.splice(index, 1);
        },
    }
}
</script>
