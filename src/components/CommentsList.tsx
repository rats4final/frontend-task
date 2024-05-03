import { Comments } from "../utils/types";

type CommentsListProps = {
  postComments: Comments[]
}

export default function CommentsList({postComments}:CommentsListProps) {
  return (
    <div>
      {postComments.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>{item.email}</div>
          <div>{item.body}</div>
        </div>
      ))}
    </div>
  );
}
