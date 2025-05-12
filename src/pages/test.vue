<script setup lang="ts">
import { storage_key, testDone } from "~/components/test/test";

const questions_text = [
    "我容易感到疲勞，稍微活動一下就氣短。",
    "我經常感到手腳冰涼，尤其在冬天。",
    "我經常口乾舌燥，喜歡喝冷飲。",
    "我容易出汗，稍微活動就大汗淋漓。",
    "我經常感到身體困重，四肢乏力。",
    "我經常覺得口苦、口臭，大便黏膩不暢。",
    "我容易長痤瘡、溼疹，皮膚油膩。",
    "我經常感到胸悶、痰多，咳嗽時有痰。",
    "我容易失眠，入睡困難或多夢。",
    "我經常感到情緒低落、焦慮或煩躁。",
    "我容易感冒，且感冒後恢復較慢。",
    "我經常感到口渴，但喝水後仍不解渴。",
    "我容易出現瘀斑，皮膚上常有不明原因的青紫。",
    "我經常感到頭暈目眩，容易疲勞。",
    "我容易過敏，如對花粉、塵蟎、某些食物過敏。",
    "我的舌苔通常比較厚膩，顏色偏黃或白。",
    "我的大便通常比較乾燥，排便困難。",
    "我的小便顏色偏黃，且量少。",
    "我經常感到口脣發乾，皮膚乾燥。",
    "我容易感到心煩意亂，情緒波動較大。",
];

const questions = useTemplateRef("question");

let should_save = ref(true);

function save() {
    if (should_save.value) {
        const answer_text = JSON.stringify(
            questions.value!.map((question) => question!.answer),
        );
        localStorage.setItem(storage_key, answer_text);
    } else {
        localStorage.removeItem(storage_key);
    }
}

function addHandler() {
    window.addEventListener("beforeunload", save);
}

function removeHandler() {
    window.removeEventListener("beforeunload", save);
}

onMounted(() => {
    const answers_text = localStorage.getItem(storage_key);
    if (answers_text !== null) {
        const answers = JSON.parse(answers_text);
        if (!Array.isArray(answers) || answers.length !== 20) {
            return;
        }
        for (const [i, answer] of answers.entries()) {
            if (answer === true || answer === false) {
                questions.value![i]?.answerQuestion(answer);
            }
        }
    }
    addHandler();
});

onBeforeRouteLeave(() => {
    save();
    removeHandler();
});
</script>
<template>
    <main>
        <h1
            class="mb-2 text-center font-serif text-3xl font-bold text-green-900 text-shadow-black/15 text-shadow-sm lg:mb-6 lg:text-5xl"
        >
            體質測試
        </h1>
        <p
            class="pt-1 pb-6 text-center text-base text-gray-600/90 text-shadow-2xs text-shadow-black/15 lg:text-xl"
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
            @click="
                () => {
                    should_save = false;
                    testDone(questions!);
                }
            "
            class="mx-auto mt-2 block w-fit rounded-md bg-green-700 p-3 font-serif text-xl font-bold text-emerald-100 shadow-md shadow-green-100/10 transition-all ease-in text-shadow-black/15 text-shadow-sm hover:scale-110 hover:bg-green-800 lg:p-5 lg:text-2xl"
        >
            完成測試！
        </button>
    </main>
</template>
