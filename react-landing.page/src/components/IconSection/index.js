import { bool } from "prop-types"
import { INFO } from '../../constants'

import {
    IconSectionWrapper,
    IconList,
    IconContent,
    IconTitle,
    IconText,
    IconImage,
} from "./styles";

import Image from "../Image";

const IconSection = ({ bg }) => (
    <IconSectionWrapper bg={bg}>
        <IconList>
            {
                INFO.slice(0,3).map(item => {
                    return(
                        <IconContent key={item.id}>
                            <IconImage>
                                <Image src={item.image} alt={item.image} />
                            </IconImage>
                            <IconTitle>
                                {item.title}
                            </IconTitle>
                            <IconText>
                                {item.text}
                            </IconText>
                        </IconContent>
                    )
                })
            }
        </IconList>
        <IconList>
            {
                INFO.slice(3,6).map(item => {
                    return(
                        <IconContent key={item.id}>
                            <IconImage>
                                <Image src={item.image} alt={item.image} />
                            </IconImage>
                            <IconTitle>
                                {item.title}
                            </IconTitle>
                            <IconText>
                                {item.text}
                            </IconText>
                        </IconContent>
                    )
                })
            }
        </IconList>
    </IconSectionWrapper>
)

IconSection.defaultProps = {
    bg: bool
}

IconSection.defaultProps = {
    bg: false
}

export default  IconSection
