import React, {useReducer, createContext, useState} from 'react';

const NotesContext = createContext();


const NotesProvider = ({children}) => {
  const[idState, setIdState] = useState(2);

  const notesReducer = (state, action) => {

    switch(action.type){
        case "new":
            setIdState(idState + 1);
            return([...state, {id:idState, content:action.payload.content, title:action.payload.title}]);
        case "update":
            let index = state.findIndex(item => (item.id == action.payload.id));
            var newState = [...state];
            newState[index] = action.payload;
            console.log(state.lenght);
            return([...newState]);
        case "delete": 
          setIdState(idState -1);
          return([...state.filter((item) => (item.id != action.payload.id))]);

    }
}

  const [state, dispatch] = useReducer(notesReducer, [{id: 1,title: "nota 1", content: "conteudo 1"}, {id: 2,title: "nota 2", content: "conteudo 2"} ])
    return(
        <NotesContext.Provider value={{state, dispatch}}>
            {children}
        </NotesContext.Provider>
    );
}
export { NotesContext, NotesProvider};