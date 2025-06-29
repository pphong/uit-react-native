import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { StyleSheet, View } from "react-native";

export default function TabThreeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFE3BB', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="b.square.fill"
          style={styles.headerImage}
        />

      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">StyleSheet Learning</ThemedText>
      </ThemedView>
      <ThemedText>Tìm hiểu về thẻ Style sheet trong React Native</ThemedText>

      <View style={styles.viewflex}>
        <View style={styles.bg1}/>
        <View style={styles.bg2}/>
        <View style={styles.bg3}/>
        <View style={styles.bg4}/>
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
  viewflex: {
    display: 'flex',
    height: 500, 
    flexDirection: 'column',
  },
  bg1: {
    backgroundColor: "#5A827E",
    flex: 1.5,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: "8px"
  },
  bg2: {
    backgroundColor: "#84AE92",
    flex: 1,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: "8px"
  },
  bg3: {
    backgroundColor: "#B9D4AA",
    flex: 0.5,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: "8px"
  },
  bg4: {
    backgroundColor: "#FAFFCA",
    flex: 0.25,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: "8px"
  },
});
