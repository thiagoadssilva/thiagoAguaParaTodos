import React, {useState, useContext, useEffect} from 'react';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

import {Context} from '../../Context/OpenModalAside';

import { 
    Container,
    CartArea, 
    CartTitle,
    CartDetails,
    CartItemTotalSubtotal,
    SubTotal,
    ValorSubTotal,
    CartTotalItemBigTotal,
    TotalBig,
    TotalBigValor,
    CartButtonCheckOut,
    DivQtd,
    DivSubtract,
    Qtd,
    DivPlus,
    CartWaters,
    DivImg,
    DivName,
    DivAreaImg,
    DivTotal
} from './styled';

export default () => {
    const {open, dataProduct, controlAsideClose, setControlAsideClose} = useContext(Context);
    const [addSubtract ,setAddSubtract] = useState(0);
    const [addTotal, setAddTotal] = useState(0);

    /** INICIO - useEffect responsável por fechar e abrir o aside conforme a quantidade de itens */
    useEffect(() => {      
        setAddSubtract(open);
        setAddSubtract(dataProduct.quantidade); 
        setAddTotal(dataProduct.quantidade * dataProduct.valor);      
    }, [open, dataProduct.quantidade, controlAsideClose]);
    /** FIM - useEffect responsável por fechar e abrir o aside conforme a quantidade de itens */

    useEffect(() => {
        setAddTotal(addSubtract * dataProduct.valor);
        if(addSubtract == 0){
            setControlAsideClose('none');
        }
    },[addSubtract])

    return(
        <Container controlAsideClose={controlAsideClose}>
            <CartArea >
                <CartTitle>Suas Aguas</CartTitle>
                <CartWaters>
                    <DivAreaImg>
                        <DivImg src={dataProduct.imagem} alt=""/>
                        <DivName>{dataProduct.nome}</DivName>
                        <DivQtd>
                            <DivSubtract onClick={() => setAddSubtract(addSubtract - 1)}>
                                <RemoveCircleOutlineIcon  />
                            </DivSubtract>
                            <Qtd>{addSubtract}</Qtd>
                            <DivPlus onClick={() => setAddSubtract(addSubtract + 1)}>
                                <ControlPointIcon />
                            </DivPlus>
                        </DivQtd>
                    </DivAreaImg>
                </CartWaters>
                <CartDetails>
                    <DivTotal>
                        <CartItemTotalSubtotal>
                            <SubTotal>SubTotal</SubTotal>
                            <ValorSubTotal>R$ {parseFloat(dataProduct.valor).toFixed(2)}</ValorSubTotal>
                        </CartItemTotalSubtotal>
                        <CartTotalItemBigTotal>
                            <TotalBig>Total</TotalBig>
                            <TotalBigValor>R$ {parseFloat(addTotal).toFixed(2)}</TotalBigValor>
                        </CartTotalItemBigTotal>
                    </DivTotal>
                    <CartButtonCheckOut>Finalizar Compra</CartButtonCheckOut>
                </CartDetails>
            </CartArea>
        </Container>
    );
}