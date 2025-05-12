<script setup lang="ts">
import { animate } from "motion";

const footerTexts = [
    "所有程式碼（連圖標）以MIT特許條款授權",
    "源代碼請見Github",
    "為2024/25「心繫家國」中醫學寶庫探究比賽設計",
    "Website By LazyStudent217",
];
let currentIndex = ref(0);
let interval: NodeJS.Timeout;

function enter(el: Element, done: () => void) {
    el.classList.add("opacity-0");
    animate(el, { opacity: [0, 1], x: [-15, 0] }, { duration: 0.3 }).then(done);
}

function leave(el: Element, done: () => void) {
    animate(el, { opacity: [1, 0], x: [0, 15] }, { duration: 0.3 }).then(done);
}

onMounted(() => {
    interval = setInterval(async () => {
        currentIndex.value = (currentIndex.value + 1) % footerTexts.length;
    }, 5000);
});

onUnmounted(() => {
    clearInterval(interval);
});
</script>
<template>
    <footer
        class="flex-shrink overflow-x-hidden rounded-t-lg bg-linear-65 from-green-800 to-lime-900 box-decoration-slice py-2 text-center text-sm text-gray-200 mt-auto"
    >
        <div class="font-bold">涼茶體質匹配助手</div>
        <Transition :css="false" @enter="enter" @leave="leave" type="transition" mode="out-in">
            <p class="mx-auto inline-block h-fit w-fit" :key="currentIndex">
                {{ footerTexts[currentIndex] }}
            </p>
        </Transition>
    </footer>
</template>
