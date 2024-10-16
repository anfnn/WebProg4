import RegistrationData from "../mockData/RegistrationData.js";

const Registration = () => {
    const {  text1,
        text2,
        text3,
        button} = RegistrationData;
  
    return (
        <>
            <div class = "description_registration">
            <p class = "short_words">
            {text1}
            </p>
            <p class = "big_words">
            {text2}  <br/>  {text3} 
            </p>
          </div>
          <button class = "start">{button}</button>
        </>
    );
  };
  
  export default Registration;