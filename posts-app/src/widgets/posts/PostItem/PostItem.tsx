import { FC, ReactElement } from 'react';
import { edit, remove } from 'assets';
import cl from './PostItem.module.scss';
import { useNavigate } from 'react-router-dom';

interface PostItemProps {
  post: Post;
  setEdit: (post: Post) => void;
  deletePost: (postId: number) => void;
}

const PostItem: FC<PostItemProps> = ({ post, setEdit, deletePost }): ReactElement => {
  const navigate = useNavigate();
  const postTitle = post.title.slice(0, 30);
  const postBody = `${post.body.slice(0, 90)}${post.body.length > 90 ? '...' : ''}`;

  return (
    <li className={cl.post} onClick={() => navigate(`/posts/${post.id}`)}>
      <div className={cl.post__number}>{post.id}</div>
      <div className={cl.post__title}>{postTitle}</div>
      <p className={cl.post__body}>{postBody}</p>
      <div className={cl.post__buttons} onClick={(event) => event.stopPropagation()}>
        <button className={cl.post__button} onClick={() => setEdit(post)}>
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
