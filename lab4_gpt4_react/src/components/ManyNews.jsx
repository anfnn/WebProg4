import Many_newsData from "../mockData/Many_newsData.js";


const ManyNews = () => {
    const {   img1,
        img2,
        img3,
        img4,
        img5,
        data,
        text,
        text21,
        text22,
        text23,
        alt,
        read} = Many_newsData;
  
    return (
        <>
        <div class = "news1">
        <img class="new1s_img" src={img1.src} alt= {alt} />
        <div class = "news1_info">
          <p class = "data1">{data} </p>
          <p class = "news1_text">{text21}  <br/> {text22}  <br/> {text23} </p>
          <a class = "news1_read" href ={read.href}> {read.read} </a>
        </div>
        </div>
        <div class = "block1">
        <div class = "news2">
            <img class="new2s_img" src= {img2.src} alt= {alt} />
            <div class = "news2_info">
                <p class = "data2">{data} </p>
                <p class = "news2_text">{text} </p>
                <a class = "news2_read" href ={read.href}> {read.read} </a>
                </div>
        </div>
        <div class = "news3">
            <img class="new3s_img" src={img3.src} alt= {alt} />
            <div class = "news3_info">
                <p class = "data3">{data} </p>
                <p class = "news3_text">{text} </p>
                <a class = "news1_read" href ={read.href}> {read.read} </a>
                </div>
        </div>
        </div>
        <div class = "block2">
        <div class = "news4">
            <img class="new4s_img" src={img4.src} alt= {alt}/>
            <div class = "news4_info">
                <p class = "data4">{data} </p>
                <p class = "news4_text">{text} </p>
                <a class = "news4_read" href ={read.href}> {read.read} </a>
                </div>
        </div>
        <div class = "news5">
            <img class="new5s_img" src={img5.src} alt= {alt} />
            <div class = "news5_info">
                <p class = "data5">{data} </p>
                <p class = "news5_text">{text} </p>
                <a class = "news5_read" href ={read.href}> {read.read} </a>
                </div>
        </div>
        </div>   
        </>
    );
  };
  
  export default ManyNews;