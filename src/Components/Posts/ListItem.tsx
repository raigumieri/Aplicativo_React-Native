import { Post } from "@/types";
import { faEye, faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ListItemProps = {
  post: Post;
  onPress: () => void;
};

const ListItem = ({ post, onPress }: ListItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>

        <Text style={styles.titulo}>{post.title}</Text>

        <View style={styles.reacao}>
          <View style={styles.iconeGrupo}> 
            <FontAwesomeIcon icon={faHeart} color="red" />
            <Text style={styles.reacaoTexto}>{post.reactions.likes}</Text>
          </View>

          <View style={styles.iconeGrupo}>
            <FontAwesomeIcon icon={faHeartBroken} color="#FF66CC" />
            <Text style={styles.reacaoTexto}>{post.reactions.dislikes}</Text>
          </View>
          
          <View style={styles.iconeGrupo}> 
            <FontAwesomeIcon icon={faEye} color="#00FF7F" />
            <Text style={styles.reacaoTexto}>{post.views}</Text>
          </View>
        </View>

      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5539CC",
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#5539CC",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00FFFF",
    marginBottom: 6,
  },
  reacao: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 4,
  },
  iconeGrupo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  reacaoTexto: {
    color: "#FFFF00",
    fontWeight: "bold",
    marginLeft: 4,
    fontSize: 14,
  },
});

export default ListItem;
