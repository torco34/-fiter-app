import React from "react";
import { FatherBottons } from "../assets/styled/ButtonList";
export const ButtonList = ({ categories, filterCategori }) => {
  return (
    <>
      <FatherBottons>
        <div className="categories">
          {categories.map((category) => (
            <button
              type="button"
              className="btn-category"
              onClick={() => filterCategori(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
      </FatherBottons>
    </>
  );
};
