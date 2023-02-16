import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(69deg, #00808e 30%, #9a7007 70%);

  /* робимо фон на всю ширину */
  width: 100%;
`;
