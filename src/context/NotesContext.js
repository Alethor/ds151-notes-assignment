import React, {useReducer, createContext} from 'react';

const NotesContext = createContext();

const notesReducer = (state, action) => {
    switch(action.type){
        case "new":
            return([...state, {content:action.content, title:action.title}]);
        case "update":
            return;
        case "delete": 
            return;

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