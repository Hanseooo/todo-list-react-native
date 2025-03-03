import { useTheme } from "@/context/themeContext";
import { useFonts } from "expo-font";
import { Platform, StyleSheet, useWindowDimensions } from "react-native";



const colors = {
    light: {
        primary: "rgb(225, 225, 225)",
        secondary: "rgb(205, 205, 205)",
        tertiary: "rgb(240, 240, 240)",
    },
    dark: {
        primary: "rgb(35, 35, 35)",
        secondary: "rgb(50, 50, 50)",
        tertiary: "rgb(24, 24, 24)",
    },
    gold: {
        primary: "#rgb(255, 185, 0)",
    },
    blue: {
        primary: "#rgb(20, 52, 164)",
    }
}

export const createStyles = (themeColor:string) => {

    const windowWidth : number = useWindowDimensions().width;
    const windowHeight : number = useWindowDimensions().height;
    // console.log(windowWidth, windowHeight);

    const [fontsLoaded] = useFonts({
        Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    })


const themeDecision = (variant:string, invert:boolean) => {
    switch(variant) {
        case 'primary':
            return themeColor === 'light' && !invert ? colors.light.primary : colors.dark.primary
        case 'secondary':
            return themeColor === 'light' && !invert ? colors.light.secondary : colors.dark.secondary
        case 'tertiary':
            return themeColor === 'light' && !invert ? colors.dark.tertiary : colors.light.tertiary
        default: throw new Error('invalid color variant')
    }
}


return StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        height: windowHeight,
        boxSizing: 'border-box',
    },
    mainContainer: {
        backgroundColor: themeDecision('primary', false),
        flex: 1,
        height: "100%",
        paddingTop: 12,
        boxSizing: 'border-box',
    },
    contentContainer: {
        backgroundColor: themeDecision('secondary',false),
        maxHeight: "80%",
        borderStartStartRadius: "36px",
        borderStartEndRadius: "36px",
        justifyContent: "space-between",
        paddingVertical: 16,
        padding: 12,
    },
    todoContainer: {
        flexDirection: "row",
        borderWidth: 2,
        padding: 12,
        borderRadius: 12,
        borderColor: themeDecision('tertiary', false),
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 4
    },
    checkBox: {
        height: 24,
        width: 24,
        borderColor: themeDecision('tertiary', false),
        borderWidth: 1,
        marginRight: 12,
        borderRadius: "20%"
    },
    checkBoxContainer: {
        borderRightWidth: 1,
        borderRightColor: themeDecision('tertiary', false),
        marginRight: 12,
    },
    navBtnContainer: {
        flexDirection: "row",
        gap: 20,
        padding: 8,
        borderWidth: 2,
        borderRadius:18,
        width: "40%",
        justifyContent:"space-evenly",
        borderColor: themeDecision('tertiary', false),
    },
    navBtnIcon: {
        color: themeDecision("tertiary", false)
    },
    mainText: {
        fontSize: 24,
        fontWeight: 700,
        color: themeDecision('tertiary', false),
        fontFamily: "Poppins"
    },
    defaultText: {
        fontSize: 16,
        color: themeDecision('tertiary', false),
        fontFamily: "Poppins"
    },
    buttonText: {
        fontSize: 16,
        color: themeDecision('primary', false),
        fontFamily: "Poppins"
    },
    button: {
        backgroundColor: themeDecision('tertiary', false),
        justifyContent: "center",
        padding: 12,
        paddingHorizontal: 18,
        borderRadius: 10,
    },
    iconColor: {
        color: themeDecision('tertiary', false)
    },
    modalContent: {
        margin: "auto",
        backgroundColor: themeDecision('primary', false),
        padding: 12,
        borderRadius: 12,
        height: "auto",
        width: 300,
        alignItems: "center",
        borderWidth: 2,
        borderColor: themeDecision('tertiary', true),
        boxShadow: "0px 2px 4px rgba(44, 44, 44, 0.75) ",
        gap :8
    },
    inputText: {
        fontSize: 16,
        backgroundColor: themeDecision('tertiary', true),
        borderRadius: 8,
        borderWidth: 1,
        padding: 8,
        fontFamily: "Poppins",
    }
})

}

