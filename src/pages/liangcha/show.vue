<script setup lang="ts">
import liangcha_data from "~/components/liangcha/liangcha.json";

const route = useRoute();

const list_text: string = route.query["list"] as string;

let list: number[];
try {
    if (
        typeof list_text !== "string" &&
        !((list_text as any) instanceof String)
    ) {
        throw Error();
    }
    const unverified_list = list_text.split(",");
    if (unverified_list === undefined) {
        throw Error();
    }
    for (const id of unverified_list.map((s) => Number.parseInt(s))) {
        if (
            !(Number.isInteger(id) && !Number.isNaN(id) && 1 <= id && id <= 9)
        ) {
            throw Error();
        }
    }
    list = unverified_list.map((s) => Number.parseInt(s));
} catch {
    navigateTo("/physiques");
}
</script>
<template>
    <main>
        <section class="p-5" v-for="id in list">
            <h1 class="font-serif text-3xl font-bold text-green-800 my-4">
                {{ liangcha_data.liangcha[id - 1].name }}
            </h1>
            <h2 class="font-serif text-2xl font-bold my-2">配方</h2>
            <span class="text-lg my-4"> {{ liangcha_data.liangcha[id - 1].recipe }}</span>
            <h2 class="font-serif text-2xl font-bold my-2">飲用原因</h2>
            <span class="text-lg my-4"> {{ liangcha_data.liangcha[id - 1].reason }}</span>
            <h2 class="font-serif text-2xl font-bold my-2">禁忌</h2>
            <span class="text-lg my-4"> {{ liangcha_data.liangcha[id - 1].taboo }}</span>
        </section>
    </main>
</template>
