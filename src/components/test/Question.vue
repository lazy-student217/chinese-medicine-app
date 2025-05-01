<script setup lang="ts">
import { animate } from "motion";

interface Props {
    question: string;
}

const answer = ref<number | undefined>(undefined);

const questionEl = useTemplateRef("question");
const questionTextEl = useTemplateRef("questionText");

const colorClasses = [
    "bg-green-400",
    "bg-green-500",
    "bg-green-600",
    "bg-green-700",
    "bg-green-800",
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

defineExpose({
    answer,
    moveToQuestion,
});
</script>

<template>
    <div class="flex flex-col items-center py-6" ref="question">
        <span class="block text-center text-lg lg:text-xl" ref="questionText">{{
            question
        }}</span>
        <div class="flex flex-row py-2">
            <template v-for="i in 5" :key="i">
                <button
                    @click="answer = i"
                    class="mx-3 cursor-pointer rounded-full border-2 p-3 transition-all lg:mx-4 lg:p-4"
                    :class="answer === i ? colorClasses[i - 1] : ''"
                ></button>
            </template>
        </div>
    </div>
</template>
