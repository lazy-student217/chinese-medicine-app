<script setup lang="ts">
const questions_text = [
    "喜歡喝珍珠奶茶嗎？",
    "喜歡XXX嗎？",
    "喜歡YYY嗎？",
    "123",
    "154545",
    "15454545",
    "12121212",
];

const questions = useTemplateRef("question");

function testDone() {
    let done = true;
    for (const question of questions.value!) {
        if (question!.answer === undefined) {
            question!.moveToQuestion();
            done = false;
            break;
        }
    }
}
</script>
<template>
    <main class="px-6">
        <h1
            class="mb-2 text-center font-serif text-3xl font-bold text-green-900 text-shadow-black/15 text-shadow-sm lg:mb-6 lg:text-5xl"
        >
            體質測試
        </h1>
        <p
            class="text-md pt-1 pb-6 text-center text-gray-600/90 text-shadow-2xs text-shadow-black/15 lg:text-xl"
        >
            用數分鐘完成測試，了解你的體質。
        </p>
        <TestQuestion
            v-for="i in questions_text.length"
            :question="questions_text[i - 1]"
            :key="i"
            ref="question"
        />
        <button
            @click="testDone"
            class="mx-auto mt-2 block w-fit rounded-md bg-green-700 p-3 font-serif text-xl font-bold text-emerald-100 shadow-md shadow-green-100/10 transition-all ease-in text-shadow-black/15 text-shadow-sm hover:scale-110 hover:bg-green-800 lg:p-5 lg:text-2xl"
        >
            完成測試！
        </button>
    </main>
</template>
