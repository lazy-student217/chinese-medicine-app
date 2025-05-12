<script setup lang="ts">
import { animate } from "motion";

interface Props {
    question: string;
}

const answer = ref<boolean | undefined>(undefined);

const questionEl = useTemplateRef("question");
const questionTextEl = useTemplateRef("questionText");

const { question } = defineProps<Props>();

function moveToQuestion() {
    questionEl.value!.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
        animate(
            questionTextEl.value!,
            { scale: [1, 1.2, 1.2, 1] },
            { duration: 0.5, ease: "easeInOut" },
        );
    }, 400);
}

function answerQuestion(i: boolean) {
    if (answer.value !== i) {
        answer.value = i;
    } else {
        answer.value = undefined;
    }
}

defineExpose({
    answer,
    moveToQuestion,
    answerQuestion,
});
</script>

<template>
    <div class="flex flex-col items-center py-6" ref="question">
        <span class="block text-center text-lg lg:text-xl" ref="questionText">{{
            question
        }}</span>
        <div class="flex flex-row py-2">
            <button
                @click="answerQuestion(true)"
                class="mx-6 cursor-pointer rounded-full border-2 text-center transition-all lg:mx-12 h-14 w-14"
                :class="answer === true ? 'bg-green-500' : ''"
            >
                是
            </button>
            <button
                @click="answerQuestion(false)"
                class="mx-6 cursor-pointer rounded-full border-2 h-14 w-14 text-center transition-all lg:mx-12"
                :class="answer === false ? 'bg-red-500' : ''"
            >
                否
            </button>
        </div>
    </div>
</template>
