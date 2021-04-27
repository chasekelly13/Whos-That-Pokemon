// //api.js
// import axios from "axios";

// const axiosAPI = axios.create({
//   baseURL: "https://pokeapi.co/api/v2/pokemon/",
// });

// const apiRequest = (method, url, request) => {
//   const headers = {
//     aurthorization: "",
//   };
//   return axiosAPI({
//     method,
//     url,
//     data: request,
//     headers,
//   })
//     .then((result) => {
//       return Promise.resolve(result.data);
//     })
//     .catch((error) => {
//       return Promise.reject(error);
//     });
// };

// const getData = () => {
//   axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
//     console.log(response);
//   });
// };

function getPokemon() {
  axios({
    method: "get",
    url: "https://pokeapi.co/api/v2/pokemon/1",
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

//document.getElementById("get").addEventListener("click", getPokemon);
