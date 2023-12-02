import { FC, ReactElement } from 'react';
import cl from '../PostList.module.scss';

interface PostListEmptyProps {
  setAddVisible: (isVisible: boolean) => void;
}

const PostListEmpty: FC<PostListEmptyProps> = ({ setAddVisible }): ReactElement => {
  return (
    <>
      <h1 className={cl.posts__title} style={{ textAlign: 'center' }}>
        Posts not found!
      </h1>
      <button className={`${cl.posts__add} ${cl.first}`} onClick={() => setAddVisible(true)}>
        Add first post
      </button>
    </>
  );
};

export default PostListEmpty;
