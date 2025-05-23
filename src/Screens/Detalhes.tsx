import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { dummyApi } from "@/api";
import { Post } from "@/types/index";
import { FlatList, Text, View, StyleSheet } from "react-native";

const Detalhes = () => {
    const route = useRoute();
    const {id} = route.params as {id: number};

    const [post, setPost] = useState<Post | any>(null); 
    const [comments, setComments] = useState<any[]>([]);

    const fetchPostDetails = async () => {
        const postResponse = await dummyApi.get(`/posts/${id}`);
        setPost(postResponse.data);

        const commentsResponse = await dummyApi.get(`/comments/post/${id}`);
        setComments(commentsResponse.data.comments);
    }

    useEffect(() => {
        fetchPostDetails();
    }, []);

    if (!post) 
        return <Text style={styles.loading}> Carregando </Text>;

    return(
        <FlatList
            data={comments}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={() => (
                <View style={styles.cabecalho}>
                    <Text style={styles.titulo}>{post.title}</Text>
                    <Text style={styles.body}>{post.body}</Text>
                    <Text style={styles.tags}>Tags: {post.tags?.join(", ")}</Text>
                    <Text style={styles.tituloComent}> Comentários: </Text>
                </View>
            )}
            renderItem={({ item }) => (
                <View style={styles.cardComent}>
                    <Text style={styles.username}>@{item.user.username}</Text>
                    <Text style={styles.bodyComent}>{item.body}</Text>
                    <Text style={styles.likes}>Likes: {item.likes}</Text>
                </View>
            )}
            contentContainerStyle = {styles.container}
        />
    )}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1A1A2E",
        paddingBottom: 20,
        flex: 1,
    },
    loading: {
        color: "#fff",
        textAlign: "center",
        marginTop: 40,
    },
    cabecalho: {
        padding: 16,
        backgroundColor: "#3D2C8D",
        marginBottom: 8,
        marginTop: 5,
        borderRadius: 5,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#00FFFF",
        marginBottom: 8,
    },
    body: {
        color: "#fff",
        fontSize: 16,
        textAlign: 'justify',
        marginBottom: 12,
    },
    tags: {
        fontStyle: "italic",
        color: "#FFFF00",
        marginVertical: 12,
    },
    tituloComent: {
        fontSize: 18,
        color: "#00FFFF",
        
        fontWeight: "bold",
    },
    cardComent: {
        backgroundColor: "#5539CC",
        padding: 14,
        marginHorizontal: 12,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    username: {
        fontWeight: "bold",
        color: "#00FFFF",
        marginBottom: 4,
    },
    bodyComent: {
        color: "#fff",
        fontSize: 15,
    },
    likes: {
        marginTop: 6,
        fontSize: 13,
        color: "#F4D03F",
        fontWeight: "bold",
    },
});

export default Detalhes;