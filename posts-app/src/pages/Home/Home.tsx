import { ReactElement, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Pagination } from 'features';
import { PostForm, PostList } from 'widgets';
import { Loader, PostService, usePagination } from 'shared';

const Home = (): ReactElement => {
  const [searchParams] = useSearchParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(() => {
    const page = searchParams.get('page');
    if (!page) return 1;
    return +page;
  });
  const [postsPerPage] = useState(10);
  const [data, totalItems, isPostsLoading] = usePagination(currentPage, postsPerPage);

  const [editVisible, setEditVisible] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [postToEdit, setPostToEdit] = useState<Post | null>(null);

  const addPost = async (title: string, body: string) => {
    const id = totalPosts + 1;
    const userId = 19042003;

    await PostService.add(userId, id, title, body);
    setPosts([...posts, { userId, id, title, body }]);
    setTotalPosts(id);
  };

  const setEdit = (post: Post) => {
    setPostToEdit(post);
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
    setTotalPosts(+totalItems);
  }, [data, totalItems]);

  return (
    <>
      {isPostsLoading || !posts ? (
        <Loader />
      ) : (
        <>
          <PostList posts={posts} setAddVisible={setAddVisible} setEdit={setEdit} deletePost={deletePost} />
          <Pagination
            totalItems={totalPosts}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
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

export default Home;
