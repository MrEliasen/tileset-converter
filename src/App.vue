<template>
    <body class="font-sans antialiased">
        <div id="app" class="min-h-screen bg-gray-100">
            <div class="flex justify-center">
                <img alt="Vue logo" src="./assets/logo.png">
            </div>

            <div class="py-6 px-3 lg:px-8 sm:p-6">
                <h2 class="font-semibold text-xl mb-3 text-gray-800 leading-tight">
                    Tileset Converter.
                </h2>

                <p>Converts "A2" and "A4" tilesets to 16/47 tilesets. <a @click="goTo('#faq')" href="#" class="font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">Learn More</a></p>
            </div>

            <div class="py-6 px-3 lg:px-8 sm:p-6">
                <dropzone
                    :onFile="addImage"
                />
            </div>

            <div class="py-6 px-3 lg:px-8 sm:p-6">
                <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-3">
                            <div class="col-span-6">
                                <previews :files="files" :onDelete="removeImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="px-3 lg:px-8 sm:p-6">
                <h2 id="faq" class="font-semibold text-xl mb-3 text-gray-800 leading-tight">
                    About / FAQ
                </h2>

                <div class="shadow overflow-hidden sm:rounded-md py-3 sm:py-6">
                    <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-1 gap-8">
                            <div class="col-span-1">
                                <h3 class="text-xl leading-6 font-medium">
                                    What is an "A2" tileset and what does it convert to?
                                </h3>

                                <p class="mt-2 text-base text-gray-700 mb-6">A2 tilesets consists of a 5 tiles, with the top-left being the icon. It converts to a 47 tileset like so:</p>

                                <div class="flex justify-center items-center">
                                    <img alt="a2 tileset" src="./assets/a2-example.png">
                                    <svg class="h-12 w-12 mx-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                    </svg>
                                    <img alt="a2 autotile" src="./assets/a2-autotile.png">
                                </div>
                            </div>

                            <div class="col-span-1">
                                <h3 class="text-xl leading-6 font-medium">
                                    What is an "A4" tileset and what does it convert to?
                                </h3>

                                <p class="mt-2 text-base text-gray-700 mb-6">A4 tilesets consists of an "A2" tileset (blue) and a 4 tile wall tileset (green). It converts to a 47 and 16 tileset like so:</p>

                                <div class="flex justify-center items-center mt-8">
                                    <img alt="a4 tileset" src="./assets/a4-example.png">
                                    <svg class="h-12 w-12 mx-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                    </svg>
                                    <img alt="a4 autotile" src="./assets/a4-autotile.png">
                                </div>
                            </div>

                            <div class="col-span-1">
                                <h3 class="text-xl leading-6 font-medium">
                                    Who made this?
                                </h3>
                                <p class="mt-2 text-base text-gray-700 mb-6">
                                    <a href="https://sirmre.com" class="font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">SirMrE</a>, I have made a lot of other crap, but this is the first RPG Maker/GMS/GD/etc tool.
                                </p>
                            </div>

                            <div class="col-span-1">
                                <h3 class="text-xl leading-6 font-medium">
                                    Can I buy you a coffee?
                                </h3>
                                <p class="mt-2 text-base text-gray-700 mb-6">
                                    I appreciate the gesture, but don't worry. Take care of yourself instead, specially during these times.
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

export default {
    name: 'App',
    components: {
        dropzone,
        previews,
    },
    data() {
        return {
            files: [],
        };
    },
    methods: {
        goTo(targetId) {
            const el = document.querySelector(targetId);

            window.scroll({
              top: el.getBoundingClientRect().top,
              behavior: 'smooth'
            });
        },
        async addImage(file) {
            const newFile = {
                preview: null,
                file: file,
            };

            const imagePreview = await this.getImagePreview(file);
            newFile.preview = imagePreview;
            this.files.push(newFile);
        },
        removeImage(index) {
            this.files.splice(index, 1);
        },
        getImagePreview(file) {
            return new Promise((resolve, reject) => {
                try {
                    const reader = new FileReader();

                    reader.onload = function(event) {
                        resolve(event.target.result);
                    }

                    reader.readAsDataURL(file);
                } catch (error) {
                    reject(error);
                }
            });
        },
    }
}
</script>
