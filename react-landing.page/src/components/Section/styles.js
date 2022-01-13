import styled from "styled-components";
import colors from "../../styles/colors";

export const SectionWrapper = styled.section`
  width: 100%;
  padding: 6rem;
  background: ${props => props.background ? colors.SecondaryBg : colors.White};
`


