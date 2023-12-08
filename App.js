import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";


import FeedScreen from "./screens/Feed";
import ProfileScreen from "./screens/Profile";
import MapScreen from "./screens/Map";
import OtpScreen from "./screens/OtpScreen";
import Article from "./screens/Article";
// import CustomIcon from "./components/Icons";

const Tab = createBottomTabNavigator();

function BottomTabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: { backgroundColor: "purple" },
      })}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "purple" },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
        drawerContentStyle: {backgroundColor:'purple'},
        drawerInactiveTintColor:'white',
        drawerActiveTintColor:'white',
        drawerActiveBackgroundColor:'#ba55d3'
      }}
    >
      <Drawer.Screen name="Feed" component={FeedScreen} options={{title:"Feed", headerTitle:''}} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: "purple" },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
      }}>
        <Stack.Screen
          name="Drawer"
          component={DrawerNav}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="OtpScreen" component={OtpScreen} options={{title:''}} />
        <Stack.Screen name="Map" component={MapScreen} options={{title:'Map'}} />
        {/* options={{presentation:'modal'}} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
