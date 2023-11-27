import { FC, ReactElement } from 'react';
import { profileComment } from 'assets';
import cl from './CommentsItem.module.scss';

interface CommentsItemProps {
  comment: Commentary;
  index: number;
}

const CommentsItem: FC<CommentsItemProps> = ({ comment }): ReactElement => {
  return (
    <li className={cl.comment}>
      <div className={cl.comment__author}>
        <div className={cl.author__icon}>
          <img src={profileComment} alt="profile-icon" />
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

export default CommentsItem;
