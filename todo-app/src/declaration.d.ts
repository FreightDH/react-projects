declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

type Task = {
  id: number;
  name: string;
  description: string;
  completed: boolean;
};
