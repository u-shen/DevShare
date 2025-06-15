import type { Post } from "../types/types.js";
import type { PostDao } from "./dao/PostDao.ts";

const seed = [
  {
    id: crypto.randomUUID(),
    title: "first title added lorem",
    url: "https://google.com",
    postedAt: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    title: "first title added lorem",
    url: "https://google.com",
    postedAt: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    title: "first title added lorem",
    url: "https://google.com",
    postedAt: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    title: "first title added lorem",
    url: "https://google.com",
    postedAt: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    title: "first title added lorem",
    url: "https://google.com",
    postedAt: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    title: "second title learn js",
    url: "https://basetitle.com/name",
    postedAt: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    title: "third title learn more js",
    url: "https://github.com/u-shen",
    postedAt: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    title: "second title learn js",
    url: "https://basetitle.com/name",
    postedAt: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    title: "second title learn js",
    url: "https://basetitle.com/name",
    postedAt: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    title: "second title learn js",
    url: "https://basetitle.com/name",
    postedAt: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    title: "second title learn js",
    url: "https://basetitle.com/name",
    postedAt: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    title: "second title learn js",
    url: "https://basetitle.com/name",
    postedAt: Date.now(),
  },
];
class Database implements PostDao {
  private posts: Post[] = [...seed];

  createPost(post: Post): void {
    this.posts.push(post);
  }
  getPost(id: string): Post {
    return this.posts[0];
  }
  getPosts(): void | Post[] | undefined {
    return this.posts;
  }
}

export const db = new Database();
