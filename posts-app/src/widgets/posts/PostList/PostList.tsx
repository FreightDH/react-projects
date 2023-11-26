import { FC, ReactElement } from 'react';
import { PostItem } from 'widgets';
import cl from './PostList.module.scss';

interface PostListProps {
  posts: Post[];
  setAddVisible: (isVisible: boolean) => void;
  setEdit: (post: Post) => void;
  deletePost: (postId: number) => void;
}

const PostList: FC<PostListProps> = ({ posts, setAddVisible, setEdit, deletePost }): ReactElement => {
  if (!posts) {
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
  }

  return (
    <div className={cl.posts}>
      <div className={cl.posts__wrapper}>
        <h1 className={cl.posts__title}>React Posts App</h1>
        <button className={cl.posts__add} onClick={() => setAddVisible(true)}>
          Add post
        </button>
      </div>
      <ul className={cl.posts__list}>
        <li className={cl.list__header}>
          <div className={cl.header__number}>#</div>
          <div className={cl.header__title}>Title</div>
          <div className={cl.header__body}>Text</div>
        </li>
        {posts.map((post) => (
          <PostItem post={post} setEdit={setEdit} deletePost={deletePost} key={post.id} />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
