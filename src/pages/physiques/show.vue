<script setup lang="ts">
import physiques_data from "~/components/physiques/physiques.json";

const route = useRoute();

const list_text: string = route.query["list"] as string;
const is_test_result = route.query["testresult"] === "yes";

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
    navigateTo({ path: "/physiques", replace: true });
}

function get_liangcha_query(id: number) {
    return physiques_data.physiques[id - 1].liangcha.join(",");
}

function get_physique_name() {
    let physique_set = new Set(list);
    return physiques_data.physiques
        .filter((physique) => physique_set.has(physique.id))
        .map((physique) => `${physique.name}（${physique.ty_name}）`)
        .join("，");
}
</script>
<template>
    <main>
        <div class="text-center text-xl lg:text-2xl" v-if="is_test_result">
            你的體質是<span class="font-bold text-green-900">
                {{ get_physique_name() }}</span
            >。
        </div>
        <section
            class="py-4 text-center text-base text-gray-600/90 text-shadow-2xs text-shadow-black/15 lg:text-xl"
        >
            以上只是初步分析用户體質，並非專業人士意見。<br />
            如對自身體質有任何疑問，<br />
            請務必向註冊中醫師尋求專業意見。<br />
            詳情請看<NuxtLink
                href="/about"
                class="underline transition-all text-gray-700/90 hover:text-green-700"
                >此頁面</NuxtLink
            >。
        </section>
        <section class="p-5" v-for="id in list">
            <h1 class="my-4 font-serif text-3xl font-bold text-green-800">
                {{ physiques_data.physiques[id - 1].name }}（{{
                    physiques_data.physiques[id - 1].ty_name
                }}）
            </h1>
            <h2 class="my-2 font-serif text-2xl font-bold">形體特徵</h2>
            <span class="my-4 text-lg">
                {{ physiques_data.physiques[id - 1].appearance }}</span
            >
            <h2 class="my-2 font-serif text-2xl font-bold">常見表現</h2>
            <ul class="my-4 list-inside list-disc text-lg">
                <li
                    v-for="expression in physiques_data.physiques[id - 1]
                        .expression"
                >
                    {{ expression }}
                </li>
            </ul>
            <h2 class="my-2 font-serif text-2xl font-bold">常見症狀</h2>
            <span class="my-4 text-lg">
                {{ physiques_data.physiques[id - 1].common_symptom }}</span
            >
            <h2 class="my-2 font-serif text-2xl font-bold">推薦涼茶</h2>
            <NuxtLink
                :to="{
                    path: '/liangcha/show',
                    query: { list: get_liangcha_query(id) },
                }"
                class="my-2 block font-serif text-xl font-bold text-green-800"
                >查看推薦涼茶</NuxtLink
            >
        </section>
    </main>
</template>
