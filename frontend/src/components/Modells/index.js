import React from 'react';
import WaterItem from '../../components/WaterItem';
import Aside from '../../components/Aside';


import {
    Container,
    Div
} from './styled';

export default () =>{
    return(
        <Container>            
           
            <Div>
                <WaterItem />  
                <WaterItem />  
                <WaterItem />  
                <WaterItem />  
                <WaterItem />  
                <WaterItem />  
                <WaterItem />  
                <WaterItem />  
                <WaterItem />  
                <WaterItem />  
                <WaterItem />  
                <WaterItem />  
                <WaterItem />  
                <WaterItem />  
            </Div>
            <Aside />
        </Container>
    );
}