<script setup lang="ts">
import { animate, inView } from "motion";

const header = useTemplateRef("header");

onMounted(() => {
    inView(header.value!, (el) => {
        animate(el, { x: [200, 0], opacity: [0, 1] }, { duration: 1 });
    });
});
</script>
<template>
    <header class="w-full py-2 overflow-x-hidden">
        <div ref="header" class="opacity-0">
            <NuxtLink to="/" class="hover-parent mx-2 block cursor-pointer">
                <NuxtImg
                    src="images/favicon.svg"
                    alt="Icon"
                    class="inline h-12 w-12"
                    preload
                    placeholder
                    loading="eager"
                />
                <span
                    class="hover-child font-serif text-xl font-bold transition-all ease-in-out text-shadow-green-900/20 lg:text-2xl"
                >
                    涼茶體質匹配助手
                </span>
            </NuxtLink>
        </div>
        <SlidingRule />
    </header>
</template>
