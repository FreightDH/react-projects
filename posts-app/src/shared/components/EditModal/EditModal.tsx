import { ChangeEvent, FC, MouseEvent, ReactElement, useState } from 'react';
import cl from './EditModal.module.scss';

interface EditModalProps {
  post: Post;
  setEditVisible: (isOpen: boolean) => void;
  editPost: (editedPost: Post) => void;
}

const EditModal: FC<EditModalProps> = ({ post, setEditVisible, editPost }): ReactElement => {
  const [newTitle, setNewTitle] = useState(post.title);
  const [newBody, setNewBody] = useState(post.body);
  const modalClasses = [cl.edit];

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setValue: (value: string) => void
  ) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleClose = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setEditVisible(false);
  };

  const handleUpdate = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    editPost({ ...post, title: newTitle, body: newBody });
    setEditVisible(false);
  };

  return (
    <div className={modalClasses.join(' ')}>
      <div className={cl.edit__body}>
        <div className={cl.edit__content}>
          <h3 className={cl.edit__title}>Edit post</h3>
          <div className={cl.edit__divider}></div>
          <form action="#" className={cl.edit__form}>
            <div className={cl.form__item}>
              <label className={cl.form__label}>Title</label>
              <input
                type="text"
                className={cl.form__input}
                value={newTitle}
                onChange={(event) => handleChange(event, setNewTitle)}
              />
            </div>
            <div className={cl.form__item}>
              <label className={cl.form__label}>Text</label>
              <textarea
                rows={7}
                className={cl.form__input}
                value={newBody}
                onChange={(event) => handleChange(event, setNewBody)}
              ></textarea>
            </div>
            <div className={cl.form__buttons}>
              <button className={cl.form__button} onClick={handleUpdate}>
                Update
              </button>
              <button className={`${cl.form__button} ${cl.close}`} onClick={handleClose}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
