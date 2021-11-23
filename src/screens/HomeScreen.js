import React, {useContext} from 'react';
import {Text, StyleSheet, TouchableOpacity, TouchableHighlight, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { NotesContext } from '../context/NotesContext';
import { Feather } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
	const context = useContext(NotesContext);

	return(
        <View>
            <View>
                <TouchableHighlight underlayColor="#308ff0" style={styles.buttons} onPress={() => {navigation.navigate("NewNote")}}>
                    <View style={styles.viewHighlight}>
                      <Text styles={styles.text}>Adicionar Nova Nota</Text>
                    </View>
                </TouchableHighlight>
            </View>
					<FlatList
						data={context.state}
						keyExtractor={item => item.title}
						renderItem={({item}) => {
							return(
								<View style={styles.containerView}>
									<TouchableOpacity style={styles.container} onPress={() => {navigation.navigate("UpdateNote", {title: item.title, content: item.content})}}>
                    <Text style={styles.textLabel}>Título:</Text>
										<Text style={styles.textContent}>{item.title}</Text>
                    <Text style={styles.textLabel}>Conteúdo:</Text>
										<Text style={styles.textContent}>{item.content}</Text>	
									</TouchableOpacity>
                  <TouchableHighlight underlayColor="red" style={styles.deleteButton} onPress={() => {context.dispatch({type:"delete", payload:{title: item.title, content: item.content}})}}>
                    <View style={styles.viewHighlight}>
                      <Feather name="trash-2" size={35} color="red" />
                    </View>
                  </TouchableHighlight>
								</View>
							)
						}}
					>
					</FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
      container:{
        flex: 1,
      },
      containerView:{
        flexDirection: "row",
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#e1e2e3',
        alignContent: "center",
        width: 390,
        height: 100,
        margin: 10,
        
      },
      buttons:{
        borderWidth: 1,
        borderRadius: 15,
        width: 200,
        height: 30,
        margin: 5,
        backgroundColor: "white",
		    marginLeft:110,
		    padding: 3,
        flexDirection: "column",
      },
      deleteButton:{
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "red",
        width: 50,
        height: 50,
        margin: 5,
      },
      text:{
		    marginLeft: 3,
        color: "black",
		    textAlign: "center",
        
      },
      textLabel:{
        fontWeight: "bold",
        fontSize: 15,    
        flex: 1,
      },
      textContent:{
        fontSize: 15,
        flex: 1,
      },
      viewHighlight:{
        alignItems: "center",
      },
      icons:{
        
      }
});

export default HomeScreen;