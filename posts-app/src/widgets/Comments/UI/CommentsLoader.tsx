import { ReactElement } from 'react';
import { LoaderDots } from 'shared';
import cl from '../Comments.module.scss';

const CommentsLoader = (): ReactElement => {
  return (
    <div className={cl.comments}>
      <h2 className={cl.comments__title}>Comments:</h2>
      <LoaderDots />
    </div>
  );
};

export default CommentsLoader;
