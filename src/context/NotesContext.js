import React, {useReducer, createContext, useState} from 'react';

const NotesContext = createContext();

const notesReducer = (state, action) => {

    switch(action.type){
        case "new":
            return([...state, {content:action.payload.content, title:action.payload.title}]);
        case "update":
            let index = state.findIndex(item => (item.title == action.payload.title && item.content == action.payload.content));
            var newState = [...state];
            newState[index] = action.payload;
            console.log(newState[index]);
            return([...newState]);
        case "delete": 
          return([...state.filter((item) => (item.title != (action.payload.title)) && item.payload != (action.payload.content))]);

    }
}
const NotesProvider = ({children}) => {

  const [state, dispatch] = useReducer(notesReducer, [{title: "nota 1", content: "conteudo 1"}, {title: "nota 2", content: "conteudo 2"} ])
    return(
        <NotesContext.Provider value={{state, dispatch}}>
            {children}
        </NotesContext.Provider>
    );
}
export { NotesContext, NotesProvider};