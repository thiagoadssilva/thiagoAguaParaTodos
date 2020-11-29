import React from 'react';

import imagemAgua from '../../assets/images/iaia20.png';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

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
    DivButtonCancel,
    DivPaiCenter,
    DivButtonCancelMobile
}from './styled.js';

export default ({openModal, setOpenModal}) =>{
    return(
        <Container openModal={openModal}>
            <DivPaiCenter>
                <DivBody>
                    <DivButtonCancelMobile>Voltar</DivButtonCancelMobile>
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
                                    <DivSubtract>
                                        <RemoveCircleOutlineIcon  />
                                    </DivSubtract>
                                    <Qtd>1</Qtd>
                                    <DivPlus>
                                        <ControlPointIcon />
                                    </DivPlus>
                                </DivQtd>
                            </Price>
                        </DivPrice>
                        <DivButtonCart>Adicionar ao carrinho</DivButtonCart>
                        <DivButtonCancel onClick={() => setOpenModal(false)}>Cancelar</DivButtonCancel>
                    </DivWaterInfo>
                </DivBody>
            </DivPaiCenter>            
        </Container>
    );
}