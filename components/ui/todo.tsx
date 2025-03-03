import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/context/themeContext'
import { createStyles } from '@/styles/mainStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'

type TodoProps = {
    text: string,

}

export default function Todo({text} : TodoProps) {
    const [theme, setTheme] = useTheme()
    const styles = createStyles(theme.themeColor,)

  return (
    <View style={styles.todoContainer}>
        <View style = {styles.checkBoxContainer}>
            <TouchableOpacity style = {styles.checkBox}></TouchableOpacity>
        </View>
        <Text style={[styles.defaultText, {wordWrap:"break-word", width: "75%"}]}>
            {text}
        </Text>
        <View style={{flexDirection: 'row', gap: 18, paddingHorizontal: 12}}>
        <TouchableOpacity>
            <FontAwesomeIcon icon={faPencil} style ={styles.iconColor} />
        </TouchableOpacity>
        <TouchableOpacity >
            <FontAwesomeIcon icon={faTrash} style ={styles.iconColor} />
        </TouchableOpacity>
        </View>
    </View>
  )
}

