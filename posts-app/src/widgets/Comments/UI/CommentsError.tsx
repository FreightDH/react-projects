import { ReactElement } from 'react';
import cl from '../Comments.module.scss';

const CommentsError = (): ReactElement => {
  return (
    <div className={cl.comments}>
      <h2 className={cl.comments__title}>Comments:</h2>
      <p>An error occurred while uploading comments! Try again later.</p>
    </div>
  );
};

export default CommentsError;
