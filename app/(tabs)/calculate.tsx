import Button from "@/components/Button";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { StyleSheet, View } from "react-native";

export default function TabFiveScreen() {
  const handleButtonPress = (label: string) => {
    console.log("Button press:", label);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#FFE3BB", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="c.square"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Calculator</ThemedText>
      </ThemedView>
      <ThemedText>Dụng cụ tính toán</ThemedText>

      {/* <View style={styles.viewflex}>
        <View style={styles.bg1}/>
        <View style={styles.bg2}/>
        <View style={styles.bg3}/>
        <View style={styles.bg4}/>
      </View> */}

      <View style={styles.viewflexRow}>
        {Array.from({ length: 10 }, (_, i) => (
          <Button
            key={i}
            label={i.toString()}
            onPress={handleButtonPress}
            customStyle={styles.numberBtn}
          ></Button>
        ))}
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#FFA673",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  viewflexRow: {
    display: "flex",
    height: 200,
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap"
  },
  box: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: "8px",
    alignItems: "center",
    justifyContent: "center",
  },
  bg1: {
    backgroundColor: "#5A827E",
    flex: 1.5,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: "8px",
    gap: 4,
  },
  bg2: {
    backgroundColor: "#84AE92",
    flex: 1,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: "8px",
  },
  bg3: {
    backgroundColor: "#B9D4AA",
    flex: 0.5,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: "8px",
  },
  bg4: {
    backgroundColor: "#FAFFCA",
    flex: 0.25,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: "8px",
  },
  numberBtn: {
    padding: 6,
    borderRadius: 8,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
