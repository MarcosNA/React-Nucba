import styled from "styled-components";

export const HeaderWraper = styled.header `
    width: 100%;
    background-color: ${props => props.changueBackground ? "grey" : "white"};
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;

`
