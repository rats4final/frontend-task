import { Post } from "../utils/types";

type PostsTableProps = {
  posts: Post[];
  onPostClicked: (post: Post) => void;
};
export default function PostsTable({ posts, onPostClicked }: PostsTableProps) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">Body</th>
            <th scope="col" className="px-6 py-3">Title</th>
            <th scope="col" className="px-6 py-3">User ID</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => (
            <tr
              className="bg-white border-b hover:bg-gray-50"
              key={item.id}
              onClick={() => {
                onPostClicked(item)
              }}
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.title}</td>
              <td className="px-6 py-4">{item.body}</td>
              <td className="px-6 py-4">{item.userId}</td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}
