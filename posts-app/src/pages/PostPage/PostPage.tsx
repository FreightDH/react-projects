import { Pagination } from 'features/index';
import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { LoaderCircle, PostService, useCurrentPage, useFetching } from 'shared';
import { Comments, Post } from 'widgets';

const PostPage = (): ReactElement => {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [fetchPostById, isPostLoading] = useFetching(async (id: number) => {
    const res = await PostService.getById(id);
    setPost(res.data);
  });

  const [comments, setComments] = useState<Commentary[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useCurrentPage();
  const [commentsPerPage] = useState(1);
  const [fetchPostCommentsById, isCommentsLoading] = useFetching(
    async (id: number, currentPage: number, commentsPerPage: number) => {
      const res = await PostService.getCommentsById(id, currentPage, commentsPerPage);
      setComments(res.data);
      setTotalItems(res.headers['x-total-count']);
    }
  );

  useEffect(() => {
    fetchPostById(+params.id!);
  }, [+params.id!]);

  useEffect(() => {
    fetchPostCommentsById(+params.id!, currentPage, commentsPerPage);
  }, [+params.id!, currentPage, commentsPerPage]);

  return (
    <>
      {isPostLoading || !post ? <LoaderCircle /> : <Post post={post} />}
      <Comments comments={comments} isLoading={isCommentsLoading} />
      <Pagination
        totalItems={totalItems}
        currentPage={currentPage}
        itemsPerPage={commentsPerPage}
        setCurrentPage={setCurrentPage}
        style={{ alignSelf: 'flex-start' }}
      />
    </>
  );
};

export default PostPage;
