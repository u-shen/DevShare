export interface Post {
  id: string;
  title: string;
  url: string;
  postedAt: number;
  liked?: boolean;
}
