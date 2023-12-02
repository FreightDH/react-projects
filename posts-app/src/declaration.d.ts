declare module '*.module.scss' {
  const styles: { [key: string]: string };
  export default styles;
}

type PostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type CommentData = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
