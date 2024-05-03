import { useEffect, useState } from "react";
import { Post, Users, Comments } from "./utils/types";
import { fetchPostById, fetchPosts, fetchUsers } from "./data/data";
import UsersDropdown from "./components/UsersDropdown";
import SearchField from "./components/SearchField";
import PostsTable from "./components/PostsTable";
import PaginationControls from "./components/PaginationControls";
import CommentsList from "./components/CommentsList";

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postId, setPostId] = useState<number | null>(null);
  const [postComments, setPostComments] = useState<Comments[]>([]);

  const [users, setUsers] = useState<Users[]>([]);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  const totalPosts = 100;
  //aca sabemos cuantos posts hay pero para algoreal habria que usar otra implementacion

  function handleUserChange(userId: number) {
    setSelectedUser(userId);
    setPageNumber(1);
  }

  function handlePostClicked(item: Post) {
    const newUrl = `${window.location.origin}/${item.id}`;
    window.history.pushState(item.id, "", newUrl);
    setPostId(item.id);
    fetchPostById(item.id);
  }

  function handlePrevButtonClick(pageNumber: number) {
    setPageNumber(pageNumber - 1);
  }

  function handleNextButtonClick(pageNumber: number) {
    setPageNumber(pageNumber + 1);
  }

  function handlePageSizeChange(pageSize: number) {
    setPageSize(pageSize);
  }

  useEffect(() => {
    const windowPath = window.location.pathname;
    const validatedPath = /^\/\d+$/.test(windowPath);

    if (validatedPath) {
      const postIdInUrl = windowPath.split("/")[1];
      console.log(postIdInUrl);
      setPostId(parseInt(postIdInUrl));
      fetchPostById(postId).then((fetchedPostById) => {
        setPostComments(fetchedPostById);
      });
    }

    fetchUsers().then((fetchedUsers) => {
      setUsers(fetchedUsers);
    });

    fetchPosts(
      pageNumber,
      pageSize,
      selectedUser,
      searchQuery,
      totalPosts
    ).then((data) => {
      setPosts(data?.fetchedPosts);
      setTotalPages(data?.totalPages ?? 0);
    });
  }, [pageNumber, pageSize, selectedUser, searchQuery, postId, totalPages]);
  return (
    <main className="p-10 flex flex-col gap-4">
      <section className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <SearchField
            disabled={!!selectedUser}
            onChange={(event) => {
              setSearchQuery(event.target.value);
              setPageNumber(1);
            }}
          />
          <UsersDropdown
            users={users}
            disabled={!!searchQuery}
            onSelectUser={handleUserChange}
          />
        </div>
        {!selectedUser && !searchQuery ? (
          <PaginationControls
            pageNumber={pageNumber}
            totalPages={totalPages}
            onPrevButtonClick={handlePrevButtonClick}
            onNextButtonClick={handleNextButtonClick}
            onPageSizeChange={handlePageSizeChange}
            defaultPageSize={pageSize}
          />
        ) : (
          ""
        )}
        <PostsTable posts={posts} onPostClicked={handlePostClicked} />
      </section>
      <section>
        {postComments ? <CommentsList postComments={postComments} /> : null}
      </section>
    </main>
  );
}
