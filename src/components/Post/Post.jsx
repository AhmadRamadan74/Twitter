import React from 'react';
import { FaRegComment, FaRetweet, FaRegHeart, FaRegBookmark, FaShare } from 'react-icons/fa';
import { HiOutlineChartBar } from 'react-icons/hi';
import { BsPatchCheckFill } from 'react-icons/bs';

export default function Post({ post }) {
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  return (
    <div className="w-full border-b border-gray-700 p-4 hover:bg-gray-900/50 transition-colors cursor-pointer">
      <div className="flex gap-3">
        <img 
          src={post.author.avatar} 
          alt={post.author.name}
          className="w-12 h-12 rounded-full flex-shrink-0"
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="font-bold text-white hover:underline">
              {post.author.name}
            </span>
            {post.author.verified && (
              <BsPatchCheckFill className="text-sky-500 w-4 h-4" />
            )}
            <span className="text-gray-500">
              {post.author.username}
            </span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{post.timestamp}</span>
          </div>

          <p className="text-white mt-1 mb-3 whitespace-pre-wrap break-words">
            {post.content}
          </p>

          {post.images && post.images.length > 0 && (
            <div className={`grid gap-1 rounded-2xl overflow-hidden mb-3 ${
              post.images.length === 1 ? 'grid-cols-1' : 
              post.images.length === 2 ? 'grid-cols-2' : 
              post.images.length === 3 ? 'grid-cols-3' : 
              'grid-cols-2'
            }`}>
              {post.images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`Post image ${index + 1}`}
                  className={`w-full object-cover ${
                    post.images.length === 1 ? 'max-h-96' : 
                    post.images.length === 3 && index === 0 ? 'row-span-2' : 
                    'h-48'
                  }`}
                />
              ))}
            </div>
          )}

          <div className="flex justify-between max-w-md mt-3">
            <button className="flex items-center gap-2 text-gray-500 hover:text-sky-500 group transition-colors">
              <div className="p-2 rounded-full group-hover:bg-sky-500/10 transition-colors">
                <FaRegComment className="w-4 h-4" />
              </div>
              <span className="text-sm">{post.replies}</span>
            </button>

            <button className="flex items-center gap-2 text-gray-500 hover:text-green-500 group transition-colors">
              <div className="p-2 rounded-full group-hover:bg-green-500/10 transition-colors">
                <FaRetweet className="w-4 h-4" />
              </div>
              <span className="text-sm">{formatNumber(post.retweets)}</span>
            </button>

            <button className="flex items-center gap-2 text-gray-500 hover:text-pink-500 group transition-colors">
              <div className="p-2 rounded-full group-hover:bg-pink-500/10 transition-colors">
                <FaRegHeart className="w-4 h-4" />
              </div>
              <span className="text-sm">{formatNumber(post.likes)}</span>
            </button>

            <button className="flex items-center gap-2 text-gray-500 hover:text-sky-500 group transition-colors">
              <div className="p-2 rounded-full group-hover:bg-sky-500/10 transition-colors">
                <HiOutlineChartBar className="w-4 h-4" />
              </div>
              <span className="text-sm">{formatNumber(post.views)}</span>
            </button>

            <div className="flex items-center gap-2">
              <button className="text-gray-500 hover:text-sky-500 group transition-colors">
                <div className="p-2 rounded-full group-hover:bg-sky-500/10 transition-colors">
                  <FaRegBookmark className="w-4 h-4" />
                </div>
              </button>

              <button className="text-gray-500 hover:text-sky-500 group transition-colors">
                <div className="p-2 rounded-full group-hover:bg-sky-500/10 transition-colors">
                  <FaShare className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}