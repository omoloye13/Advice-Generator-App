import { useEffect, useState } from "react";
import Dice from "./Dice";
import Divider from "./Divider";

const AdviceCard = () => {
const [advice, setAdvice] = useState([]);
    const fetchData = () => {
        fetch("https://api.adviceslip.com/advice")
          .then(response => {
            return response.json()
          })
          .then(data => {
            // console.log(data);
            setAdvice({ id: data["slip"].id, advice: data["slip"].advice });
          }).catch(error =>{
            // console.log(error);
        });
      }
    
      useEffect(() => {
        fetchData()
      }, [])
  
    return ( 
        <section>
            <main>
                <div className="container">
                
                    <h2 className="card_number">Advice # {advice.id}</h2>
                    <p className="card_text">{advice.advice}</p>
                    <Divider />
                    <button className="card_button" onClick={() => {fetchData()}}>
                        <Dice />
                    </button>

                </div>
            </main>
        </section>
     );
}
 
export default AdviceCard;