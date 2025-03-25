export type post = {
  id: number;
  title: string;
  thumbnailUrl: string;
  categories: string[];
  content: string;
  createdAt: string;
}

export type PostsType = {
  posts: post[];
};

export type ApiResponse = {
  message: string;
  post: post;
};