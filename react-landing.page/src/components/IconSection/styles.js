import styled from "styled-components";
import Section from "../Section";
import colors from "../../styles/colors";

export const IconSectionWrapper = styled(Section)``

export const IconList = styled.ul`
  @media (min-width: 320px){
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1200px){
    display: flex;
    flex-direction: row;
    margin-bottom: 3rem;
  }
`

export const IconContent = styled.li`
  @media (min-width: 320px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;

    &:last-child{
      margin-bottom: 0;
    }
  }

  @media (min-width: 1200px){
    margin-bottom: 0;
    padding: 1rem;
  }
`

export const IconTitle = styled.h2`
  @media (min-width: 320px){
    text-transform: uppercase;
  }
`

export const IconText = styled.p`
  @media (min-width: 320px){
    font-size: 1rem;
    color: ${colors.Black}
    font-weight: 300;
  }
`

export const IconImage = styled.div`
  @media (min-width: 320px){
    &:first-child{
      width: 10rem;
    }

    &:last-child {
      order: -1;
    }
  }
`







