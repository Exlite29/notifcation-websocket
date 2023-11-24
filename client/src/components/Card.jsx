import {
  ChatIcon,
  HeartIcon,
  ReplyIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import React from "react";

export const Card = ({ post }) => {
  return (
    <div className="mt-0">
      <div>
        <img src={post.userImg} className="h-4 w-4  " />
        <span>{post.fullName}</span>
      </div>
      <img src={post.postImg} alt="" className="h-20 w-fit  " />
      <div className="flex gap-2 ">
        <HeartIcon className="h-5 w-5" />
        <ChatIcon className="h-5 w-5" />
        <ShareIcon className=" h-5 w-5" />
      </div>
    </div>
  );
};
