<template>
    <main>
        <div class="mb-8">
            <h1
                class="mb-2 text-center font-serif text-3xl font-bold text-green-900 text-shadow-black/15 text-shadow-sm lg:mb-6 lg:text-5xl"
            >
                你係咪飲啱涼茶？
            </h1>
            <p
                class="pt-1 pb-4 text-center text-base text-gray-600/90 text-shadow-2xs text-shadow-black/15 lg:text-xl"
            >
                中學生團隊利用AI和大數據，
                <br />
                測試你的體質，
                <br />
                量身定做適合你的涼茶配方。
            </p>
            <NuxtLink
                to="/test"
                class="mx-auto block w-fit rounded-md bg-green-700 p-3 font-serif text-2xl font-bold text-emerald-100 shadow-md shadow-green-100/10 transition-all ease-in text-shadow-black/15 text-shadow-sm hover:scale-110 hover:bg-green-800 lg:p-5 lg:text-3xl"
            >
                立刻開始測試
            </NuxtLink>
        </div>
        <section class="w-[75%] py-6 lg:w-[50%]">
            <h2
                class="py-2 font-serif text-2xl font-bold text-green-700 text-shadow-black/10 text-shadow-sm lg:text-3xl"
            >
                尋找適合你的涼茶
            </h2>
            <p class="py-3 text-base lg:text-lg">
                我們明白在眾多涼茶之中，要挑選出適合自己的涼茶猶如大海撈針。我們事先研究不同涼茶的性質、禁忌，再根據你的體質判斷適合你的涼茶。要是你想，到樓下的涼茶鋪喝上一碗推薦，有時間更可在家中用配方調製涼茶。
            </p>
        </section>
        <section class="ml-auto w-[75%] py-6 text-right lg:w-[50%]">
            <h2
                class="py-2 font-serif text-2xl font-bold text-green-700 text-shadow-black/10 text-shadow-sm lg:text-3xl"
            >
                仔細判定體質
            </h2>
            <p class="py-3 text-base lg:text-lg">
                我們根據《中醫體質分類判定標準》設計了一份測驗，回答提出的一系列問題從而幫助用戶了解自身體質，快速準確地推介出當下最適合該用戶的涼茶。
                <NuxtLink
                    to="/physiques"
                    class="my-2 block font-serif text-xl font-bold text-green-800"
                    >想要瞭解更多體質？</NuxtLink
                >
            </p>
        </section>
        <section class="w-[75%] py-6 lg:w-[50%]">
            <h2
                class="py-2 font-serif text-2xl font-bold text-green-700 text-shadow-black/10 text-shadow-sm lg:text-3xl"
            >
                推薦相應涼茶
            </h2>
            <p class="py-3 text-base lg:text-lg">
                根據你的身體症狀、禁忌或想籍涼茶改善的問題，快速準確地推介出當下最適合你的涼茶。此外，在提供各類合適的涼茶時，亦會指出該涼茶的飲用禁忌，避免忽略了部分你的身體資料。
                <NuxtLink
                    to="/liangcha"
                    class="my-2 block font-serif text-xl font-bold text-green-800"
                    >想要瞭解更多涼茶有關的資料？</NuxtLink
                >
            </p>
        </section>

        <NuxtLink
            to="/about"
            class="w-fit mx-auto my-6 block font-serif text-xl font-bold text-green-800 lg:text-2xl underline"
            >瞭解更多這個網站</NuxtLink
        >
    </main>
</template>
