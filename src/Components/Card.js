// import {useEffect} from 'react';
import divider from "../Images/pattern-divider-desktop.svg";
import dice from "../Images/icon-dice.svg";
// useEffect(() => {
//     const handleClick = event => {
//       console.log('Button clicked');
//     };

const Card = () => {
    let resDiv = document.getElementsByClassName(".res")
    // let resBtn = document.getElementsByClassName("dice")
    
    // resBtn.addEventListener("click");
    window.onload = () =>{
        display();
    }
 
    // useEffect(() => {
    //     const display = () => {};
    
    //     resBtn.addEventListener("click", display);
       
    //   }, [resBtn]);
    function display() {
        fetch("https://api.adviceslip.com/advice").then(response =>{
            return response.json();
        }).then(adviceData =>{
            const adviceObj= adviceData.slip;
            console.log(adviceObj);
            // resDiv.appendChild = `${adviceObj.slip}`
        }).catch(error =>{
            console.log(error);
        });

    
    }
    return ( 
        <main>
            <section>
                <div className="container">
                    <header>
                    <h5 className="header">Advice #117</h5>
                    </header>
                    {/* {adviceObj.map((advice) => (
                <div className="res" key={advice.id}>
                    <h2>{advice.slip}</h2>

                </div>
            ))} */}


                    <p className="res">{display()}</p>
          <div className="con">
           <img src={divider} alt="" />
          </div>
          <div className="wrapper">
            <img className="dice" src={dice} alt="" onClick={() => {display()}} />
                    
                    </div>
                </div>
               
            </section>
        </main>
     );
}
 
export default Card;