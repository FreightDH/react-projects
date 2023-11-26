import { ReactElement, useEffect, useState } from 'react';
import { EditModal, PostService, useFetching } from 'shared';
import { PostList } from 'widgets';
import cl from './Home.module.scss';

const Home = (): ReactElement => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [fetchData] = useFetching(async () => {
    const data = await PostService.getAll();
    setPosts(data);
  });
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editSelectedPost, setEditSelectedPost] = useState<Post | null>(null);

  const setEdit = (post: Post) => {
    setEditSelectedPost(post);
    setEditModalOpen(true);
  };

  const editPost = async (editedPost: Post) => {
    await PostService.edit(editedPost.id, editedPost.title, editedPost.body);
    setPosts(
      posts &&
        posts.map((post) => {
          if (post.id === editedPost.id) {
            post.title = editedPost.title;
            post.body = editedPost.body;
          }
          return post;
        })
    );
  };

  const deletePost = async (postId: number) => {
    await PostService.delete(postId);
    setPosts(posts && posts.filter((post) => post.id !== postId));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="page__container">
        <div className={cl.page__body}>
          <PostList posts={posts} deletePost={deletePost} setEdit={setEdit} />
          {editModalOpen ? (
            <EditModal
              post={editSelectedPost!}
              setEditModalOpen={setEditModalOpen}
              editPost={editPost}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
