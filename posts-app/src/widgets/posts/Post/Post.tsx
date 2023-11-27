import { FC, ReactElement } from 'react';
import cl from './Post.module.scss';

interface PostProps {
  post: Post;
}

const Post: FC<PostProps> = ({ post }): ReactElement => {
  return (
    <div className={cl.post}>
      <h1 className={cl.post__title}>{post.title}</h1>
      <p className={cl.post__body}>{post.body}</p>
    </div>
  );
};

export default Post;
