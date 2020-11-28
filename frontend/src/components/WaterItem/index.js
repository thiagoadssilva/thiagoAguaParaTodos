import React from 'react';

import {
    Container,
    DivImgAdd,
    DivImg,
    DivAdd,
    Price,
    Name,
    Description
}from './styled';

export default () => {
    return(
        <Container>
            <DivImg />
            <DivAdd>+</DivAdd>
            <Price>R$ --</Price>
            <Name>--</Name>
            <Description>---</Description>
        </Container>
    );
}