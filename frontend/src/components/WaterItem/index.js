import React from 'react';
import imagemAgua from '../../assets/images/iaia20.png';

import {
    Container,
    DivImg,
    DivAdd,
    Price,
    Name,
    Description
}from './styled';

export default () => {
    return(
        <Container>
            <DivImg src={imagemAgua} alt="teste"/>
            <DivAdd>+</DivAdd>
            <Price>R$ 10.00</Price>
            <Name>IAIA</Name>
            <Description>E vós, irmãos, não vos canseis de fazer o bem. (2 Tessalonicenses 3:13)</Description>
        </Container>
    );
}