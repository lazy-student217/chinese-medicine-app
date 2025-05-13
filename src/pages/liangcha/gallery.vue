<script setup lang="ts">
import liangcha_data from "~/components/liangcha/liangcha.json";
</script>
<template>
    <main>
        <h1
            class="mb-2 text-center font-serif text-3xl font-bold text-green-900 text-shadow-black/15 text-shadow-sm lg:mb-6 lg:text-5xl"
        >
            涼茶目錄
        </h1>
        <p
            class="pt-1 pb-6 text-center text-base text-gray-600/90 text-shadow-2xs text-shadow-black/15 lg:text-xl"
        >
            涼茶的配方和製作工藝多源於中醫養生理論，
            <br />
            故涼茶被視為一種具有保健功效的飲品。
            <br />
            這裡展示本網站收錄的涼茶。
        </p>

        <div class="my-8 grid grid-cols-3 grid-rows-3 lg:mx-auto lg:w-[40%]">
            <NuxtLink
                v-for="liangcha in liangcha_data.liangcha"
                class="m-2 flex items-center justify-center rounded-md border-2 border-black bg-white p-6 transition-all ease-in hover:bg-emerald-100"
                :to="{
                    path: '/liangcha/show',
                    query: { list: `${liangcha.id}` },
                }"
            >
                <p class="text-center font-serif text-xl font-bold text-green-900">
                    {{ liangcha.name }}
                </p>
            </NuxtLink>
        </div>
    </main>
</template>
