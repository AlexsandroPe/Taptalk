import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../../screens/Home'
import ContactProfile from "../../screens/Contato";
const { Navigator, Screen} = createNativeStackNavigator();
function StackRoutes(){
    return (
        <Navigator>
            <Screen  name='Home' component={Home} options={{headerShown: false}} />
            <Screen  name='Contato' component={ContactProfile} options={{headerShown: false}}/>
        </Navigator>
    )
}

export default StackRoutes;
