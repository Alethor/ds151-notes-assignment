import React, {useContext} from 'react';
import {Text, StyleSheet, ScrollView, TouchableHighlight, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { NotesContext } from '../context/NotesContext';

const HomeScreen = ({navigation}) => {
	const context = useContext(NotesContext);
	var lista;

	function mostraList(){
		lista = context.state;
		console.log(lista);
		navigation.navigate("NewNote")
	}

	return(
        <View>
            <View>
                <TouchableHighlight underlayColor="#308ff0" style={styles.buttons} onPress={() => {mostraList()}}>
                    <Text styles={styles.text}>Adicionar Nova Nota</Text>
                </TouchableHighlight>
            </View>
					<FlatList
						data={context.state}
						keyExtractor={item => item.title}
						renderItem={(item) => {
							return(
									<View>
										<Text>{item.title}</Text>
										<Text>{item.content}</Text>
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
        flexDirection: "row",
    
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
				
      },
      text:{
				marginLeft: 3,
        color: "black",
				textAlign: "center",
      },
});

export default HomeScreen;