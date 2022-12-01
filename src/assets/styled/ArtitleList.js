import styled from "styled-components";
const FatherArticle = styled.div`
  .article-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  .article-container {
    padding: 0 10px;
  }

  .article-container h2 {
    color: var(--color-titulo);
    font-size: 22px;
    margin-bottom: 10px;
    font-weight: 700;
  }
  .img-container {
    overflow: hidden;
  }
  .img-container img {
    border-radius: 15px;
    cursor: pointer;
    width: 100%;
  }
  .img-container img:hover {
    transform: scale(1.3);
    transition: transform 0.6s ease-in-out;
  }
  .img-container:hover {
    border-radius: 15px;
  }
  .article-body {
    margin-top: 20px;
    margin-left: 15px;
    border: 2px solid red;
  }
  .article-container p {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 300;
    line-height: 25px;
    border: 2px solid red;
  }

  .article-footer span {
    color: #8a8a8a;
    font-size: 14px;
    font-weight: 500;
    border: 2px solid red;
  }
  .categories {
    margin: 2rem auto;
    text-align: center;
    border: 2px solid red;
  }
`;
export { FatherArticle };
