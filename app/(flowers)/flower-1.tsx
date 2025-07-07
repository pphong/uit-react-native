import { flowerType } from "@/constants/FlowerList";
import { Image } from "expo-image";
import { useNavigation } from "expo-router";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const flowerTypes = flowerType;

export default function Flower1Screen() {
  const navigation = useNavigation<any>();

  const openType = (type: any) => {
    navigation.navigate("flower-2", { type });
  };

  const renderItem = ({ item }: any) => {
    let thumbnail = "";
    switch (item.maloai) {
      case "Hoa-Cuc":
        thumbnail = require("@/assets/images/flowers/daisy.png");
        break;
      case "Hoa-Cuoi":
        thumbnail = require("@/assets/images/flowers/hoa-cuoi.jpg");
        break;
      case "Hoa-Hong":
        thumbnail = require("@/assets/images/flowers/hoa-hong.jpg");
        break;
      case "Hoa-Xuan":
        thumbnail = require("@/assets/images/flowers/hoa-xuan.jpg");
        break;
      default:
        break;
    }

    return (
      <View>
        <Text style={styles.name}>{item.tenloai}</Text>
        <TouchableOpacity
          style={styles.card}
          onPress={() => openType(item)}
        >
          <Image source={thumbnail} style={styles.image} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.listTitle}>Danh mục hoa</Text>
        <FlatList
          data={flowerTypes}
          renderItem={renderItem}
          keyExtractor={(item) => item.maloai}
          numColumns={1}
          contentContainerStyle={styles.list}
        />
      </View>
    </>
  );
}

const { width } = Dimensions.get("window");
const cardWidth = (width - 48);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  list: {
    gap: 12,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    margin: 6,
    width: cardWidth,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    minHeight: 250
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    marginTop: 6,
    fontWeight: "500",
    textAlign: "center",
  },
  price: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  fullImage: {
    width: "100%",
    height: "100%",
  },
  listTitle: {
    color: "red",
    alignSelf: "center",
    fontWeight: 500,
  },
  typeTitle: {
    color: "black",
    alignSelf: "center",
    fontWeight: 500,
  },
});
