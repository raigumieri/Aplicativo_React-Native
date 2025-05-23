import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTab from "./Home";
import Detalhes from "@/Screens/Detalhes";


const Stack = createNativeStackNavigator();

const Navegacao = () => {
  return(
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1A1A2E",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerTitleAlign: 'center',
    }}> 
      <Stack.Screen name="HomeTab" component={HomeTab} options={{title: "Home"}} />
      <Stack.Screen name="Detalhes" component={Detalhes} options={{title: "Detalhes da Postagem"}} />
    </Stack.Navigator>
  );
};

export default Navegacao;


