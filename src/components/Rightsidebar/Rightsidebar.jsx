import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { BsPatchCheckFill } from 'react-icons/bs';
import { trendingTopics, whoToFollow, newsItems } from '../../utils/mockData';

export default function RightSidebar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-[350px] h-screen overflow-y-scroll scrollbar-hide pr-4">
      {/* Search Bar */}
      <div className="sticky top-0 bg-black pt-2 pb-4 z-10">
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-900 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
          />
        </div>
      </div>

      {/* Today's News */}
      <div className="bg-gray-900 rounded-2xl mb-4 overflow-hidden">
        <h2 className="text-xl font-bold p-4 text-white">Today's News</h2>
        {newsItems.map((news) => (
          <div
            key={news.id}
            className="px-4 py-3 hover:bg-gray-800 cursor-pointer transition-colors border-t border-gray-800"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-gray-500 text-sm">{news.category}</p>
                <p className="text-white font-semibold mt-1">{news.title}</p>
                <p className="text-gray-500 text-sm mt-1">
                  {news.time} · {news.posts}
                </p>
              </div>
              <HiOutlineDotsHorizontal className="text-gray-500 text-xl" />
            </div>
          </div>
        ))}
      </div>

      {/* What's happening */}
      <div className="bg-gray-900 rounded-2xl mb-4 overflow-hidden">
        <h2 className="text-xl font-bold p-4 text-white">What's happening</h2>
        {trendingTopics.map((topic) => (
          <div
            key={topic.id}
            className="px-4 py-3 hover:bg-gray-800 cursor-pointer transition-colors border-t border-gray-800"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-gray-500 text-sm">{topic.category}</p>
                <p className="text-white font-bold mt-1">{topic.title}</p>
                <p className="text-gray-500 text-sm mt-1">{topic.posts} posts</p>
              </div>
              <HiOutlineDotsHorizontal className="text-gray-500 text-xl" />
            </div>
          </div>
        ))}
        <div className="px-4 py-3 text-sky-500 hover:bg-gray-800 cursor-pointer transition-colors">
          Show more
        </div>
      </div>

      {/* Who to follow */}
      <div className="bg-gray-900 rounded-2xl mb-4 overflow-hidden">
        <h2 className="text-xl font-bold p-4 text-white">Who to follow</h2>
        {whoToFollow.map((user) => (
          <div
            key={user.id}
            className="px-4 py-3 hover:bg-gray-800 cursor-pointer transition-colors border-t border-gray-800"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <p className="text-white font-bold">{user.name}</p>
                    {user.verified && (
                      <BsPatchCheckFill className="text-sky-500" />
                    )}
                  </div>
                  <p className="text-gray-500 text-sm">{user.username}</p>
                </div>
              </div>
              <button className="bg-white text-black font-bold px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
                Follow
              </button>
            </div>
          </div>
        ))}
        <div className="px-4 py-3 text-sky-500 hover:bg-gray-800 cursor-pointer transition-colors">
          Show more
        </div>
      </div>

      {/* Footer */}
      <div className="text-gray-500 text-xs px-4 pb-4 flex flex-wrap gap-2">
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Cookie Policy</a>
        <a href="#" className="hover:underline">Accessibility</a>
        <a href="#" className="hover:underline">Ads info</a>
        <a href="#" className="hover:underline">More...</a>
        <p className="w-full mt-1">© 2026 X Corp.</p>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}