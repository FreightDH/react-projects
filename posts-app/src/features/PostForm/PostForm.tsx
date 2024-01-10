import { ChangeEvent, FC, MouseEvent, ReactElement, useEffect, useState } from 'react';
import { useScrollBlock } from 'shared';
import cl from './PostForm.module.scss';

interface PostFormProps {
  mode: 'add' | 'edit';
  post?: PostData;
  setVisible: (isVisible: boolean) => void;
  addPost?: (title: string, body: string) => void;
  editPost?: (editedPost: PostData) => void;
}

const PostForm: FC<PostFormProps> = ({ mode, post, setVisible, addPost, editPost }): ReactElement => {
  const [blockScroll, allowScroll] = useScrollBlock();
  const [newTitle, setNewTitle] = useState(post?.title || '');
  const [newBody, setNewBody] = useState(post?.body || '');

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setValue: (value: string) => void
  ) => {
    const { value } = event.target;
    setValue(value);
  };

  const handleClose = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    allowScroll();
    setVisible(false);
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    switch (mode) {
      case 'edit':
        editPost!({ ...post!, title: newTitle, body: newBody });
        break;

      case 'add':
        addPost!(newTitle, newBody);
        break;
    }

    allowScroll();
    setVisible(false);
  };

  useEffect(() => {
    blockScroll();
  }, []);

  return (
    <div className={cl.popup}>
      <div className={cl.popup__body}>
        <div className={cl.popup__content}>
          <h3 className={cl.popup__title}>{`${mode === 'edit' ? 'Edit' : 'Add'} post`}</h3>
          <div className={cl.popup__divider}></div>
          <form action="#" className={cl.popup__form}>
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
              <button className={cl.form__button} onClick={handleSubmit}>
                {`${mode === 'edit' ? 'Update' : 'Add'}`}
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

export default PostForm;
