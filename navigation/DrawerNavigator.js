import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import DogScreen from "../screens/DogScreen";
import CatScreen from "../screens/CatScreen";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home1" component={TabNavigator} />
            <Drawer.Screen name="DOG" component={DogScreen} />
            <Drawer.Screen name="CAT" component={CatScreen} />
            <Drawer.Screen name="Home" component={HomeScreen} />
           
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;