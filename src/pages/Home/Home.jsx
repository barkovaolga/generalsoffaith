import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";
import "./Home.scss";
import Categories from "../../components/Categories/Categories";
import HomeVideos from "../../components/HomeVideos/HomeVideos";
import HomeGenerals from "../../components/HomeGenerals/HomeGenerals";
import HomeBooks from "../../components/HomeBooks/HomeBooks";
import HomeHistory from "../../components/HomeHistory/HomeHistory";
import HomeQuote from "../../components/HomeQuote/HomeQuote";

function Home() {
  return (
    <Layout>
      <Hero />
      <Categories />
      <HomeVideos />
      <HomeGenerals />
      <HomeBooks />
      <HomeHistory />
      <HomeQuote />
    </Layout>
  );
}

export default Home;
