declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

type Task = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
