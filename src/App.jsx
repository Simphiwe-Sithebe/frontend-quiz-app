import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import QuizList from "./components/QuizList";

function App() {
  const [viewing, setViewing] = useState("home");

  if (viewing === "home") {
    return <HomePage onViewingChange={(subject)=>{
      console.log(subject);
      setViewing(subject);
    }} />;
  }

  return <QuizList viewing={viewing} />;
}

export default App;
