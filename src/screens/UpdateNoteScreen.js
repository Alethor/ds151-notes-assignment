import React, {useContext, useState} from 'react';
import {Text, StyleSheet, TouchableHighlight, View, TextInput} from 'react-native';
import { NotesContext } from '../context/NotesContext';


const UpdateNoteScreen = ({navigation, route}) => {
    const notesContext = useContext(NotesContext);
    const [title, setTitle] = useState(route.params.title);
    const [content, setContent] = useState(route.params.content);

    function saveTitle(t){
        setTitle(t);
    }
    function saveContent(t){
        setContent(t);
    }
    function montaPayload(){
        notesContext.dispatch({type:"update", payload:{title:title, content:content}});
        navigation.navigate("Home");
    }

    return(
        <View styles={styles.container}>
           <TextInput 
                autoCapitalize="none" 
                autoCorrect={false} 
                placeholder="Title" 
                value={title}
                style={styles.textInput} 
                onChangeText={newText => saveTitle(newText)}>
            </TextInput>

            <TextInput 
                autoCapitalize="none" 
                autoCorrect={false} 
                placeholder="Content"
                value={content}
                style={styles.textInputContent} 
                onChangeText={newText => saveContent(newText)}>
            </TextInput>
            <View>
                <TouchableHighlight underlayColor="#308ff0" style={styles.buttons} onPress={() => {montaPayload()}}>
                  <View style={styles.viewHighlight}>
                    <Text styles={styles.text}>Salvar</Text>
                  </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'lightgray',
        margin: 10,
    },
    textInput:{
        fontSize: 18,
        marginLeft: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        width: 390,
        padding: 10,
        
        
    },
    textInputContent:{
        fontSize: 18,
        marginLeft: 10,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        width: 390,
        height: 100,
        padding: 10,
    },
    buttons:{
        borderWidth: 1,
        borderRadius: 15,
        width: 200,
        height: 30,
        margin: 5,
        backgroundColor: "white",
        marginLeft: 110,
        marginTop: 20,
		
      },
      text:{
        color: "black",
        padding: 30,
        marginLeft: 20,
        textAlign: 'center',
      },
      viewHighlight:{
        alignItems: "center",
      },
});

export default UpdateNoteScreen;