<template>
    <div class="grid grid-cols-3 gap-2 mb-4">
        <div class="col-span-1 flex relative rounded overflow-hidden flex items-center border-2 bg-gray-300 border-solid rounded-md border-gray-300">
            <img
                class="w-full h-auto"
                :src="file.preview"
                alt=""
            >
            <div
                class="absolute cursor-pointer top-0 right-0 p-2 text-red-500"
                @click="onDelete(index)"
            >
                <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
        <div class="col-span-2">
            <img
                v-if="!file.processing"
                class="w-full h-auto"
                :src="file.result.canvas.toDataURL('image/png')"
                alt=""
            >
            <h3 v-else class="text-xl leading-6 font-medium text-center">
                Generating..
            </h3>
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