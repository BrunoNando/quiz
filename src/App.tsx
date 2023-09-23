import { useState } from "react";
import { questions } from "./data/questions";
import { QuestionItem } from "./components/QuestionItem";
import { Results } from "./components/Results";

const App = () => {
   
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowresult] = useState(false);

  const title = "Quiz de Culinária";  


  const loadNextQuestion = () => {
    if(questions[currentQuestion + 1]){
      setCurrentQuestion(currentQuestion + 1);
    }else(
      setShowresult(true)
    )
  }

  const handleAnswered = (answer:number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  }

  const handleRestartButton = () => {
    setAnswers([])
    setCurrentQuestion(0);    
    setShowresult(false)
  }

    return (
       <div className="bg-gradient-to-l from-sky-600 to-blue-600 w-screen h-screen text-black flex justify-center items-center">
          <section className="w-full max-w-xl rounded-md p-6 bg-slate-200 shadow shadow-black">
            <div className="p-5 font-bold text-2xl rounded-md border-b border-gray-300">{title}</div>
              <div className="">

                {!showResult &&
                  <QuestionItem 
                    question={questions[currentQuestion]}
                    count={currentQuestion + 1}
                    onAnswer={handleAnswered}
                  />
                }

                {showResult &&
                  <Results questions={questions} answers={answers}/>
                }

              </div>
              <div className="p-5 text-center border-t border-gray-300">
                {!showResult &&
                  `${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`
                }
                {showResult &&
                  <button onClick={handleRestartButton} className="px-3 py-2 rounded-md border-blue-700 bg-blue-700 text-white">Reiniciar Quiz</button>
                }
                
              </div>
          </section>
       </div>    
  )   
}
 

export default App;




























// const App = () => {
//     return (
//        <div className={styled.base}>
//             <div className={styled.top}>Top</div>
//             <div className={styled.flex}>
//                 <Left />
//                 <Base />
//                 <Right />
//             </div>
//             <div className={styled.bottom}>Bottom</div>
//        </div>
//     )   
// }



