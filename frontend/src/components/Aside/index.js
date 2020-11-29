import React, {useState} from 'react';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import imagemAgua from '../../assets/images/iaia20.png';

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
    const [addSubtract ,setAddSubtract] = useState(1);

    return(
        <Container addSubtract={addSubtract}>
            <CartArea >
                <CartTitle>Suas Aguas</CartTitle>
                <CartWaters>
                    <DivAreaImg>
                        <DivImg src={imagemAgua} alt=""/>
                        <DivName>IAIA (20 litro)</DivName>
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
                            <ValorSubTotal>R$ 100.00</ValorSubTotal>
                        </CartItemTotalSubtotal>
                        <CartTotalItemBigTotal>
                            <TotalBig>Total</TotalBig>
                            <TotalBigValor>R$ 200.00</TotalBigValor>
                        </CartTotalItemBigTotal>
                    </DivTotal>
                    <CartButtonCheckOut>Finalizar Compra</CartButtonCheckOut>
                </CartDetails>
            </CartArea>
        </Container>
    );
}