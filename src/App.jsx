import { useState } from "react";
import { ArtitleList, ButtonList } from "./components";
import data from "./data/data";
import { FatherApp, Header } from "./assets/styled/Apps";
function App() {
  const allCategories = [
    "All",
    ...new Set(data.map((article) => article.category)),
  ];
  console.log(allCategories);
  const [categories, setCategories] = useState(allCategories);
  const [articles, setArticles] = useState(data);
  const filterCategori = (category) => {
    console.log(category);
  };

  return (
    <FatherApp>
      <Header>
        <div className="title">
          <h1>
            Filter <span>Blog</span>Basics
          </h1>
          <img
            src="https://educacion30.b-cdn.net/wp-content/uploads/2017/06/lenguajes-programacion-978x652.jpg"
            alt="imgen"
          />
        </div>
      </Header>

      <ButtonList categories={categories} filterCategori={filterCategori} />

      <ArtitleList articles={articles} />
    </FatherApp>
  );
}

export default App;
