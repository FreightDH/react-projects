import { FC, ReactElement } from 'react';
import { edit, remove } from 'assets';
import cl from './PostItem.module.scss';

interface PostItemProps {
  post: Post;
  number: number;
  editPost: (postId: number) => void;
  deletePost: (postId: number) => void;
}

const PostItem: FC<PostItemProps> = ({ post, number, editPost, deletePost }): ReactElement => {
  return (
    <li className={cl.post}>
      <div className={cl.post__number}>{number}</div>
      <div className={cl.post__title}>{post.title.slice(0, 30)}</div>
      <p className={cl.post__body}>{`${post.body.slice(0, 90)}...`}</p>
      <div className={cl.post__buttons}>
        <button className={cl.post__button} onClick={() => editPost(post.id)}>
          <img src={edit} alt="edit-icon" />
        </button>
        <button className={cl.post__button} onClick={() => deletePost(post.id)}>
          <img src={remove} alt="delete-icon" />
        </button>
      </div>
    </li>
  );
};

export default PostItem;
