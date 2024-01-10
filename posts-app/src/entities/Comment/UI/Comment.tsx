import { FC, ReactElement } from 'react';
import profile from '../assets/profile.svg';
import cl from './Comment.module.scss';

interface CommentProps {
  comment: CommentData;
  index: number;
}

const Comment: FC<CommentProps> = ({ comment }): ReactElement => {
  return (
    <li className={cl.comment}>
      <div className={cl.comment__author}>
        <div className={cl.author__icon}>
          <img src={profile} alt="profile-icon" />
        </div>
        <div className={cl.author__data}>
          <div className={cl.author__name}>{comment.name}</div>
          <div className={cl.author__email}>{comment.email}</div>
        </div>
      </div>
      <p className={cl.comment__text}>{comment.body}</p>
    </li>
  );
};

export default Comment;
