import axios from 'axios';

export default {
  // Gets all produce
  getPosts: function() {
    return axios.get('/api/produce');
  },
  createPost: function(data) {
    return axios.post('/api/produce', data);
  },
  deletePost: function(id){
    return axios.delete('api/produce/' + id);
  },
  savePost: function(produceData) {
    return axios.post("/api/produce", produceData);
  },
  signup: function(data) {
    return axios.post('/api/users/signup', data);
  },
  login: function(data) {
    return axios.post('/api/users/login', data);
  },
  validateToken: function(t) {
    return axios.post('/api/users/validate', { token: t });
  },
  // // Gets the produce with the given id
  // getPosts: function(id) {
  //   return axios.get("/api/produce/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
