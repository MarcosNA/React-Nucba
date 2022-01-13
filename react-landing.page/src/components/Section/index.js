import { SectionWrapper } from "./styles"
import { bool, node } from 'prop-types'

const Section = ({ bg, children }) => {
    return(
        <SectionWrapper background={bg}>
            {children}
        </SectionWrapper>
    )
}

Section.propTypes = {
    bg: bool,
    children: node
}


export default Section
