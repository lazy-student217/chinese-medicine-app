interface Question {
    answer?: number;
    moveToQuestion: () => void;
}

export const storage_key = "physique-test-answers";

export function testDone(questions: (Question | null)[]) {
    const yes = 2;
    const left_question = questions.find(
        (question) => question!.answer === undefined,
    );
    if (left_question !== undefined) {
        left_question!.moveToQuestion();
        return;
    }
    const get_answer = (indices: number[]) =>
        indices.every((i) => questions[i - 1]!.answer! === yes);
    const physiques: number[] = [];
    if (get_answer([1, 4, 11])) {
        physiques.push(2);
    }
    if (get_answer([2])) {
        physiques.push(3);
    }
    if (get_answer([3, 12, 17, 19])) {
        physiques.push(4);
    }
    if (get_answer([5, 8, 16])) {
        physiques.push(5);
    }
    if (get_answer([6, 7, 16, 18])) {
        physiques.push(6);
    }
    if (get_answer([13, 14])) {
        physiques.push(7);
    }
    if (get_answer([9, 10, 20])) {
        physiques.push(8);
    }
    if (get_answer([15])) {
        physiques.push(9);
    }
    if (physiques.length == 0) {
        physiques.push(1);
    }
    window.scrollTo(0, 0);
    navigateTo({
        path: "/physiques/show",
        query: {
            list: physiques.join(","),
            testresult: "yes",
        },
    });
}
