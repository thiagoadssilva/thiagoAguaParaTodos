import styled from 'styled-components';

export const Container = styled.div`
    position:fixed;
    left:0;
    top:0;
    bottom:0;
    right:0;
    background-color:rgba(255, 255, 255, 0.5);
    display: ${props => props.openModal ? '' : 'none'};
    overflow-y:auto;
    //transition: all ease .10s;
    
`;
export const DivWaterImg = styled.div`
    flex:1;
    display:flex;
    justify-content: center;
    align-items: center;
`;
export const DivImg = styled.img`
    width:200px;
    height:280px;
    
    //background-color:#EEE;
    //border-radius:30px;
    //box-shadow:0px 0px 20px rgba(0, 0, 0, 0.2);
`;
export const DivBody = styled.div`
    transition: all ease .10s;
    width:733px;
    background-color:#FFF;
    border-radius:10px;
    box-shadow:0px 0px 15px #999;
    display:flex;
    //margin:20px 0px;
    //padding:20px;
    margin:0;
`;
export const DivWaterInfo = styled.div`
    flex:1;
    font-family:'Hepta Slab', Helvetica, Arial;
    padding-bottom:50px;
`;
export const DivTitle = styled.label`
    display: flex;
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
`;
export const DivDescription = styled.label`
    font-size:15px;
    color:#999999;
`;
export const DivPrice = styled.div`
   margin-top: 15px; 
`;
export const DivLabelPrice = styled.label`
    color:#999;
    text-transform: uppercase;
    font-size:14px;
`;
export const Price = styled.div`
    margin-top: 5px;
    display:flex;
    align-items:center;
`;
export const PriceActual = styled.div`
    font-size:28px;
    margin-right:30px;
`;
export const DivQtd = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 95px;
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
export const DivButtonCart = styled.button`
    margin-top:30px;
    padding:20px 30px;
    border-radius:20px;
    background-color:#48d05f;
    color:#FFF;
    display:inline-block;
    cursor:pointer;
    margin-right:30px;
    border: 0px;
    transition: all ease .2s;
    

    :hover{
        background-color:#32a345;
    }
`;
export const DivButtonCancel = styled.button`
    margin-top:30px;
    padding:20px 30px;
    border-radius:20px;
    background-color:#E15966;
    color:#FFF;
    display:inline-block;
    cursor:pointer;
    margin-right:30px;
    border: 0px;
    transition: all ease .2s;

    :hover{
        background-color:#93363e;
    }
`;
export const DivPaiCenter = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease .10s;
    
`;
export const DivButtonCancelMobile = styled.button`
    display: none;
`;