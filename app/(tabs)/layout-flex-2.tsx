import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { StyleSheet, View } from "react-native";

export default function TabFourTwoScreen() {
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
        <ThemedText type="title">Layout Flexbox 2</ThemedText>
      </ThemedView>
      <ThemedText>Tìm hiểu về layout-flexbox trong React Native</ThemedText>

      <ThemedText>Layout Column</ThemedText>
      <View style={styles.viewflexCol}>
        <View style={styles.viewflexRow}>
          <View style={[styles.bg1, styles.box]}>1</View>
          <View style={[styles.bg2, styles.box]}>2</View>
          <View style={[styles.bg3, styles.box]}>3</View>
        </View>

        <View style={styles.viewflexCol}>
          <View style={styles.viewflexRow}>
            <View style={[styles.bg4, styles.box]}>4</View>
            <View style={styles.viewflexCol}>
              <View style={[styles.bg1, styles.box]}>1</View>
              <View style={[styles.bg2, styles.box]}>2</View>
            </View>
          </View>
        </View>

        <View style={styles.viewflexRow}>
          <View style={[styles.bg1, styles.box]}>1</View>
          <View style={[styles.bg2, styles.box]}>2</View>
          <View style={[styles.bg3, styles.box]}>3</View>
        </View>
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
    flex: 1,
    minHeight: 200,
    flexDirection: "column",
    gap: 2,
  },
  viewflexRow: {
    display: "flex",
    minHeight: 100,
    flexDirection: "row",
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
    flex: 2,
  },
  bg2: {
    backgroundColor: "#F97A00",
    flex: 2,
  },
  bg3: {
    backgroundColor: "#FED16A",
    flex: 2,
  },
  bg4: {
    backgroundColor: "#FFF4A4",
    flex: 2,
  },
});
