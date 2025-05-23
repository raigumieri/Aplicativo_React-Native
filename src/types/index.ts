type Reaction = {
    likes: number;
    dislikes: number
}

type Post = {    
    id: number;
    user: string;
    title: string;
    body: string;
    reactions: Reaction;
    views: number
    likes: number;
}

type PostResponse = {
    posts: Post[]
}

export {PostResponse, Post}