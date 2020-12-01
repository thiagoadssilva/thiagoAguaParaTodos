import React, {createContext, useState} from 'react';

const Context = createContext();

function OpenProvider({children}){
    const [open, setOpen] = useState(0);

    function openAside(){
        setOpen(1);
    }
    function closeAside(){
        setOpen(0);
    }

    return(
        <Context.Provider value={{open, openAside, closeAside}}>
            {children}
        </Context.Provider>
    );
}

export {Context, OpenProvider};

