import { Post } from "../utils/types";

type PostsTableProps = {
  posts: Post[];
  onPostClicked: (post: Post) => void;
};
export default function PostsTable({ posts, onPostClicked }: PostsTableProps) {
  return (
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
          <tr
            key={item.id}
            onClick={() => {
              onPostClicked(item)
            }}
          >
            <td>{item.title}</td>
            <td>{item.body}</td>
            <td>{item.userId}</td>
          </tr>
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}
