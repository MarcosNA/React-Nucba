import { ImageElement } from "./styles";
import { string } from 'prop-types'

const Image = ({ src, alt}) => (
    <ImageElement src={src} alt={alt} />
)

Image.propTypes = {
    src: string.isRequired,
    alt: string.isRequired
}

export default Image
