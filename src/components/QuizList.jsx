// src/components/QuizList.js
import React, { useState, useEffect } from "react";
import { useMount } from "react-use";
// import data from '../assets/data.json';
import Quiz from "./Quiz";
import "../App.css";

const QuizList = (props) => {
  const [quizzes, setQuizzes] = useState([]);
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
        <Quiz quiz={quiz} />
       </div>
    </div>
  );
};
export default QuizList;
