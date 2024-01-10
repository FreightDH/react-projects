import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PostDetails } from 'entities/Post';
import { Comments } from 'widgets';
import { Pagination } from 'features';
import { PostService, useCurrentPage, useFetching } from 'shared';

import cl from './PostDetailsPage.module.scss';

const PostDetailsPage = (): ReactElement => {
  const params = useParams();
  const [post, setPost] = useState<PostData | null>(null);
  const [fetchPostById, isPostLoading, postError] = useFetching(async (id: number) => {
    const res = await PostService.getById(id);
    setPost(res.data);
  });

  const [comments, setComments] = useState<CommentData[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useCurrentPage();
  const [commentsPerPage] = useState(1);
  const [fetchPostCommentsById, isCommentsLoading, commentsError] = useFetching(
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
    <main className={cl.page}>
      <div className="page__container">
        <div className={cl.page__body}>
          <PostDetails post={post} isLoading={isPostLoading} error={postError} />
          <Comments comments={comments} isLoading={isCommentsLoading} error={commentsError} />
          <Pagination
            totalItems={totalItems}
            currentPage={currentPage}
            itemsPerPage={commentsPerPage}
            setCurrentPage={setCurrentPage}
            style={{ alignSelf: 'flex-start' }}
          />
        </div>
      </div>
    </main>
  );
};

export default PostDetailsPage;
