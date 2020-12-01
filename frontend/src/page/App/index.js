import React from 'react';

import {
    Container 
}from './styled';

import Main from '../../components/Main';
import Modells from '../../components/Modells';
import RodaPe from '../../components/RodaPe';
import { OpenProvider } from '../../Context/OpenModalAside';

export default () =>{
    return(
        <OpenProvider>
            <Container>
                <Main />
                <Modells />            
                <RodaPe />                    
            </Container>
        </OpenProvider>
        
    );
}