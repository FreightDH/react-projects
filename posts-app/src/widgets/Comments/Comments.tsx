import { FC, ReactElement } from 'react';

import CommentsError from './UI/CommentsError';
import CommentsLoader from './UI/CommentsLoader';
import { Comment } from 'entities/Comment';

import cl from './Comments.module.scss';

interface CommentsProps {
  comments: CommentData[] | null;
  isLoading: boolean;
  error: string;
}

const Comments: FC<CommentsProps> = ({ comments, isLoading, error }): ReactElement => {
  if (error) return <CommentsError />;
  if (isLoading || !comments) return <CommentsLoader />;

  return (
    <div className={cl.comments}>
      <h2 className={cl.comments__title}>Comments:</h2>
      <ul className={cl.comments__list}>
        {comments.map((comment, index) => (
          <Comment comment={comment} index={index + 1} key={comment.id} />
        ))}
      </ul>
    </div>
  );
};

export default Comments;
