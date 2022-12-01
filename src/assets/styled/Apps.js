import styled from "styled-components";
const FatherApp = styled.div`
  position: relative;
  top: -30px;
  background-color: #161516;
  color: #fff;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Poppins";
`;

const Header = styled.div`
  .title {
    text-align: center;
    margin: 25px 0;
    font-family: Ubuntu, "PT Sans", Verdana, sans-serif;
    letter-spacing: 2px;
    font-size: 25px;
  }
  .title span {
    color: #e18255;
  }
  .title img {
    width: 400px;
    margin: 25px 0;
  }
  .article-container {
    padding: 0 10px;
  }
`;
export { FatherApp, Header };
