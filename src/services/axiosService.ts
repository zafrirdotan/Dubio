import axios from 'axios';

export const getDemoData = () => {
  axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
    const persons = res.data;
    console.log('persons:', persons);
  });
};
