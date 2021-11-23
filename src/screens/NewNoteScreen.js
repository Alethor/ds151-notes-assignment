import React, {useContext} from 'react';
import {Text, StyleSheet, ScrollView, TouchableHighlight, View, TextInput} from 'react-native';
import { contextType } from 'react-native/Libraries/Image/ImageBackground';
import { NotesContext } from '../context/NotesContext';


const NewNoteScreen = ({navigation}) => {
    var title;
    var content;
    const notesContext = useContext(NotesContext);

    function saveTitle(t){
        title = t;
    }
    function saveContent(t){
        content = t;
    }
    function montaPayload(){
        notesContext.dispatch({type:"new", title:{title}, content:{content}});
    }

    return(
        <View styles={styles.container}>
           <TextInput 
                autoCapitalize="none" 
                autoCorrect={false} 
                placeholder="Title" 
                style={styles.textInput} 
                onChangeText={newText => saveTitle(newText)}>
            </TextInput>

            <TextInput 
                autoCapitalize="none" 
                autoCorrect={false} 
                placeholder="Content" 
                style={styles.textInputContent} 
                onChangeText={newText => saveContent(newText)}>
            </TextInput>
            <View>
                <TouchableHighlight underlayColor="#308ff0" style={styles.buttons} onPress={() => {montaPayload()}}>
                    <Text styles={styles.text}>Adicionar Nova Nota</Text>
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
});

export default NewNoteScreen;