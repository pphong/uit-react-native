import Button from "@/components/Button"
import { useNavigation } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

export default function Param1Screen() {
    const navigation = useNavigation<any>()
    const handleParam2 = () => {
        navigation.navigate("param-2", {username: 'PPhong'})
    }
    return (
        <>
            <View>
                <Text>
                    Trang chủ: param-1
                </Text>

                <Button
                    onPress={handleParam2}
                >
                    Vào trang 2
                </Button>

            </View>
        </>
    )
}

const styles = StyleSheet.create({})