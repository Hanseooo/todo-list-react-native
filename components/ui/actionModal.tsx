import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { useTheme } from '@/context/themeContext'
import { createStyles } from '@/styles/mainStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

type ActionModalProps = {
    modalVisible: boolean,
    handleModalVisibility: (visibility : boolean) => void,
    handleAddTask?: (text : any) => void,
    type: string,
    handleNewText?: (text : string) => void
}

const randomPlaceHolders = () => {
    const placeHolders = ["buy groceries", "wash the car", "go to the dentist", "sell pc parts",
        "study for the exams", "do the laundry", "study at the cafe", "play valorant", "visit grandma's house",
        "go to the gym", "eat a healthy meal", "go to the movies"
    ]
    return placeHolders[Math.floor(Math.random() * placeHolders.length)]
}

export default function ActionModal({type, handleNewText, handleAddTask, modalVisible, handleModalVisibility} : ActionModalProps) {
    const [theme, setTheme] = useTheme()
    const styles = createStyles(theme.themeColor)
    const [text, setText] = useState('')
    
    let displayType:string

    const modalFunction = () => {
        switch (type) {
            case 'add':
                if (handleAddTask === undefined) throw new Error('handleAddTask is undefined')
                handleAddTask!({text: text, isCompleted: false})
                break;
            case 'edit':
                if (handleNewText === undefined) throw new Error('handleNewText is undefined')
                handleNewText!(text)
                break;
            default:
                throw new Error("incorrect type or function props are undefined")
        }
    }


  return (
    <Modal  animationType="slide" visible={modalVisible} transparent  onRequestClose={() => handleModalVisibility(!modalVisible)} >
        <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => handleModalVisibility(!modalVisible)} style={{alignSelf: "flex-end"}}>
                <FontAwesomeIcon style ={styles.iconColor} icon={faXmark} />
            </TouchableOpacity>
            <Text style={styles.defaultText}>Add Task</Text>
            <TextInput value={text} onChangeText={setText} placeholderTextColor={theme.themeColor !== ' light' ? "rgba(50, 50, 50, 0.75)" : "rgba(220, 220, 200, 0.75)"} placeholder={randomPlaceHolders()} style={styles.inputText} />
            <TouchableOpacity onPress={() => {modalFunction(); setText(''); handleModalVisibility(false)}} style={[styles.button, {paddingHorizontal:16, paddingVertical: 8}]}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({})