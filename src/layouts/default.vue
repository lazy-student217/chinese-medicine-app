<script setup lang="ts">
import { animate } from 'motion';

function enter(el: Element, done: () => void) {
    animate(el, { opacity: [0, 1] }, { duration: 0.3 }).then(done);
}

function leave(el: Element, done: () => void) {
    animate(el, { opacity: [1, 0] }, { duration: 0.3 }).then(done);
}
</script>
<template>
    <div class="flex min-h-screen flex-col">
        <AppHeader />
        <Transition
            appear
            class="mb-8"
            :css="false"
            mode="out-in"
            @enter="enter"
            @leave="leave"
        >
            <slot />
        </Transition>
        <AppFooter />
    </div>
</template>
