<template>
    <div class="shadow overflow-hidden sm:rounded-md mb-4">
        <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-4 gap-4 mb-4">
                <div class="col-span-1 flex relative rounded overflow-hidden flex items-start">
                    <img
                        class="w-full"
                        :src="file.preview"
                        alt=""
                    >
                    <div
                        class="absolute cursor-pointer top-0 right-0 p-2 text-red-500"
                        @click="onDelete(index)"
                    >
                        <svg class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="mt-1 flex rounded-md shadow-sm">
                        <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            # of Tilesets horizontally
                        </span>
                        <input type="number" min="1" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="1">
                    </div>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            # of Tilesets vertically
                        </span>
                        <input type="number" min="1" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="1">
                    </div>

                    <img
                        v-if="!file.processing"
                        class="w-full mt-4"
                        :src="file.result.canvas.toDataURL('image/png')"
                        alt=""
                    >
                    <h3 v-else class="text-xl leading-6 font-medium text-center">
                        Generating..
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            file: Object,
            onDelete: Function
        }
    }
</script>