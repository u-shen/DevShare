export interface Post {
  id: string;
  title: string;
  url: string;
  postedAt: number;
  liked?: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  postId: string;
  comment: string;
  commentedAt: number;
  liked?: boolean;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

export interface Like {
  postId: string;
  userId: string;
}
