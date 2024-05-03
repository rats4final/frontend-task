export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Users = {
  id: number;
  name: string;
};

export type Comments = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}