import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


export function Alunos({nome}){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                { nome }
            </Text>
            <TouchableOpacity 
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        -
                    </Text>
                </TouchableOpacity>
        </View>
    )
}