import { Text, TouchableOpacity, View } from "react-native";
import { createStyles } from '@/styles/mainStyles'
import { useTheme } from "@/context/themeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useThemeColor } from "@/app-example/hooks/useThemeColor";

type HeaderProps = {
    modalVisible: boolean,
    handleModalVisibility: (visible: boolean) => void
}

export default function Header({modalVisible, handleModalVisibility} : HeaderProps) {

      const [theme, setTheme] = useTheme()
      const styles = createStyles(theme.themeColor)

    const getDate = () => {
    const today = new Date();
    const dd = String(today.getDate());
    const mm = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ][today.getMonth()];
      
    return `${mm} ${dd}`;
    }

    const changeTheme = () => {
        theme.themeColor === 'light' ? setTheme({themeColor: 'dark'}) : setTheme({themeColor: 'light'});
    }

    return(
        <View>
        <Text style = {[styles.defaultText, {textAlign: "center", fontWeight: "600", marginTop: 12}]}>
            {getDate()}
        </Text>
        <TouchableOpacity style={{alignItems: "flex-end", marginRight: "5%"}} onPress={changeTheme}>
            {theme.themeColor === 'light' ? <FontAwesomeIcon icon={faMoon} size="lg" style={{color: "#323232",}} />
            : <FontAwesomeIcon icon={faSun} size="lg" style={{color: "#cdcdcd",}} />}
        </TouchableOpacity>
        <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 24, marginTop: 24, marginBottom: 12}}>
            <Text style={styles.mainText}>Tasks</Text>
            <TouchableOpacity style={[styles.button]}>
                <Text onPress={() => handleModalVisibility(!modalVisible)} style={[styles.buttonText]}>New Task</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
}