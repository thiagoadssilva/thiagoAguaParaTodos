import styled from 'styled-components';

export const Container = styled.div`
    background-color:#9ccbe6;
    width: ${props => props.addSubtract > 0 ? '100vw' : '0vw'}; //100vw;
    font-family:'Hepta Slab', Helvetica, Arial;
    transition:all ease 0.3s;
    overflow-x:hidden;
   
`;
export const CartArea = styled.div`
    //width: 100%;
    padding:20px;
`;
export const CartTitle = styled.label`
    font-weight: bold;
    font-size: 22px;
`;
export const CartDetails = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #79b9dd;
`;
export const CartItemTotalSubtotal = styled.div`
    padding:15px 0;
    border-top:1px solid #79b9dd;
    color:#315970;
    display:flex;
    justify-content: space-between;
    font-size:15px;
`;
export const SubTotal = styled.span`
    font-size: 20px;
    font-weight: bold;
`;
export const ValorSubTotal = styled.span`
    font-weight: bold; 
`;
export const CartTotalItemBigTotal = styled.div`
    padding:15px 0;
    border-top:1px solid #79b9dd;
    color:#315970;
    display:flex;
    justify-content: space-between;
    font-size:15px;
`;
export const TotalBig = styled.span`
    font-size:20px;
    color:#000;
    font-weight: bold;
`;
export const TotalBigValor = styled.span`
    font-size:20px;
    color:#000;
    font-weight: bold;
`;
export const CartButtonCheckOut = styled.button`
    padding:20px 30px;
    border-radius:20px;
    background-color:#48d05f;
    color:#FFF;
    cursor:pointer;
    text-align:center;
    margin-top:20px;
    border:2px solid #63f77c;
    transition: all ease .2s;
    display: flow-root;
    padding-left: 100px;
    padding-right: 100px;
    font-weight: bold;
    margin-bottom: 21px;

    :hover {
        background-color:#35af4a;
    }
`;
export const DivQtd = styled.div`
    display: flex;
    align-items: center;
`;
export const DivSubtract = styled.div`
    cursor: pointer;
`;
export const Qtd = styled.div`
    line-height: 30px;
    font-size: 20px;
    font-weight: bold;
    padding: 0px 5px;
    color:#000;
`;
export const DivPlus = styled.div`
    cursor: pointer;
`;
export const CartWaters = styled.div`
    //display:flex;
    //width: 100%;
    //align-items:center;
    margin:10px 0;
`;
export const DivImg = styled.img`
    width:40px;
    height:40px;
    margin-right:20px;
`;
export const DivName = styled.label`
    width: 100%;
    word-break: break-all;
`;
export const addSubtract = styled.div`
    
`;
export const DivAreaImg = styled.div`
    display: flex;
    align-items: center;

`;
export const DivTotal = styled.div`

`;