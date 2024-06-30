import styled from "@emotion/styled";

const Root = styled.div`
  width: 100vw;
  padding: 15px;
  box-sizing: border-box;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const DashboardLayout = ({ children }) => (
  <Root>
    <div className="container">{children}</div>
  </Root>
);

export default DashboardLayout;
