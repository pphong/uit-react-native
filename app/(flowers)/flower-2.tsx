import { flowerList } from "@/constants/FlowerList";
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

export default function Flower2Screen({ route }: any) {
  const navigation = useNavigation<any>();
  const { type } = route?.params || {};

  const filteredFlowerList = flowerList.filter((x) => x.maloai === type.maloai);

  const openFlowerDetail = (item: any) => {
    item.type = type;
    navigation.navigate("flower-3", { item });
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
      <TouchableOpacity
        style={styles.card}
        onPress={() => openFlowerDetail(item)}
      >
        <View style={styles.card}>
          <Text style={styles.name}>Tên hoa: {item.tenhoa}</Text>
          <Image source={thumbnail} style={styles.image} resizeMode="contain" />
          <Text style={styles.price}>Đơn giá: {item.giaban}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.name}>Mã hoa: {type.mahoa}</Text>
        <Text style={styles.name}>Loại hoa: {type.tenloai}</Text>
        <FlatList
          data={filteredFlowerList}
          renderItem={renderItem}
          keyExtractor={(item) => item.mahoa}
          numColumns={2}
          contentContainerStyle={styles.list}
        />
      </View>
    </>
  );
}

const { width } = Dimensions.get("window");
const cardWidth = (width - 48) / 2;

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
  },
  image: {
    width: "100%",
    height: 100,
  },
  name: {
    marginTop: 6,
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
  link: {
    color: "blue",
  },
});
