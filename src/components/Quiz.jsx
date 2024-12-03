import { useParams } from "react-router";
import data from "../assets/data.json";

function Quiz(){

    const params = useParams();
    const match = data.quizzes.find((quiz) => quiz.title.toLowerCase() === params.id.toLowerCase())
    if(!match) return <p>quiz not found</p>
    return(
        <div>
            <h1>{params.id}</h1>
        </div>
    )
}
export default Quiz;