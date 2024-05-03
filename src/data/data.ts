import axios from "axios";
import { Users } from "../utils/types";

export async function fetchUsers(): Promise<Users[]> {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    const fetchedUsers = data.data;
    return fetchedUsers;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchPosts(
  pageNumber: number,
  pageSize: number,
  userId: number | null,
  searchQuery: string | null,
  totalPosts: number
) {
  let url = `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${pageSize}`;
  if (userId) {
    url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  }
  if (searchQuery) {
    url = `https://jsonplaceholder.typicode.com/posts?q=${searchQuery}`;
  }

  const totalPages = Math.ceil(totalPosts / pageSize);
  //si la division del total de posts entre el tamanio de pagina es inexacta,
  //significa que aun quedan posts para una pagina mas
  //const postsOnFinalPage = totalPosts % pageSize;
  //numero total de posts que sobran en la ultima pagina
  try {
    const data = await axios.get(url);
    //intente usar _per_page segun su docu pero al parecer no funciona
    //igual probe con postman
    const fetchedPosts = data.data;
    console.log(fetchedPosts);
    return {fetchedPosts, totalPages};
  } catch (error) {
    console.log(error);
  }
}

export async function fetchPostById(id: number | null) {
  try {
    if (id !== null) {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      const fetchedComments = data.data;
      return fetchedComments;
    }
  } catch (error) {
    console.log(error);
  }
}
