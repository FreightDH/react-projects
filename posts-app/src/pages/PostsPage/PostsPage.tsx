import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PostList } from 'widgets';
import { Pagination, PostForm } from 'features';
import { LoaderCircle, PostService, useCurrentPage, useFetching } from 'shared';

import cl from './PostsPage.module.scss';

const PostsPage = (): ReactElement => {
  const params = useParams();
  const [posts, setPosts] = useState<PostData[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useCurrentPage();
  const [postsPerPage] = useState(10);
  const [fetchPosts, isPostsLoading] = useFetching(async (currentPage: number, itemsPerPage: number) => {
    const res = await PostService.getAll(currentPage, itemsPerPage);
    setPosts(res.data);
    setTotalItems(res.headers['x-total-count']);
  });

  const [editVisible, setEditVisible] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [postToEdit, setPostToEdit] = useState<PostData | null>(null);

  const addPost = async (title: string, body: string) => {
    const userId = 19042003;
    const newPost = await PostService.add(userId, title, body);

    setPosts([...posts, newPost]);
    setTotalItems(newPost.id);
  };

  const setEdit = (post: PostData) => {
    setPostToEdit(post);
    setEditVisible(true);
  };

  const editPost = async (editedPost: PostData) => {
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
    fetchPosts(currentPage, postsPerPage);
  }, [currentPage, postsPerPage, params]);

  return (
    <>
      {isPostsLoading || !posts ? (
        <LoaderCircle />
      ) : (
        <main className={cl.page}>
          <div className="page__container">
            <div className={cl.page__body}>
              <PostList
                posts={posts}
                setAddVisible={setAddVisible}
                setEdit={setEdit}
                deletePost={deletePost}
              />
              <Pagination
                totalItems={totalItems}
                currentPage={currentPage}
                itemsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </main>
      )}

      {editVisible ? (
        <PostForm mode="edit" post={postToEdit!} setVisible={setEditVisible} editPost={editPost} />
      ) : (
        <></>
      )}

      {addVisible ? <PostForm mode="add" setVisible={setAddVisible} addPost={addPost} /> : <></>}
    </>
  );
};

export default PostsPage;
