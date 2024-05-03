import { Comments } from "../utils/types";

type CommentsListProps = {
  postComments: Comments[];
};

export default function CommentsList({ postComments }: CommentsListProps) {
  return (
    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
      {postComments.map((item) => (
        <div className="border rounded-lg p-4 flex flex-col gap-2" key={item.id}>
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
            {item.name}
          </p>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {item.email}
          </div>
          <div className="text-gray-500">{item.body}</div>
        </div>
      ))}
    </div>
  );
}
