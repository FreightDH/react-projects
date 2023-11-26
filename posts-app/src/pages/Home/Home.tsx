import { ReactElement, useEffect, useState } from 'react';

import { EditModal, Loader, PostService, usePagination } from 'shared';
import { Pagination } from 'features';
import { PostList } from 'widgets';

import cl from './Home.module.scss';

const Home = (): ReactElement => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [data, totalPages, isPostsLoading] = usePagination(currentPage, postsPerPage);

  const [editVisible, setEditVisible] = useState(false);
  const [editSelectedPost, setEditSelectedPost] = useState<Post | null>(null);

  const setEdit = (post: Post) => {
    setEditSelectedPost(post);
    setEditVisible(true);
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
    setPosts(data);
  }, [data]);

  return (
    <>
      <div className="page__container">
        <div className={cl.page__body}>
          {isPostsLoading || !posts ? (
            <Loader />
          ) : (
            <PostList posts={posts} deletePost={deletePost} setEdit={setEdit} />
          )}

          <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />

          {editVisible ? (
            <EditModal post={editSelectedPost!} setEditVisible={setEditVisible} editPost={editPost} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
