import axios from 'axios';

class PostService {
  static getAll = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
  };

  static edit = async (postId: number, title: string, body: string) => {
    await axios.patch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      title,
      body,
    });
  };

  static delete = async (postId: number) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  };
}

export default PostService;
