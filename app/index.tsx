import { Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { createStyles } from '../styles/mainStyles'
import { useTheme } from "../context/themeContext";
import { useMemo, useReducer, useState } from "react";
import Header from "../components/ui/header";
import Navigation from "../components/ui/navigation";
import Todo from "@/components/ui/todo";
import { TextInput } from "react-native-gesture-handler";
import ActionModal from "@/components/ui/actionModal";

const ACTIONS = {
  ADD_TODO: 'add-todo',
  REMOVE_TODO: 'remove-todo',
  EDIT_TODO: 'edit-todo',
  COMPLETED_TODO: 'completed-todo',
}
const reducer = (state:Todo[], action: Action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.payload]
    case ACTIONS.REMOVE_TODO:
      return state.filter(todo => todo.index !== action.payload)
      .map((todo, index) => ({ ...todo, index }))
    case ACTIONS.EDIT_TODO:
      return state.map(todo => todo.index === action.payload.index ? action.payload : todo)
    case ACTIONS.COMPLETED_TODO: {
      return state.map(todo => todo.index === action.payload.index ? action.payload.isCompleted = true : todo)
    }
    default: 
      return state
  }
}


type Action = {
  type: string,
  payload?: any
}

type Todo = {
  index: number,
  text: string,
  isCompleted: boolean
}

const initialTodo: Todo[] = []

export default function Index() {

  const [theme, setTheme] = useTheme()
  const [state, dispatch] = useReducer(reducer, initialTodo)
  const [modalVisible, setModalVisibility] = useState(true)
  const styles = createStyles(theme.themeColor)
  const windowHeight = useWindowDimensions().height

  const handleModalVisibility = (visibility:boolean) => {
    setModalVisibility(visibility)
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style = {[styles.mainContainer, {justifyContent: "space-between"}]}>
          <Header modalVisible={modalVisible} handleModalVisibility={handleModalVisibility} />
          <View style={styles.contentContainer}>
            <ActionModal modalVisible={modalVisible} handleModalVisibility={handleModalVisibility} />
            <ScrollView contentContainerStyle={{height: windowHeight*0.7}}>
              {
                state.map((todo, index) => (
                  !todo.isCompleted && <Todo text = {todo.text} key = {todo.index} />
                ))
              }
            </ScrollView>
            <Navigation />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}



