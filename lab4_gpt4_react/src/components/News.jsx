import NewsData from "../mockData/NewsData.js";

const News = () => {
    const { 
        header,
    header2} = NewsData;
  
    return (
        <><section class="section News">
        <h1 class = "passing" >{header}<br/> {header2}</h1>
      </section> 
        </>
    );
  };
  
  export default News;