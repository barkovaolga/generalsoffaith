import Layout from "../../components/Layout/Layout";
import CommunityGallery from "../../components/CommunityGallery/CommunityGallery";
import "./Community.scss";
import heroVideo from "../../assets/images/video/hero_video.png";
function Community() {
  return (
    <Layout>
      <section className="hero-page-quotes">
        <div className="container hero-page__container">
          <div className="hero-page__content">
            <h1 className="hero-page__title">ЦИТАТЫ ВЕРЫ</h1>

            <p className="hero-page__quote">
              Архив вдохновляющих цитат, которые укрепляют веру, вдохновляют и
              помогают возрастать в Боге.
            </p>
          </div>
        </div>
      </section>
      <CommunityGallery />
    </Layout>
  );
}

export default Community;
