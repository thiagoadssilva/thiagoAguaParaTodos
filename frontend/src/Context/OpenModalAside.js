import React, {createContext, useState} from 'react';

const Context = createContext();

function OpenProvider({children}){
    const [open, setOpen] = useState(0);
    const [dataProduct, setDataProduct] = useState([]);
    let arrayItens = [];

    function openAside(props, addSubtract){
        setOpen(1);
        
        arrayItens['id'] = props.data.id;
        arrayItens['nome'] = props.data.nome;
        arrayItens['descricao'] = props.data.descricao;
        arrayItens['imagem'] = props.data.imagem;
        arrayItens['valor'] = props.data.valor;
        arrayItens['quantidade'] = addSubtract;
        setDataProduct(arrayItens);
    }
    function closeAside(){
        setOpen(0);
    }
   

    return(
        <Context.Provider value={{open, openAside, closeAside, setDataProduct, dataProduct}}>
            {children}
        </Context.Provider>
    );
}

export {Context, OpenProvider};

