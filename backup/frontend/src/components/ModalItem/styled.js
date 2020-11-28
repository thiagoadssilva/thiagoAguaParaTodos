import styled from 'styled-components';

export const Container = styled.div`
    position:fixed;
    left:0;
    top:0;
    bottom:0;
    right:0;
    background-color:rgba(255, 255, 255, 0.5);
    display: ${props => props.openModal ? '' : 'none'};
    transition: all ease .5s;
    justify-content: center;
    align-items: center;
    overflow-y:auto;
    justify-content:flex-start;
    align-items: flex-start;
`;
export const DivWaterImg = styled.div`
    width: 75%;
    height: auto;
`;
export const DivImg = styled.img`

`;
export const DivBody = styled.div`
    width:100vw;
    display:block;
    padding:20px;
    border-radius:0;
    box-shadow:none;
    margin:0;
    width:900px;
    background-color:#FFF;
    border-radius:10px;
    box-shadow:0px 0px 15px #999;
    display:flex;
    margin:20px 0px;
`;
export const DivWaterInfo = styled.div`
    flex:1;
    font-family:'Hepta Slab', Helvetica, Arial;
    padding-bottom:50px;
`;
export const DivTitle = styled.label`
    margin-top:20px;
`;
export const DivDescription = styled.label`
    font-size:15px;
    color:#999;
    margin-top:10px;
    font-family:'Lato',Helvetica,Arial;
`;
export const DivPrice = styled.div`

`;
export const DivLabelPrice = styled.label`
    color:#CCC;
    text-transform: uppercase;
    font-size:14px;
    margin-top:30px;
    margin-bottom:10px;
`;
export const Price = styled.div`
    display:flex;
    align-items:center;
`;
export const PriceActual = styled.div`
    font-size:28px;
    margin-right:30px;
`;
export const DivQtd = styled.div`
    display:inline-flex;
    background-color:#EEE;
    border-radius:10px;
    height:30px;
    //height:60px;
`;
export const DivSubtract = styled.div`

`;
export const Qtd = styled.div`
    line-height: 60px;
    font-size:20px;
    /* line-height: 30px;
    font-size: 12px;
    font-weight: bold;
    padding: 0px 5px;
    color:#000; */
`;
export const DivPlus = styled.div`

`;
export const DivButtonCart = styled.button`
    margin-top:30px;
    padding:20px 30px;
    border-radius:20px;
    background-color:#48d05f;
    color:#FFF;
    display:inline-block;
    cursor:pointer;
    margin-right:30px;

    /* font-size:20px;
    display:block;
    text-align:center;
    margin:30px auto; */

    :hover{
        background-color:#32a345;
    }
`;
export const DivButtonCancel = styled.button`
    display:inline-block;
    cursor:pointer;
    //display:none;
`;