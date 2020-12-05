import React, {createContext, useState} from 'react';

const Context = createContext();

function OpenProvider({children}){
    const [open, setOpen] = useState(0);
    const [dataProduct, setDataProduct] = useState([]);
    const [controlAsideClose, setControlAsideClose] = useState('none');
    let arrayItens = [];

    function openAside(props, addSubtract){
        arrayItens['id'] = props.data.id;
        arrayItens['nome'] = props.data.nome;
        arrayItens['descricao'] = props.data.descricao;
        arrayItens['imagem'] = props.data.imagem;
        arrayItens['valor'] = props.data.valor;
        arrayItens['quantidade'] = addSubtract;
        setDataProduct(arrayItens);
        setOpen(1);
        setControlAsideClose('block');
    }

    return(
        <Context.Provider value={{open, openAside, setDataProduct, dataProduct, controlAsideClose, setControlAsideClose}}>
            {children}
        </Context.Provider>
    );
}

export {Context, OpenProvider};

