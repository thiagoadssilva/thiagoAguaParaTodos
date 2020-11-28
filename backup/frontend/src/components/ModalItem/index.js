import React from 'react';

import imagemAgua from '../../assets/images/iaia20.png';

import {
    Container,
    DivBody,
    DivWaterInfo,
    DivWaterImg,
    DivImg,
    DivTitle,
    DivDescription,
    DivPrice,
    DivLabelPrice,
    Price,
    PriceActual,
    DivQtd,
    DivSubtract,
    Qtd,
    DivPlus,
    DivButtonCart,
    DivButtonCancel
}from './styled.js';

export default ({openModal, setOpenModal}) =>{
    console.log(openModal);
    return(
        <Container openModal={openModal}>            
            <DivBody>
                <DivWaterImg>
                    <DivImg src={imagemAgua} alt=""/>
                </DivWaterImg>
                <DivWaterInfo>
                    <DivTitle>Noana - (20 Litros)</DivTitle>
                    <DivDescription>Pois tu, Senhor, abençoas o justo e, como escudo, o cercas da tua benevolência. - Salmos, 5:12</DivDescription>
                    <DivPrice>
                        <DivLabelPrice>Preço</DivLabelPrice>
                        <Price>
                            <PriceActual>R$ 20.00</PriceActual>
                            <DivQtd>
                                <DivSubtract>-</DivSubtract>
                                <Qtd>1</Qtd>
                                <DivPlus>+</DivPlus>
                            </DivQtd>
                        </Price>
                    </DivPrice>
                    <DivButtonCart>Adicionar ao carrinho</DivButtonCart>
                    <DivButtonCancel onClick={() => setOpenModal(false)}>Cancelar</DivButtonCancel>
                </DivWaterInfo>
            </DivBody>
        </Container>
    );
}