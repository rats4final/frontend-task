import axios from "axios";
import { useEffect, useState } from "react";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Users = {
  id: number;
  name: string;
};

type Comments = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export default function App() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [postId, setPostId] = useState<number | null>(null);

  const [users, setUsers] = useState<Users[]>([]);

  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [postComments, setPostComments] = useState<Comments[]>([]);

  async function fetchUsers() {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const fetchedUsers = data.data;
      setUsers(fetchedUsers);
    } catch (error) {
      console.log(error);
    }
  }

  const totalPosts = 100;
  //aca sabemos cuantos posts hay pero para una app real habria que usar otra
  //implementacion

  async function fetchPostById(id:number| null) {
    try {
      if (id !== null) {
        const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        const fetchedComments = data.data;
        setPostComments(fetchedComments);
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchPosts(
    pageNumber: number,
    pageSize: number,
    userId: number | null,
    searchQuery: string | null,
  ) {
    let url = `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${pageSize}`;
    if (userId) {
      url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    }
    if (searchQuery) {
      url = `https://jsonplaceholder.typicode.com/posts?q=${searchQuery}`
    }

    setTotalPages(Math.ceil(totalPosts / pageSize));
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
      setPosts(fetchedPosts);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(pageNumber);

  useEffect(() => {
    const windowPath = window.location.pathname;
    const validatedPath = /^\/\d+$/.test(windowPath);

    if (validatedPath) {
      const postIdInUrl = windowPath.split('/')[1];
      console.log(postIdInUrl);
      setPostId(parseInt(postIdInUrl))
      fetchPostById(postId);
    }


    fetchUsers();
    fetchPosts(pageNumber, pageSize, selectedUser, searchQuery);
  }, [pageNumber, pageSize, selectedUser, searchQuery, postId]);
  return (
    <main>
      <section>
        <div>
          <div>
            <label htmlFor="searchField">Search</label>
            <input disabled={!!selectedUser} type="search" id="searchField" onChange={(event) => {
              setSearchQuery(event.target.value);
              setPageNumber(1)
            }}/>
          </div>
          <div>
            <label htmlFor="usersList">Filter By User</label>
            <select
              disabled={!!searchQuery}
              id="usersList"
              onChange={(event) => {
                const selectedUserId = parseInt(event.target.value);
                setSelectedUser(selectedUserId);
                setPageNumber(1);
              }}
            >
              <option value="">
                Select a User
              </option>
              {users.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item) => (
              <tr key={item.id} onClick={() => {
                const newUrl = `${window.location.origin}/${item.id}`;
                window.history.pushState(item.id, "", newUrl);
                setPostId(item.id)
                fetchPostById(item.id)
              }}>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>{item.userId}</td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </section>
      {! selectedUser && ! searchQuery ? (
        <div>
          <button
            onClick={() => {
              if (pageNumber > 1) {
                setPageNumber(pageNumber - 1);
              }
            }}
          >
            Previous
          </button>
          <button
            disabled={pageNumber === totalPages}
            onClick={() => {
              setPageNumber(pageNumber + 1);
            }}
          >
            Next
          </button>
          <div>You are on page: {pageNumber}</div>
          <div>
            <label htmlFor="pageSize">Per Page</label>
            <input
              onChange={(event) => {
                event.preventDefault();
                setPageSize(parseInt(event.target.value));
              }}
              value={pageSize}
              type="number"
              id="pageSize"
              min={1}
            />
          </div>
        </div>
      ) : (
        ""
      )}
      <section>
        {postComments ? (
        <div>
          {postComments.map((item) => (
            <div key={item.id}>
              <div>{item.name}</div>
              <div>{item.email}</div>
              <div>{item.body}</div>
            </div>
          ))}
        </div>): null}
      </section>
    </main>
  );
}
