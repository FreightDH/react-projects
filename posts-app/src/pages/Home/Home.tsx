import { ReactElement, useEffect, useState } from 'react';
import { PostService, useFetching } from 'shared';
import { PostList } from 'widgets';
import cl from './Home.module.scss';

const Home = (): ReactElement => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [fetchData] = useFetching(async () => {
    const data = await PostService.getAll();
    setPosts(data);
  });

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
        <div className={cl.page__body}>{<PostList posts={posts} deletePost={deletePost} />}</div>
      </div>
    </>
  );
};

export default Home;
