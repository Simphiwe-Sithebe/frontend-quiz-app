// import React, { useState } from 'react';
//  import "../css/quiz.css";

// const Quiz = ({ quiz }) => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showResults, setShowResults] = useState(false);

//   const currentQuestion = quiz.questions[currentQuestionIndex];

//   const handleAnswer = (answer) => {
//     if (answer === currentQuestion.answer) {
//       setScore(score + 1);
//     }

//     if (currentQuestionIndex + 1 < quiz.questions.length) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       setShowResults(true);
//     }
//   };

//   return (
//     <div>
//       <h2>{quiz.title}</h2>
//       <img src={quiz.icon} alt={`${quiz.title} icon`} />
//       {!showResults ? (
//         <div>
//           <h3>{currentQuestion.question}</h3>
//           <div>
//             {currentQuestion.options.map((option, index) => (
//               <button key={index} onClick={() => handleAnswer(option)}>
//                 {option}
//               </button>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div>
//           <h3>Your score: {score}/{quiz.questions.length}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Quiz;
import React, { useState } from 'react';
import "../css/quiz.css";

// const Quiz = ({ quiz }) => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showResults, setShowResults] = useState(false);

//   const currentQuestion = quiz.questions[currentQuestionIndex];

//   const handleAnswer = (answer) => {
//     if (answer === currentQuestion.answer) {
//       setScore(score + 1);
//     }

//     if (currentQuestionIndex + 1 < quiz.questions.length) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       setShowResults(true);
//     }
//   };

//   return (
//     <div className="quiz-container">
//       <h2>{quiz.title}</h2>
//       <img src={quiz.icon} alt={`${quiz.title} icon`} />
//       {!showResults ? (
//         <div>
//           <h3>{currentQuestion.question}</h3>
//           <div className="options">
//             {currentQuestion.options.map((option, index) => (
//               <button key={index} onClick={() => handleAnswer(option)}>
//                 {option}
//               </button>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className="results">
//           <h3>
//             Your score: <span>{score}/{quiz.questions.length}</span>
//           </h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Quiz;

type Props = {
  quiz: {
    title: string;
    icon: string;
    questions: {
      question: string;
      options: string[];
      answer: string;
    }[];
  };
};
const Quiz = (props: Props) => {
  const {quiz} = props;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    if (answer === currentQuestion.answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < quiz.questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="quiz-container">
      <div className="question">
        <h2>{quiz.title}</h2>
        <img src={quiz.icon} alt={`${quiz.title} icon`} />
        {!showResults ? (
          <div>
            <h3>{currentQuestion.question}</h3>
          </div>
        ) : (
          <div className="results">
            <h3>
              Your score: <span>{score}/{quiz.questions.length}</span>
            </h3>
          </div>
        )}
      </div>

      <div className="options">
        {!showResults && currentQuestion.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
