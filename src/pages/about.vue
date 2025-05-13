<script setup lang="ts">
import { referneces } from "~/components/referneces";
</script>

<template>
    <main>
        <h1
            class="mb-4 text-center font-serif text-3xl font-bold text-green-900 text-shadow-black/15 text-shadow-sm lg:mb-6 lg:text-5xl"
        >
            關於網站
        </h1>
        <article class="text-base lg:mx-auto lg:w-[60%] lg:text-lg">
            <p>
                本網站「涼茶體質匹配助手」為2024/25
                「心繫家國」中醫學寶庫探究參賽作品其中之一。
            </p>
            <br />
            <p>
                此網站只是初步分析用户體質，並非專業人士意見。如用戶對自身體質有任何疑問，請務必向註冊中醫師尋求專業意見。
            </p>
            <h2 class="my-4 font-serif text-3xl font-bold text-green-800">
                背景
            </h2>
            <p>
                涼茶的配方和製作工藝多源於中醫養生理論，故涼茶被視為一種具有保健功效的飲品。中國的南方地區濕熱，居民容易出現上火、濕熱等症狀。涼茶作為具有清熱解毒、祛濕除燥等功效的傳統飲品，是中國人民日常生活中不可或缺的一部分。涼茶的歷史可追溯至十九世紀。當時嶺南地區的人們常因氣候和水土特性而「上火」，於是利用藥性寒涼的中草藥煎熬成涼茶飲用。涼茶文化不僅在嶺南地區盛行，還傳播到全國其他地區，是一種具有廣泛影響力的傳統文化。
            </p>
            <br />
            <p>
                隨著人們生活水平的提高和健康意識的增強，人們對個性化健康服務的需求日益增長，人們對個性化健康服務的需求日益增長，不過有不少年輕人對涼茶的功效和選擇存在疑惑。
            </p>

            <h2 class="my-4 font-serif text-3xl font-bold text-green-800">
                研究目的
            </h2>
            <p>
                「是藥三分毒」，並不是所有涼茶都適合每個人。我們希望探討人們飲用涼茶的習慣和人們對涼茶的認知，從而研發此匹配助手，幫助人們根據自身身體狀態選擇合適的涼茶。這不僅能為涼茶文化的傳承和推廣提供新的途徑，還能改善人們飲用涼茶的效果和體驗。
            </p>
            <br />
            <p>
                我們希望藉此匹配助手增加人們對涼茶的正確知識。在我們進行的問卷中，有受訪者回答飲用涼茶的主要原因是調節經期。這反映人們對涼茶的了解不足。涼茶性寒，大量飲用涼茶會損傷體內陽氣，令體內寒邪積聚，或會損傷脾胃，使氣血生化不足，加劇月經延後的情況，更有機會導致月經量少、痛經、甚至閉經等問題。我們希望此匹配助手有助提醒人們部分涼茶的飲用禁忌，避免人們飲用不適合自身的涼茶，對身體構成損害。
            </p>
            <br />
            <p>
                我們亦希望藉此匹配助手幫助人們快速地選擇適合自己的涼茶，因為現代社會生活節奏急速，人們未必有時間充分了解各種涼茶的功效。
            </p>
            <h2 class="my-4 font-serif text-3xl font-bold text-green-800">
                有關這個網站
            </h2>
            <p>
                我們計劃研發的網站可以根據用戶回答程式提出的一系列問題從而幫助用戶了解自身體質，之後程式會根據用戶輸入自身的身體症狀、禁忌或想籍涼茶改善的問題，快速準確地推介出當下最適合該用戶的涼茶。此外，在提供各類合適的涼茶時，程式同時亦會指出該涼茶的飲用禁忌，以避免因程式所問的問題不夠全面而忽略了部分有關用戶身體資料，令應用程式推介出不適合用戶的涼茶。導致用戶飲用了相剋或不適合的涼茶，令自身病情加重或對用戶造成不良反應的影響等。
            </p>
            <h2 class="my-4 font-serif text-3xl font-bold text-green-800">
                參考資料
            </h2>
            <ul class="my-2">
                <li
                    v-for="reference in referneces"
                    class="list-inside list-disc"
                >
                    <span v-if="reference.type === 'book'">
                        {{ reference.name }}
                    </span>
                    <NuxtLink
                        :to="reference.link"
                        external
                        class="underline"
                        target="_blank"
                        v-if="reference.type === 'link'"
                    >
                        {{ reference.name }}
                    </NuxtLink>
                </li>
            </ul>
            <p class="my-4">
                本網站由LazyStudent217開發，所有程式碼（連圖標）以MIT特許條款授權。本網站由NuxtJS(VueJS),
                Motion, Tailwind CSS等技術建構而成。使用字體有Noto Serif TC, Noto
                Sans TC及Roboto。開放源代碼於<NuxtLink
                    to="https://github.com/lazy-student217/chinese-medicine-app"
                    external
                    target="_blank"
                    class="underline"
                    >Github平臺</NuxtLink
                >。任何使用上的問題請於Issue處反映。
            </p>
        </article>
    </main>
</template>
