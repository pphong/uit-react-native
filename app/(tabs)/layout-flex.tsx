import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { StyleSheet, View } from "react-native";

export default function TabFourScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#4300FF", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#00CAFF"
          name="square.grid.2x2"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Layout Flexbox</ThemedText>
      </ThemedView>
      <ThemedText>Tìm hiểu về layout-flexbox trong React Native</ThemedText>

      <ThemedText>Layout Column</ThemedText>
      <View style={styles.viewflexCol}>
        <View style={[styles.bg1, styles.box]}>1</View>
        <View style={[styles.bg2, styles.box]}>2</View>
        <View style={[styles.bg3, styles.box]}>3</View>
        <View style={[styles.bg4, styles.box]}>4</View>
      </View>

      <ThemedText>Layout Row</ThemedText>
      <View style={styles.viewflexRow}>
        <View style={[styles.bg1, styles.box]}>1</View>
        <View style={[styles.bg2, styles.box]}>2</View>
        <View style={[styles.bg3, styles.box]}>3</View>
        <View style={[styles.bg4, styles.box]}>4</View>
      </View>

      <ThemedText>Layout Column-reverse</ThemedText>
      <View style={styles.viewflexColRev}>
        <View style={[styles.bg1, styles.box]}>1</View>
        <View style={[styles.bg2, styles.box]}>2</View>
        <View style={[styles.bg3, styles.box]}>3</View>
        <View style={[styles.bg4, styles.box]}>4</View>
      </View>

      <ThemedText>Layout Row-reverse</ThemedText>
      <View style={styles.viewflexRowRev}>
        <View style={[styles.bg1, styles.box]}>1</View>
        <View style={[styles.bg2, styles.box]}>2</View>
        <View style={[styles.bg3, styles.box]}>3</View>
        <View style={[styles.bg4, styles.box]}>4</View>
      </View>
    </ParallaxScrollView>
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
  box: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: "8px",
    alignItems: "center",
    justifyContent: "center",
  },
  bg1: {
    backgroundColor: "#16610E",
    flex: 1.5,
  },
  bg2: {
    backgroundColor: "#F97A00",
    flex: 1,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: "8px",
  },
  bg3: {
    backgroundColor: "#FED16A",
    flex: 0.5,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: "8px",
  },
  bg4: {
    backgroundColor: "#FFF4A4",
    flex: 0.25,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: "8px",
  },
});
