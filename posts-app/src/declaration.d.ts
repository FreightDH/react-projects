declare module '*.module.scss' {
  const styles: { [key: string]: string };
  export default styles;
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Commentary = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
