<script setup lang="ts">
import { animate } from "motion";
import "./assets/global.tailwind.css";

useSeoMeta({
    title: "涼茶體質匹配助手",
    ogTitle: "涼茶體質匹配助手",
    description: "量身定做適合你的涼茶配方。",
    ogDescription: "量身定做適合你的涼茶配方。",
});
function enter(el: Element, done: () => void) {
    animate(el, { opacity: [0, 1] }, { duration: 0.3 }).then(done);
}

function leave(el: Element, done: () => void) {
    animate(el, { opacity: [1, 0] }, { duration: 0.3 }).then(done);
}

useHead({
    title: "涼茶體質匹配助手",
    htmlAttrs: {
        lang: "zh-HK",
    },
    link: [
        {
            rel: "icon",
            type: "image/x-icon",
            href: `/images/favicon.svg`,
        },
    ],
});
</script>
<template>
    <NuxtLayout
        ><NuxtPage
            :transition="{
                name: 'fade',
                mode: 'out-in',
                onEnter: enter,
                onLeave: leave,
            }"
    /></NuxtLayout>
</template>
