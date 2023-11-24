import axios from 'axios';

class PostService {
  static getAll = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
  };
}

export default PostService;
