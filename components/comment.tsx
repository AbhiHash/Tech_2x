import React, { useState } from "react";
import { comment } from "../data/comment";
import Input from "@mui/material/Input";
interface commentProps {
  commentData: any;
}

const CommentCard = (props: commentProps) => {
  const [replies, setReply] = useState([]);
  const comments = props.commentData;
  const [expandedComment, setExpandedComment] = useState("");
  const replyRef = React.useRef("")

  const fetchReply = (data: any) => {
    // if (expandedComment === data._id) {
    //   setExpandedComment("");
    // } else {
    // }

    console.log(data, " console.log is working ");

    setExpandedComment(data._id);
    const repliesData = data.replies.map((replyId: any) => {
      return comment.filter((res) => res._id === replyId)[0];
    });
    setReply(repliesData);
    console.log(repliesData, " replied data ");
  };

  const onAddReply =  () =>  { 

  }

  return (
    <div>
      {comments && comments.length > 0 ? (
        comments.map((data: any, index: number) => (
          <div key={index} className="bg-white p-4 mt-4 rounded shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <p className="font-semibold"> {data.user_id}</p>
              </div>
              <div className="space-x-2">
                <button
                  className={`text-blue-500 hover:text-blue-700 `}
                  onClick={() => fetchReply(data)}
                >
                  Reply
                </button>
                <button className="text-blue-500 hover:text-blue-700">
                  Like
                </button>
              </div>
            </div>
            <p className="mt-2">{data.comment}</p>

            {replies.length > 0 && expandedComment === data._id
              ? replies.map((reply: any, index: number) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-2 mt-2 rounded shadow ml-6"
                  >
                    <Input placeholder="reply" ref={replyRef} onChange={onAddReply}/>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                        <p className="font-semibold">{reply.user_id}</p>
                      </div>
                      <div className="space-x-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          Like
                        </button>
                      </div>
                    </div>
                    <p className="mt-2"> {reply.comment}</p>
                    {/* Add console.log statement */}
                  </div>
                ))
              : null}
          </div>
        ))
      ) : (
        <div>No COMMENTS ON THIS VIDEO</div>
      )}
    </div>
  );
};

export default CommentCard;
