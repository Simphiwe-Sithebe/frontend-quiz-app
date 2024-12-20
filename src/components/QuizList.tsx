
import React, { useState, useEffect } from "react";
import { useMount } from "react-use";
import Quiz from "./Quiz";
import "../css/styles.css";

type Quiz = {
   
    title: string;
    icon: string;
    questions: {
      question: string;
      options: string[];
      answer: string;
    }[];
  };


const QuizList = (props) => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);

  useMount(async () => {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setQuizzes(data.quizzes);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  });

  if (loading) return <div>Loading...</div>;

  const quiz = quizzes.find((quiz) => quiz.title === props.viewing);
  
  return (
    <div>
      <h1>Choose a Quiz</h1>
      <div>
        <Quiz quiz={quiz as any} />
       </div>
    </div>
  );
};
export default QuizList;
