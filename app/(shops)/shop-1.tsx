import { IconSymbol } from "@/components/ui/IconSymbol";
import { IMAGES } from "@/constants/Assets";
import { Image } from "expo-image";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PRODUCTS = [
  {
    id: "1",
    name: "iPhone 16 Pro Max",
    price: 1199,
    image: IMAGES.iphone,
  },
  {
    id: "2",
    name: "Lenovo Laptop",
    price: 749,
    image: IMAGES.lenovoLap,
  },
  {
    id: "3",
    name: "Mac Book Pro 15",
    price: 1799,
    image: IMAGES.mac15,
  },
  {
    id: "4",
    name: "Samsung Phone",
    price: 1299,
    image: IMAGES.samphone,
  },
  {
    id: "5",
    name: "Logitech Mouse",
    price: 99,
    image: IMAGES.logiMouse,
  },
  {
    id: "6",
    name: "Logitech Headset",
    price: 199,
    image: IMAGES.logiHeadset,
  },
];

export default function Shop1Screen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (img: any) => {
    setSelectedImage(img);
    setModalVisible(true);
  };

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => openImage(item.image)}
      >
        <IconSymbol
          size={18}
          color="white"
          name="cart.badge.plus"
          style={styles.cart}
        />
        <Image source={item.image} style={styles.image} resizeMode="contain" />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={PRODUCTS}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.list}
        />

        <Modal visible={modalVisible} transparent={false} animationType="fade">
          <TouchableOpacity
            style={styles.modalContainer}
            onPress={() => setModalVisible(false)}
          >
            <Image
              source={selectedImage}
              style={styles.fullImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Modal>
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
  cart: {
    backgroundColor: 'black',
    width: 32,
    height: 32,
    padding: 6,
    position: 'absolute',
    left: 6,
    borderWidth: 1,
    borderRadius: 50
  }
});
