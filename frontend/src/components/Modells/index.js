import React from 'react';
import WaterItem from '../../components/WaterItem';
import Aside from '../../components/Aside';

import cristal10 from '../../assets/images/cristal10.png';
import cristal20 from '../../assets/images/cristal20.png';
import cristalina20 from '../../assets/images/cristalina20.png';
import iaia20 from '../../assets/images/iaia20.png';
import indaia10 from '../../assets/images/indaia10.png';
import indaia20 from '../../assets/images/indaia20.png';
import noana20 from '../../assets/images/noana20.png';
import prataVale10 from '../../assets/images/prataVale10.png';
import prataVale20 from '../../assets/images/prataVale20.png';
import santajoana10 from '../../assets/images/santajoana.png';
import santaJoana20 from '../../assets/images/santaJoana20.png';
import garrafao from '../../assets/images/garrafao.png';



import {
    Container,
    Div
} from './styled';

const itens = [
    {
        id:1,
        nome: 'Costa Azul - (20 Litros)',
        descricao: 'Espere no Senhor. Seja forte! Coragem! Espere no Senhor. - Salmos 27:14',
        valor: 21.31,
        imagem: garrafao
    },
    {
        id:2,
        nome: 'Cristal - (10 Litros)',
        descricao: 'Pois tu, Senhor, abençoas o justo e, como escudo, o cercas da tua benevolência. - Salmos, 5:12',
        valor: 5.50,
        imagem: cristal10
    },
    {
        id:3,
        nome: 'Cristal - (20 Litros)',
        descricao: 'Não sobreveio a vocês tentação que não fosse comum aos homens. E Deus é fiel; ele não permitirá que vocês sejam tentados além do que podem suportar. Mas, quando forem tentados, ele mesmo providenciará um escape, para que o possam suportar. - 1 Coríntios 1',
        valor: 7.50,
        imagem: cristal20
    },    
    {
        id:4,
        nome: 'Cristalina - (10 Litros)',
        descricao: 'Eu clamo pelo Senhor na minha angústia, e ele me responde. - Salmos 120:1',
        valor: 5.00,
        imagem: cristalina20
    },
    {
        id:5,
        nome: 'Iaia - (20 Litros)',
        descricao: 'E vós, irmãos, não vos canseis de fazer o bem. (2 Tessalonicenses 3:13)',
        valor: 10.00,
        imagem: iaia20
    },    
    {
        id:6,
        nome: 'Indaia - (10 Litros)',
        descricao: 'Grande é o Senhor e digno de ser louvado; Sua grandeza não tem limites. - Salmos 145:3',
        valor: 10.00,
        imagem: indaia10
    },
    {
        id:7,
        nome: 'Indaia - (20 Litros)',
        descricao: 'Mas eu, Senhor, a ti clamo por socorro; já de manhã a minha oração chega à tua presença. - Salmos 88:13',
        valor: 18.50,
        imagem: indaia20
    },
    {
        id:8,
        nome: 'Noana - (20 Litros)',
        descricao: 'Deus é o nosso refúgio e a nossa fortaleza, auxílio sempre presente na adversidade. - Salmos 46:1',
        valor: 6.00,
        imagem: noana20
    },
    {
        id:9,
        nome: 'Prata do Vale - (10 Litros)',
        descricao: 'Ele ama a justiça e o juízo; a terra está cheia da bondade do Senhor. - Salmos 33:5',
        valor: 10.00,
        imagem: prataVale10
    },
    {
        id:10,
        nome: 'Prata do Vale - (20 Litros)',
        descricao: 'O Filho do Homem não veio para ser servido, mas para servir e dar a sua vida para resgatar a humanidade. - Mateus 20:28',
        valor: 10.00,
        imagem: prataVale20
    },
    {
        id:11,
        nome: 'Santa Joana - (20 Litros)',
        descricao: 'Quem vive unido a Cristo torna-se uma pessoa nova. As coisas antigas passaram. Tudo é novo. - 2 Coríntios, 5:17',
        valor: 15.00,
        imagem: santajoana10
    },
]

export default () =>{
    return(
        <Container>            
            <Div>
                {itens.map((item, index) =>
                    <WaterItem 
                        key={index}
                        data={item}
                    />          
                )}
            </Div>
            <Aside />
        </Container>
    );
}