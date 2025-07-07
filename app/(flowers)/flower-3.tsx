import { Image } from "expo-image";
import { Link, useNavigation } from "expo-router";
import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function Flower3Screen({ route }: any) {
  const { item } = route?.params || {};

  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate("flower-2", { type: item.type });
  };

  let thumbnail = "";
    switch (item.type.maloai) {
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
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={thumbnail} style={styles.image} resizeMode="contain" />
          <Text style={styles.name}>Tên loại hoa: {item.tenhoa}</Text>
          <Text style={styles.name}>Mã hoa: {item.mahoa}</Text>
          <Text style={styles.price}>Đơn giá: {item.giaban}</Text>
          <Text style={styles.name}>Mô tả: {item.mota}</Text>

          <Text style={styles.link}>
            <Link href="/(flowers)/flower-1">Về trang các loại hoa</Link>
          </Text>
          <Text style={styles.link} onPress={goBack}>
            Trở về
          </Text>
        </View>
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
    height: "auto"
  },
  image: {
    width: "100%",
    height: 250,
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
