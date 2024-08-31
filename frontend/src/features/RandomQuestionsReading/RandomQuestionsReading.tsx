import { useState, useEffect } from "react";

const useRandomQuestion = (questions: string[]) => {
    const [outputText, setOutputText] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (questions.length === 0) {
            setOutputText(""); 
            setIsModalOpen(false); 
        }
    }, [questions]);

    const askRandomQuestion = () => {
        if (questions.length === 0) return; 
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];
        setOutputText(randomQuestion);
        setIsModalOpen(true);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return { outputText, askRandomQuestion, isModalOpen, toggleModal };
};

export default useRandomQuestion;


