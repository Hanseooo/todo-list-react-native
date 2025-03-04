import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@/context/themeContext'
import { createStyles } from '@/styles/mainStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'

type TodoProps = {
    text: string,
    index: number,
    modifyTask: (index:number, modification:string, text?:string) => void
}

export default function Todo({text, index, modifyTask} : TodoProps) {
    const [theme, setTheme] = useTheme()
    const [newText, setNewText] = useState('')
    const styles = createStyles(theme.themeColor,)

    const handleNewText = (text:string) => setNewText(text)

  return (
    <View style={styles.todoContainer}>
        <View style = {styles.checkBoxContainer}>
            <TouchableOpacity style = {styles.checkBox}></TouchableOpacity>
        </View>
        <Text style={[styles.defaultText, {wordWrap:"break-word", width: "75%"}]}>
            {text}
        </Text>
        <View style={{flexDirection: 'row', gap: 18, paddingHorizontal: 12}}>
        <TouchableOpacity onPress={() =>modifyTask(index, 'edit')}>
            <FontAwesomeIcon icon={faPencil} style ={styles.iconColor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {modifyTask(index, 'delete')}}>
            <FontAwesomeIcon icon={faTrash} style ={styles.iconColor} />
        </TouchableOpacity>
        </View>
    </View>
  )
}

