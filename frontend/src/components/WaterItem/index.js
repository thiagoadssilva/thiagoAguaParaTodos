import React, {useState} from 'react';
import ModalItem from '../../components/ModalItem';

import {
    Container,
    DivImg,
    DivAdd,
    Price,
    Name,
    Description
}from './styled';

export default (props) => {
    const [openModal, setOpenModal] = useState(false);

    return(
        <Container>
            <DivImg onClick={() => setOpenModal(true)} src={props.data.imagem} alt=""/>
            <DivAdd onClick={() => setOpenModal(true)}>+</DivAdd>
            <Price>R$ {props.data.valor}</Price>
            <Name>{props.data.nome}</Name>
            <Description>{props.data.descricao}</Description>
            <ModalItem openModal={openModal} setOpenModal={setOpenModal}/>
        </Container>
    );
}

