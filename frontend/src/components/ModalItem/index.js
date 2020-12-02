import React, {useState, useEffect, useContext} from 'react';

import imagemAgua from '../../assets/images/iaia20.png';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

import {Context} from '../../Context/OpenModalAside';


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

 export default ({openModal, setOpenModal, props}) =>{
    const [addSubtract ,setAddSubtract] = useState(1);
    const {openAside} = useContext(Context);

    useEffect(() =>{
        if(addSubtract <= 0){
            setOpenModal(false); 
        }
        if(openModal === false){
            setAddSubtract(1) ;
        }
    },[addSubtract, openModal]);

    return(
        <Container openModal={openModal}>           
            <DivPaiCenter>
                <DivBody>
                    <DivButtonCancelMobile>Voltar</DivButtonCancelMobile>
                    <DivWaterImg>
                        <DivImg src={props.data.imagem} alt=""/>
                    </DivWaterImg>
                    <DivWaterInfo>
                        <DivTitle>{props.data.nome}</DivTitle>
                        <DivDescription>{props.data.descricao}</DivDescription>
                        <DivPrice>
                            <DivLabelPrice>Preço</DivLabelPrice>
                            <Price>
                                <PriceActual>R$ {props.data.valor}</PriceActual>
                                <DivQtd>
                                    <DivSubtract onClick={() => setAddSubtract(addSubtract - 1)}>
                                        <RemoveCircleOutlineIcon  />
                                    </DivSubtract>
                                    <Qtd>{addSubtract}</Qtd>
                                    <DivPlus onClick={() => setAddSubtract(addSubtract + 1)}>
                                        <ControlPointIcon />
                                    </DivPlus>
                                </DivQtd>
                            </Price>
                        </DivPrice>
                        <DivButtonCart onClick={() => openAside(props, addSubtract)}>Adicionar ao carrinho</DivButtonCart>
                        <DivButtonCancel onClick={() => setOpenModal(false)}>Cancelar</DivButtonCancel>
                    </DivWaterInfo>
                </DivBody>
            </DivPaiCenter>            
        </Container>
    );
}