import { View, Text, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./style";

export default function CardProduto({
  idDoProduto,
  urlImagemDoProduto,
  nomeDoProduto,
  descricaoDoProduto,
  tratarCliqueBotao,
  tratarCliqueCard,
}) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressableCardContainer}
        onPress={() => tratarCliqueCard(idDoProduto)}
      >
        <Image
          style={styles.image}
          source={{
            uri: urlImagemDoProduto,
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.nomeProduto}>{nomeDoProduto}</Text>
          <Text numberOfLines={1} style={styles.descricao}>
            {descricaoDoProduto}
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={styles.iconContainer}
        hitSlop={20}
        onPress={() => tratarCliqueBotao(idDoProduto, nomeDoProduto)}
      >
        <AntDesign style={styles.icon} name="plus" size={32} color="black" />
      </Pressable>
    </View>
  );
}
