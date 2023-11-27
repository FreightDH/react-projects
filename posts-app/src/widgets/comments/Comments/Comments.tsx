import { FC, ReactElement } from 'react';
import { LoaderDots } from 'shared';
import CommentsItem from '../CommentsItem/CommentsItem';
import cl from './Comments.module.scss';

interface CommentsProps {
  comments: Commentary[] | null;
  isLoading: boolean;
}

const Comments: FC<CommentsProps> = ({ comments, isLoading }): ReactElement => {
  if (isLoading || !comments) {
    return (
      <div className={cl.comments}>
        <h2 className={cl.comments__title}>Comments:</h2>
        <LoaderDots />
      </div>
    );
  }

  return (
    <div className={cl.comments}>
      <h2 className={cl.comments__title}>Comments:</h2>
      <ul className={cl.comments__list}>
        {comments.map((comment, index) => (
          <CommentsItem comment={comment} index={index + 1} key={comment.id} />
        ))}
      </ul>
    </div>
  );
};

export default Comments;
