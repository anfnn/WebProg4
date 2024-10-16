import ExpectationsData from "../mockData/ExpectationsData.js";

export const Illustration = ({ img: { src,alt } }) => (
    <img class="future_image" src={src} alt={alt} />  );

const Expectations = () => {
    const {  img, cta, header, text, button} = ExpectationsData;
  
    return (
        <>
            <Illustration img={img} />
            <div class = "right_container2">
            <p  class="right_cta">{cta}</p>
            <h2 class="right__header">
            {header}
            </h2>
            <p class="content_bed">
            {text}
            </p>
            <a href={button.href} class="right_cta2">{button.text}</a>
            </div>
        </>
    );
  };
  
  export default Expectations;