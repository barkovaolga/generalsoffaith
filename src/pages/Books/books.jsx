import HeroBooks from "../../components/HeroBooks/HeroBooks";
import BooksGrid from "../../components/BooksGrid/BooksGrid";

import Layout from "../../components/Layout/Layout";
function Books() {
  return (
    <>
      <Layout>
        <HeroBooks />
        <BooksGrid />
      </Layout>
    </>
  );
}

export default Books;
