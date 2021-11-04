import styled from "styled-components";
const Container = styled.div`
  max-width: 1440px;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  height: calc(100vh - 76.64px);
  /* Navbar component's height is 76.64px */
  @media only screen and (max-width: 1024px) {
    display: block;
  }
`;
function PageContainer(props) {
  return <Container>{props.children}</Container>;
}

export default PageContainer;
