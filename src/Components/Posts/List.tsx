import { Post } from "@/types";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "./ListItem";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/navigation";


type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Detalhes">;

type ListProps = {
  posts: Post[];
};

const List = ({ posts }: ListProps) => {
  const navigation = useNavigation<NavigationProps>();

  const handlePress = (id: number) => {
    navigation.navigate('Detalhes', {id}); // Local onde o ID do post e enviado
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => ( 
        <ListItem post={item} onPress={() => handlePress(item.id)} />)}

        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A2E",
  },
  listContent: {
    paddingVertical: 8,
  },
});

export default List;
