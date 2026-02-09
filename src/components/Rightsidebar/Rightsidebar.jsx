import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { BsPatchCheckFill } from 'react-icons/bs';
import { trendingTopics, whoToFollow, newsItems } from '../../utils/mockData';
 
export default function RightSidebar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
<div className="hidden xl:block h-screen overflow-y-auto px-6 py-2">
      <div className="sticky top-0 bg-black pb-3 z-10">
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-900 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
          />
        </div>
      </div>

      <div className="bg-gray-900 rounded-2xl mb-4 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-xl font-bold">Today's News</h2>
          <button className="text-gray-500 hover:text-sky-500">
            <HiOutlineDotsHorizontal className="w-5 h-5" />
          </button>
        </div>
        
        {newsItems.map((news) => (
          <div 
            key={news.id}
            className="p-4 border-b border-gray-800 last:border-b-0 hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start mb-1">
              <span className="text-xs text-gray-500">{news.category}</span>
              <button className="text-gray-500 hover:text-sky-500">
                <HiOutlineDotsHorizontal className="w-4 h-4" />
              </button>
            </div>
            <h3 className="font-bold text-sm mb-1">{news.title}</h3>
            <span className="text-xs text-gray-500">
              {news.time} · {news.posts}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 rounded-2xl mb-4 overflow-hidden">
        <h2 className="text-xl font-bold p-4 border-b border-gray-800">
          What's happening
        </h2>
        
        {trendingTopics.map((topic) => (
          <div 
            key={topic.id}
            className="p-4 border-b border-gray-800 last:border-b-0 hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-xs text-gray-500 mb-1">{topic.category}</p>
                <p className="font-bold text-sm mb-1">{topic.title}</p>
                <p className="text-xs text-gray-500">{topic.posts} posts</p>
              </div>
              <button className="text-gray-500 hover:text-sky-500">
                <HiOutlineDotsHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        
        <button className="w-full text-left p-4 text-sky-500 hover:bg-gray-800 transition-colors">
          Show more
        </button>
      </div>

      <div className="bg-gray-900 rounded-2xl overflow-hidden">
        <h2 className="text-xl font-bold p-4 border-b border-gray-800">
          Who to follow
        </h2>
        
        {whoToFollow.map((user) => (
          <div 
            key={user.id}
            className="p-4 flex items-center justify-between hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <img 
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <p className="font-bold text-sm truncate">{user.name}</p>
                  {user.verified && (
                    <BsPatchCheckFill className="text-sky-500 w-4 h-4 flex-shrink-0" />
                  )}
                </div>
                <p className="text-gray-500 text-sm truncate">{user.username}</p>
              </div>
            </div>
            <button className="bg-white hover:bg-gray-200 text-black font-bold px-4 py-2 rounded-full text-sm transition-colors flex-shrink-0 ml-2">
              Follow
            </button>
          </div>
        ))}
        
        <button className="w-full text-left p-4 text-sky-500 hover:bg-gray-800 transition-colors">
          Show more
        </button>
      </div>

      <div className="mt-4 pb-4">
        <div className="flex flex-wrap gap-2 text-xs text-gray-500">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
          <a href="#" className="hover:underline">Accessibility</a>
          <a href="#" className="hover:underline">Ads info</a>
          <a href="#" className="hover:underline">More...</a>
        </div>
        <p className="text-xs text-gray-500 mt-2">© 2026 X Corp.</p>
      </div>
    </div>
  );
}