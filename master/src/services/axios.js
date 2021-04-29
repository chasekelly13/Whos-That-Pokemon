//>> src/services/axios.js

// import axios from "axios";

// const axiosAPI = axios.create({
// 	baseURL: "https://pokeapi.co/api/v2/pokemon/"
// });

// const apiRequest = (method, url, request) => {
// 	const headers = {
// 		authorization: ""
// 	};
// 	return axiosAPI({
// 		method,
// 		url,
// 		data: request,
// 		headers
// 	}).then(res => {
// 		return Promise.resolve(res.data);
// 	})
// 	.catch(err => {
// 		return Promise.reject(err);
// 	});
// };

// const get = (url, request) => apiRequest("get",url,request);

// //Don't need these requests, but can leave them commented out incase I need them later
// const deleteRequest = (url, request) =>  apiRequest("delete", url, request);

// const post = (url, request) => apiRequest("post", url, request);

// const put = (url, request) => apiRequest("put", url, request);

// const patch = (url, request) =>  apiRequest("patch", url, request);

// const API ={
// 	get,
// //Same thing here. Don't need, but can leave commented out for boiler plate code
// 	delete: deleteRequest,
// 	post,
// 	put,
// 	patch
// };

// export default API;
