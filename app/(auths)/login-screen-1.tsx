import Button from "@/components/Button";
import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function TabLogin1Screen() {
  const login = () => {
    console.log("login");
    router.push("/(auths)/login-screen-2");
  };

  const signup = () => {
    console.log("signup");
  };

  return (
    <>
      <View style={styles.loginScreen}>
        <View style={[styles.viewflexCol, styles.center, styles.gap10]}>
          <Image
            source={require("@/assets/images/rocket.png")}
            style={styles.image}
          ></Image>
          <Text style={styles.titleLogin}>Instamobile</Text>
          <Text style={styles.subtitleLogin}>
            Use this codebase to start a new Firebase mobile app in minutes.
          </Text>
        </View>
        <View style={[styles.viewflexCol, styles.center, styles.gap20]}>
          <Button
            buttonTextStyle={styles.loginText}
            customStyle={[styles.buttonCustom, styles.loginBtn]}
            label="Login"
            key={"login"}
            onPress={login}
          ></Button>
          <Button
            buttonTextStyle={styles.signupText}
            customStyle={[styles.buttonCustom, styles.signupBtn]}
            label="Sign Up"
            key={"signup"}
            onPress={signup}
          ></Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#00CAFF",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  viewflexCol: {
    display: "flex",
    height: 200,
    flexDirection: "column",
    gap: 2,
  },
  viewflexRow: {
    display: "flex",
    height: 50,
    flexDirection: "row",
    gap: 2,
  },
  viewflexColRev: {
    display: "flex",
    height: 200,
    flexDirection: "column-reverse",
    gap: 2,
  },
  viewflexRowRev: {
    display: "flex",
    height: 50,
    flexDirection: "row-reverse",
    gap: 2,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  gap10: {
    gap: 10,
  },
  gap20: {
    gap: 20,
  },
  box: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: "8px",
    alignItems: "center",
    justifyContent: "center",
  },
  loginScreen: {
    backgroundColor: "black",
    height: "100%",
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "center",
  },
  image: {
    height: 100,
    width: 100,
  },
  titleLogin: {
    color: "#5C46CC",
    fontSize: "2rem",
    fontWeight: 700,
  },
  subtitleLogin: {
    color: "gray",
    fontSize: "1rem",
    textAlign: "center",
  },
  buttonCustom: {
    borderRadius: 25,
    height: 50,
    width: "85%",
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: "#5C46CC",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    backgroundColor: "#5C46CC",
    fontSize: 16,
    fontWeight: 700,
  },
  loginText: {
    color: "black",
  },
  signupBtn: {
    backgroundColor: "black",
    fontSize: 16,
    fontWeight: 700,
  },
  signupText: {
    color: "#5C46CC",
  },
});
