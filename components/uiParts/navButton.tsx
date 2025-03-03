import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { faList, faCheckDouble, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@/context/themeContext'
import { createStyles } from '@/styles/mainStyles'


export default function NavButton() {
  const [theme, setTheme] = useTheme()
  const styles = createStyles(theme.themeColor)
  return (
    <>
        <TouchableOpacity style={[{width: "40%", alignItems: "center" }]}>
            <Text style={[styles.navBtnIcon]}><FontAwesomeIcon icon={faList} /></Text>
        </TouchableOpacity>
        <TouchableOpacity style={[{width: "40%", alignItems: "center" }]}>
            <Text style={[styles.navBtnIcon]}><FontAwesomeIcon icon={faCheckDouble} /></Text>
        </TouchableOpacity>
    </>
  )
}
