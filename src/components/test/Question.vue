<script setup lang="ts">
import { animate } from "motion";

interface Props {
    question: string;
}

const answer = ref<number | undefined>(undefined);

const questionEl = useTemplateRef("question");
const questionTextEl = useTemplateRef("questionText");

const colorClasses = [
    "bg-red-500",
    "bg-green-500",
];

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

function answerQuestion(i: number) {
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
            <template v-for="i in 2" :key="i">
                <button
                    @click="answerQuestion(i)"
                    class="mx-6 cursor-pointer rounded-full border-2 p-4 transition-all lg:mx-12 lg:p-5"
                    :class="answer === i ? colorClasses[i - 1] : ''"
                ></button>
            </template>
        </div>
    </div>
</template>
