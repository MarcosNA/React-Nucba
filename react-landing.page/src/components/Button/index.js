import { ButtonWrapper } from "./styles";

const Button = ({ text, func }) => {
    return(
        <ButtonWrapper onClick={func}>
            {text}
        </ButtonWrapper>
    )
}

export default Button
