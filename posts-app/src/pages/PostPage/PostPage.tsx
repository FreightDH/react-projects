import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { LoaderCircle, PostService, useFetching } from 'shared';
import { Comments, Post } from 'widgets';

const PostPage = (): ReactElement => {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Commentary[]>([]);
  const [fetchPostById, isPostLoading] = useFetching(async (id: number) => {
    const res = await PostService.getById(id);
    setPost(res.data);
  });
  const [fetchPostCommentsById, isCommentsLoading] = useFetching(async (id: number) => {
    const res = await PostService.getCommentsById(id);
    setComments(res.data);
  });

  useEffect(() => {
    fetchPostById(+params.id!);
    fetchPostCommentsById(+params.id!);
  }, [params.id]);

  return (
    <>
      {isPostLoading || !post ? <LoaderCircle /> : <Post post={post} />}
      <Comments comments={comments} isLoading={isCommentsLoading} />
    </>
  );
};

export default PostPage;
