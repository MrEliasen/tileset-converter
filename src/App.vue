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

                <p>Converts "A2" and "A4" tilesets to 16/47 tilesets. <a @click="goTo('#read-more')" href="#" class="font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">Learn More</a></p>
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
                                <div class="grid grid-cols-6 gap-3">
                                    <div
                                        v-for="(image, index) in files"
                                        :key="index"
                                        class="flex relative rounded overflow-hidden flex items-center border-2 bg-gray-300 border-solid rounded-md border-gray-300"
                                    >
                                        <img
                                            class="w-full h-auto"
                                            :src="image.preview"
                                            alt=""
                                        >
                                        <div
                                            class="absolute cursor-pointer top-0 right-0 p-2 text-red-500"
                                            @click="removeImage(index)"
                                        >
                                            <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div class="py-6 px-3 lg:px-8 sm:p-6">
                <h2 id="read-more" class="font-semibold text-xl mb-3 text-gray-800 leading-tight">
                    About
                </h2>

                <p>Will attempt to convert tilesets to their 16 and/or 47 tilesets like below:</p>
            </div>

            <div class="py-6 px-3 lg:px-8 sm:p-6">
                <div class="flex justify-center items-center">
                    <img alt="a2 tileset" src="./assets/a2-example.png">
                    <svg class="h-12 w-12 mx-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    <img alt="a2 autotile" src="./assets/a2-autotile.png">
                </div>
                <div class="flex justify-center items-center mt-8">
                    <img alt="a4 tileset" src="./assets/a4-example.png">
                    <svg class="h-12 w-12 mx-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    <img alt="a4 autotile" src="./assets/a4-autotile.png">
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import dropzone from './components/dropzone.vue'

export default {
    name: 'App',
    components: {
        dropzone
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
