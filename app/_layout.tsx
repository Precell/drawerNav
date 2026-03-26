import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import  FontAwesome   from "@expo/vector-icons/FontAwesome";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{
        headerStyle:{
          backgroundColor:'papayawhip'
        },
        headerTintColor:'#11b1ebcb',
        drawerStyle:{
          backgroundColor:'papayawhip'
        },
        drawerActiveTintColor:'#11b1ebcb',
        drawerInactiveTintColor:'black',
      }}>
        <Drawer.Screen name="dashboard" options={{ title: "Dashboard",
          drawerLabel: "Dashboard",
          drawerIcon: ({color, size}) => <FontAwesome name="dashboard" color={color} size={size} />,

        }} />
        <Drawer.Screen name="settings" options={{ title: "Settings",
          drawerLabel: "Settings",
          drawerIcon: ({color, size}) => <FontAwesome name="cog" color={color} size={size} />,
         }} />
        <Drawer.Screen name="index" options={{ title: "Index",
          drawerLabel: "Home",
          drawerIcon: ({color, size}) => <FontAwesome name="home" color={color} size={size} />,
        }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
