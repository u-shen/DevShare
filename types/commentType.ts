export interface Comment {
  id: string;
  userId: string;
  postId: string;
  comment: string;
  commentedAt: number;
  liked?: boolean;
}
