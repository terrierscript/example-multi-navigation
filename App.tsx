import React, { useRef } from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { useNavigation } from "@react-navigation/native"
import { NavigationContainer } from "@react-navigation/native"

const Stack = createStackNavigator()

const Base1 = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>base1</Text>
      <Button
        onPress={(e) => {
          navigation.navigate("child")
        }}
        title="open child"
      ></Button>
    </View>
  )
}

const NaviParent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="parent" component={Base1} />
      <Stack.Screen
        name="child"
        component={() => {
          return <NaviChild />
        }}
      />
    </Stack.Navigator>
  )
}

const NaviChild = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="child parent" component={Base1} />
        <Stack.Screen
          name="child"
          component={() => {
            return <NaviChild />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer independent={true}>
        <NaviParent />
      </NavigationContainer>
      <NavigationContainer independent={true}>
        <NaviParent />
      </NavigationContainer>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  modal: {
    color: "red",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
