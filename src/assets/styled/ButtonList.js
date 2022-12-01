import styled from "styled-components";
const FatherBottons = styled.div`
  .categories {
    margin: 2rem auto;
    text-align: center;
    /* border: 2px solid red; */
  }

  .btn-category {
    padding: 12px 25px;
    border: none;
    margin-right: 20px;
    cursor: pointer;
    border-radius: 15px;
    background-color: #3f2b22;
    color: #e18255;
    font-weight: 700;
    font-size: 16px;
    transition: all 0.4s cubic-bezier(1, -0, 0.6, 1.35);
  }
  .btn-category:hover {
    background-color: rgba(227, 131, 86, 0.6);
  }
  .btn-category:last-child {
    margin-right: 0;
    /* border: 2px solid red; */
  }
  @media (max-width: 520px) {
    .title h1 {
      font-size: 40px;
    }

    .title img {
      width: 250px;
    }

    .article-list {
      grid-template-columns: 1fr;
      gap: 45px;
    }

    .article-container {
      padding: 0 15px;
    }

    .article-body {
      margin-top: 10px;
      margin-left: 10px;
    }

    .article-container h2 {
      font-size: 18px;
    }

    .article-container p {
      font-size: 13px;
    }

    .article-footer span {
      font-size: 12px;
    }

    .categories {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 5px;
      margin-left: 10px;
      margin-right: 10px;
    }

    .btn-category {
      margin: 5px;
    }
  }
`;
export { FatherBottons };
