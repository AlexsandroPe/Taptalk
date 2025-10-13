import { View, Text} from "react-native"
import * as SMS from 'expo-sms';
import Contact from "../../components/contact";
import useFont from "../../hooks/useFont";
function Home(){
    const fontLoaded = useFont();

    if(!fontLoaded) null;

    const sendSMS = async ()=> {
        const isAvailable = await SMS.isAvailableAsync();
        if (isAvailable) {
           const result = SMS.sendSMSAsync('+5511937359947', "Oii amigo, tudo bem? Testando um negócio aqui, é o alex");
        } else {
            alert('não foi possivel enviar a mensagem.');
        }
    }
    return (
        <View>
            <Text style={{fontFamily: "Montserrat_400Regular", fontSize: 20}}>Contatos</Text>
            <View>
                <Contact 
                    name='Dave John'
                    role='Diretor' 
                    font='Montserrat_400Regular' 
                    phoneNumber="+5511937359947" 
                    image='eye' 
                    email='davejohn@email.com' 
                    onPress={sendSMS}
                />

                <Contact 
                    name='Kassie E. Holmes' 
                    role='Recursos Humanos' 
                    image='eye' 
                    phoneNumber="+5511937359947" 
                    onPress={sendSMS} 
                    email="kassieholmes@email.com"
                />

                <Contact 
                    name='Roger V. Scott' 
                    role='Vendas' 
                    image='stone'
                    onPress={sendSMS} 
                    email="rogerscott@email.com" 
                    phoneNumber="+5511937359947"
                />
            </View>
        </View>
    )
}

export default Home; 
