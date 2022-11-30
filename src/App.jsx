import { useState } from "react";
import { ArtitleList, ButtonList } from "./components";
import data from "./data/data";

function App() {
  // const [count, setCount] = useState(0);
  const allCategories = [...new Set(data.map((article) => article.category))];
  console.log(allCategories);
  return (
    <>
      <h1>Hola mundo </h1>
      <ButtonList />
      <hr />
      <ArtitleList />
    </>
  );
}

export default App;
