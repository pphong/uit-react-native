import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function TabAuthScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#FFE3BB", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="d.square"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Auth Screen</ThemedText>
      </ThemedView>
      <ThemedText>Lập trình màn hình Auth trong React Native</ThemedText>

      <View style={styles.viewflexCol}>
        <Link href="/login-screen-1">
          <ThemedText type="link">Login screen 1</ThemedText>
        </Link>
        <Link href="/login-screen-2">
          <ThemedText type="link">Login screen 2</ThemedText>
        </Link>
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
    minHeight: 100,
    flexDirection: "row",
    gap: 2,
  },
  viewflexCol: {
    display: "flex",
    minHeight: 100,
    flexDirection: "column",
    gap: 2,
  },
});
