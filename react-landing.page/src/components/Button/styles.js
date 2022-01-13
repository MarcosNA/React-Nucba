import styled from "styled-components"
import colors from "../../styles/colors";
import sizes from "../../styles/sizes";

export const ButtonWrapper = styled.button`
  background: none;
  border: 2px solid ${colors.LigthGray};
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border-radius: 3rem;
  margin-bottom: ${sizes.mainMargin};
`
