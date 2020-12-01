import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family:'Hepta Slab', Helvetica, Arial;
    margin:0 auto 50px auto;
    width: 30%;
`;
export const DivImg = styled.img`
    width:200px;
    height:350px;
    background-color:#EEE;
    border-radius:30px;
    box-shadow:0px 0px 20px rgba(0, 0, 0, 0.2);
    align-items: center;
    cursor: pointer;
`;
export const DivAdd = styled.div`
    width:50px;
    height:50px;
    line-height:50px;
    border-radius:25px;
    background-color:#388bc5;
    text-align:center;
    color:#FFF;
    font-size:22px;
    cursor: pointer;
    margin-top:-25px;
    transition:all ease 0.2s;

    :hover{
        background-color:#244c88;
    }
`;
export const Price = styled.div`
    font-size: 20px;
    color:#333;
    margin-top:5px;
`;
export const Name = styled.div`
    font-size:20px;
    font-weight: bold;
    color:#000;
    margin-top:5px;
`;
export const Description = styled.div`
    font-size:13px;
    color:#555;
    text-align: center;
    width: 200px;
`;

