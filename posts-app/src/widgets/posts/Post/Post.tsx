import { FC, ReactElement } from 'react';
import { LoaderCircle } from 'shared';
import cl from './Post.module.scss';

interface PostProps {
  post: Post | null;
  isLoading: boolean;
  error: string;
}

const Post: FC<PostProps> = ({ post, isLoading, error }): ReactElement => {
  if (error) {
    return (
      <div className={cl.post}>
        <h1 className={cl.post__title}>An error occurred while uploading post! Try again later.</h1>
      </div>
    );
  }

  if (isLoading || !post) {
    return <LoaderCircle />;
  }

  return (
    <div className={cl.post}>
      <h1 className={cl.post__title}>{post!.title}</h1>
      <p className={cl.post__body}>{post!.body}</p>
    </div>
  );
};

export default Post;
