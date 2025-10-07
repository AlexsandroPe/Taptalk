import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
 import { Ionicons } from '@expo/vector-icons';
import { Phone, MessageSquare } from 'lucide-react-native';

export default function ContactProfile({ route }) {

  const {name, role, image, callFunc, smsFunc ,email, phoneNumber}= route.params;
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imagem} />
      <Text style={styles.nome}>{name}</Text>
      <Text style={styles.cargo}>{role}</Text>
      <Text style={styles.email}>{email}</Text>

      <View style={styles.icones}>
            <View style={{ padding: 6, alignItems: "center", flexDirection: 'row', gap: 15, flex: 1, justifyContent: "center"}}>
              <View style={{borderRadius: 50, padding: 8, backgroundColor: "#4e92ff"}}>
                <Phone size={25} onPress={() => callFunc(phoneNumber)}  fill="#4e92ff" color="#fff" />
              </View>
              <View style={{borderRadius: 50, padding: 8, backgroundColor: "#ccd0d0ff"}}>
                <MessageSquare onPress={smsFunc} size={25}/>
              </View>
            </View>
      </View> 
     </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  titulo: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    marginBottom: 20,
  },
  imagem: {
    width: 100,
    height: 150,
    marginBottom: 15,
  },
  nome: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    color: '#222',
  },
  cargo: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#666',
  },
  email: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#888',
    marginBottom: 30,
  },
  icones: {
    flexDirection: 'row',
    gap: 20,
  },
  botao: {
    backgroundColor: '#f4f4f4',
    borderRadius: 50,
    padding: 15,
  },
});