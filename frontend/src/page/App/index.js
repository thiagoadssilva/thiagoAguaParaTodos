import React from 'react';

import {
    Container 
}from './styled';

import Main from '../../components/Main';
import Modells from '../../components/Modells';
import RodaPe from '../../components/RodaPe';

export default () =>{
    return(
        <Container>
            <Main />
            <Modells />
            <RodaPe />
        </Container>
    );
}