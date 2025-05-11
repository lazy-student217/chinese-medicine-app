<script setup lang="ts">
import physiques_data from "~/components/physiques/physiques.json";
</script>
<template>
    <main>
        <h1
            class="mb-2 text-center font-serif text-3xl font-bold text-green-900 text-shadow-black/15 text-shadow-sm lg:mb-6 lg:text-5xl"
        >
            體質目錄
        </h1>
        <p
            class="pt-1 pb-6 text-center text-base text-gray-600/90 text-shadow-2xs text-shadow-black/15 lg:text-xl"
        >
            根據《中醫體質分類判定標準》，
            <br />
            由中華中醫藥學會於二〇〇九年發佈，
            <br />
            體質共分為九個類型。你是哪個類型？
        </p>

        <section
            class="text-base/7 lg:mx-auto lg:w-[40%] lg:text-center lg:text-lg/8"
        >
            「體質」是不同的人在形態結構、生理機能與心理活動等方面表現出來的特質。形態結構如身體的高矮胖瘦；生理機能如怕冷怕熱；心理活動如愉快、鬱悶。其實，「體質」與性格相似，有先天遺傳因素及後天環境因素，遺傳因素強的，後天條件怎麼調整也改變有限。體質好的人具有平和質而很少有病症，如有病症也很快恢復的人。相反，體質差的人會反反覆覆出現身體或心理的問題。所以，體質是會變動的。不同的「體質」有不同的特徵及患病傾向，通過體質辨識，了解自己所屬體質，施以相應的調養方案，有助調整偏頗失衡的狀態，促進健康。
        </section>

        <div class="my-8 grid grid-cols-3 grid-rows-3 lg:mx-auto lg:w-[40%]">
            <NuxtLink
                v-for="physique in physiques_data.physiques"
                class="m-2 block rounded-md border-2 border-black p-6 transition-all bg-white hover:bg-emerald-100 ease-in"
                :to="{
                    path: '/physiques/show',
                    query: { list: `${physique.id}` },
                }"
            >
                <p
                    class="text-center font-serif text-xl font-bold text-green-900"
                >
                    {{ physique.name }}
                </p>
            </NuxtLink>
        </div>
    </main>
</template>
