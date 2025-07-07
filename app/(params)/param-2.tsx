import { StyleSheet, Text, View } from "react-native";

export default function Param2Screen({ route }: any) {
  const { username } = route?.params || {};

  return (
    <>
      <View>
        <Text>Xin chào:</Text>
        {username}
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
