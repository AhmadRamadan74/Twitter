import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import RightSidebar from '../Rightsidebar/Rightsidebar';
import TweetComposer from '../Tweetcomposer/Tweetcomposer';
import Post from '../Post/Post';
import { mockPosts } from '../../utils/mockData';
import { MdStars } from 'react-icons/md';

export default function Home() {
  const [activeTab, setActiveTab] = useState('forYou');
  const [posts, setPosts] = useState(mockPosts);

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Feed */}
<div className="flex-1 border-x border-gray-700 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-gray-700">
          <div className="flex items-center justify-between px-4 py-3">
            <h1 className="text-xl font-bold">Home</h1>
            <button className="p-2 hover:bg-gray-900 rounded-full transition-colors">
              <MdStars className="w-5 h-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex">
            <button
              onClick={() => setActiveTab('forYou')}
              className={`flex-1 py-4 text-center font-semibold transition-colors relative ${
                activeTab === 'forYou' 
                  ? 'text-white' 
                  : 'text-gray-500 hover:bg-gray-900'
              }`}
            >
              For you
              {activeTab === 'forYou' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-sky-500 rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('following')}
              className={`flex-1 py-4 text-center font-semibold transition-colors relative ${
                activeTab === 'following' 
                  ? 'text-white' 
                  : 'text-gray-500 hover:bg-gray-900'
              }`}
            >
              Following
              {activeTab === 'following' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-sky-500 rounded-full" />
              )}
            </button>
          </div>
        </div>

        {/* Tweet Composer */}
        <TweetComposer />

        {/* Posts Feed */}
        <div>
          {posts.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p className="text-lg">No posts yet</p>
              <p className="text-sm mt-2">Be the first to post something!</p>
            </div>
          ) : (
            posts.map((post) => <Post key={post.id} post={post} />)
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}