import styled from "styled-components"
import colors from "../../styles/colors"
import sizes  from "../../styles/sizes"

export const PhoneSection = styled.div`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: ${props => props.reverse ? "column-reverse" : "column"};
    justify-content: center;
    align-items: center;
    padding: ${sizes.mainMobilePadding};
  }

  @media (min-width: 1200px){
    flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
    justify-content: space-between;
    padding: ${sizes.mainPadding}
  }
`

export const PhoneSectionDiv = styled.div`
  @media (min-width: 320px) {
    width: 300px;
  }

  @media (min-width: 1200px){
    width: 50%;
  }
`

export const HeaderH2 = styled.h2`
  @media (min-width: 320px) {
    color: ${colors.Green};
    font-size: 2rem;
  }

  @media (min-width: 1200px){
    width: 50%;
  }
`

export const HeaderH3 = styled.h3`
  @media (min-width: 320px) {
    color: ${colors.LigthGray};
    font-size: 1.5rem;
  }
`

export const Hr = styled.hr`
  @media (min-width: 320px) {
    width: 100px;
    color: ${colors.Black};
    margin: ${sizes.mainMargin} 0;
  }
`

export const HeaderP = styled.p`
  @media (min-width: 320px) {
    font-weight: 400;
    margin-top: ${sizes.secondaryMargin};
    margin-bottom: ${sizes.secondaryMargin};
  }
`

export const HeaderWrapper = styled.header`
  background: ${colors.SecondaryBg};
  
`

export const PhoneImageContent = styled.div`
    @media(min-width: 320px){
      width: 300px
    }
`
