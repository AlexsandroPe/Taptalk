import { useNavigation } from "@react-navigation/native"
import { MessageSquare, Phone } from "lucide-react-native"
import {Image, Text, TouchableOpacity, View} from "react-native"
import * as Linking from 'expo-linking';

const images = { 
    eye: require('../../assets/images/eye.jpg'),
    stone: require('../../assets/images/stone.jpeg'),
}

export default function Contact({name, role, onPress, image, email, phoneNumber}) {

    const navigation = useNavigation();
    const callTo = (number) => {Linking.openURL("tel:"+number)}

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Contato', {name, role, image: images[image], callFunc: callTo,  smsFunc: onPress, email, phoneNumber})
        }} 
        style={{flexDirection:'row', padding: 8, alignItems: 'center', gap: 15}}
        >
            <View>
                <Image style={{height: 60, width: 60, borderRadius: 50}} source={images[image]} />
            </View>
            <View>
                <Text style={{fontSize: 18, fontFamily: 'Montserrat_400Regular'}}>{name}</Text>
                <Text  style={{fontSize: 15, fontFamily: 'Montserrat_400Regular'}}>{role}</Text>
            </View>

            <View style={{ padding: 6, alignItems: "center", flexDirection: 'row', gap: 15, flex: 1, justifyContent: "flex-end"}}>
                <View style={{borderRadius: 50, padding: 8, backgroundColor: "#4e92ff"}}>
                    <Phone size={25} onPress={() => callTo(phoneNumber)}  fill="#4e92ff" color="#fff" />
                </View>
                <View style={{borderRadius: 50, padding: 8, backgroundColor: "#ccd0d0ff"}}>
                    <MessageSquare onPress={onPress} size={25}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}