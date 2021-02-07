<template>
    <div
        ref="droparea"
        :class="[
            'flex h-full justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md',
             {
                'border-red-300': dragActive,
                'border-gray-300': !dragActive,
             }
        ]"

        @dragover.prevent.stop="onDragOver"
        @dragenter.prevent.stop="onDragOver"

        @dragleave.prevent.stop="onDragLeave"
        @dragend.prevent.stop="onDragLeave"

        @drop.prevent.stop="onDrop"
    >
        <div class="space-y-1 text-center">
            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="flex text-sm text-gray-600">
                <label for="file-upload" class="relative cursor-pointer font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                    <span>Select </span>
                    <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                        @change="onFileSelect"
                    >
                </label>
                <p class="pl-1">/ drop tileset(s) you want to convert</p>
            </div>
            <p class="text-xs text-gray-500">
                Supports PNG & JPG
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            onFile: Function,
        },
        data: function() {
            return {
                dragActive: false,
            };
        },
        methods: {
            onDragOver: function() {
                this.dragActive = true;
            },
            onDragLeave: function() {
                this.dragActive = false;
            },
            onDrop: function(event) {
                this.onDragLeave();

                for (var i = event.dataTransfer.files.length - 1; i >= 0; i--) {
                    this.onFile(event.dataTransfer.files[i]);
                }
            },
            onFileSelect: function(event) {
                this.onDragLeave();

                for (var i = event.target.files.length - 1; i >= 0; i--) {
                    this.onFile(event.target.files[i]);
                }
            },
        },
    }
</script>