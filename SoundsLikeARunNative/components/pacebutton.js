import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';

function PaceButton(props) {
    pace = props.data["Pace"]
    distance = props.data["Distance"]
    song_name = props.data["Name"]
    selected = props.data["Selected"]
    container_style = styles.container
    if(selected)
    {        
        container_style = styles.container_selected
    }
    return (                    
            <TouchableOpacity title="PaceButton" style={container_style}

            onPress={() => props.handleClick(props.index)}
            >
                <Text style={styles.text}>{song_name}</Text>
                <View style={styles.spacer}/>
                <Text style={styles.text}>{pace.toFixed(2)}</Text>
                <View style={styles.spacer}/>
                <Text style={styles.text}>{distance.toFixed(2)}</Text>
            </TouchableOpacity>                    
    )
}
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        alignItems: 'stretch',
        justifyContent: 'center',            
        width: Dimensions.get('window').width,
        flexDirection: 'row',    
      },
      container_selected: {
        flex: 1,
        padding: 10,
        backgroundColor: 'green',
        alignItems: 'stretch',
        justifyContent: 'center',            
        width: Dimensions.get('window').width,
        flexDirection: 'row',    
      },
    spacer:{
        width: 50,
    },
    text:{
        fontSize: 32, 
    }

  });
  
  export default PaceButton;