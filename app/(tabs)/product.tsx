import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function TabProdScreen() {
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
        <ThemedText type="title">Product Screen</ThemedText>
      </ThemedView>
      <ThemedText>Lập trình màn hình Product trong React Native</ThemedText>

      <View style={styles.viewflexCol}>
        <Link href="/(products)/product-1">
          <ThemedText type="link">Product 1</ThemedText>
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
