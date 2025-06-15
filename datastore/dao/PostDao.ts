import type { Post } from "../../types/types";

export interface PostDao {
	getPosts(): Post[] | undefined | void;
	getPost(id: string): Post;
	createPost(post: Post): void;
}
