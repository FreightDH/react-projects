import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Loader, PostService, useFetching } from 'shared';
import { Post } from 'widgets';

const PostPage = (): ReactElement => {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [fetchPostById, isPostLoading] = useFetching(async (id: number) => {
    const res = await PostService.getById(id);
    setPost(res.data);
  });

  useEffect(() => {
    fetchPostById(+params.id!);
  }, [params.id]);

  return <>{isPostLoading || !post ? <Loader /> : <Post post={post} />}</>;
};

export default PostPage;
