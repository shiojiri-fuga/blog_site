import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    margin: 10px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const BaseButton = styled.button`
    border-bottom: 5px solid #9f000c;
    border-radius: 100vh;
    margin-top: 10px;

    &:hover {
        margin-top: 13px;
        border-bottom: 2px solid #9f000c;
    }
`;


const BaseLink = styled(Link)`
    margin-10px;
`;


export { Container, BaseButton, BaseLink };