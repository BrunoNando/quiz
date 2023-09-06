import { useState } from "react";
import { questions } from "./data/questions";

const App = () => {
  const title = "Quiz de Culinária";
  const [currentQuestion, setCurrentQuestion] = useState(0)

    return (
       <div className="bg-gradient-to-l from-sky-600 to-blue-600 w-screen h-screen text-black flex justify-center items-center">
          <section className="w-1/3 h-80 rounded-md p-6 bg-slate-200 shadow shadow-black">
            <div className="p-5 font-bold text-2xl rounded-md border-b border-gray-300">{title}</div>
              <div className="p-5">
                ...
              </div>
              <div className="p-5 text-center border-t border-gray-300">
                {currentQuestion + 1} de {questions.length} pergunta{questions.length === 1 ? '' : 's'}
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



