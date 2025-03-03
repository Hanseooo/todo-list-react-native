import { useTheme } from "@/context/themeContext"
import { createStyles } from "@/styles/mainStyles"
import { Text, TouchableOpacity, View } from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import NavButton from "../uiParts/navButton"


export default function Navigation() {
    const [theme] = useTheme()
    const styles = createStyles(theme.themeColor)
    return(
        <View style={{flexDirection: "row",justifyContent: "center", alignItems: "center", gap: 12, paddingTop: 4}}>
            <View style={styles.navBtnContainer}>
                <NavButton />
            </View>
        </View>
    )
}