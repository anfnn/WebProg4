import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Expectations from "../components/Expectations";
import Registration from "../components/Registration";
import News from "../components/News";
import ManyNews from "../components/ManyNews";
import Footer from "../components/Footer";




const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section expectations">
        <Expectations />
      </section>
      <section className="section registration">
        <Registration />
      </section>
      <section className="section News">
        <News />
      </section>
      <section className="section many_news">
        <ManyNews />
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Home;
