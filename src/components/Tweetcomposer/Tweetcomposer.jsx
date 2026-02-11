import React, { useState, useContext } from 'react';
import { AuthUserContext } from '../../context/authuser';
import { FaImage, FaPoll, FaSmile, FaCalendarAlt } from 'react-icons/fa';
import { MdGifBox } from 'react-icons/md';

export default function TweetComposer() {
  const { authUser } = useContext(AuthUserContext);
  const [tweetText, setTweetText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tweetText.trim()) {
      console.log('Tweet posted:', tweetText);
      setTweetText('');
    }
  };

  return (
    <div className="border-b border-gray-700 p-4 ">
      <div className="flex gap-3">
        <img 
          src={authUser?.avatar} 
          alt={authUser?.name}
          className="w-12 h-12 rounded-full flex-shrink-0"
        />

        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <textarea
              value={tweetText}
              onChange={(e) => setTweetText(e.target.value)}
              placeholder="What's happening?"
              className="w-full bg-transparent text-white text-xl placeholder-gray-500 outline-none resize-none min-h-[80px]"
              rows="3"
            />

            <div className="flex items-center justify-between pt-3 border-t border-gray-700 mt-3">
              <div className="flex items-center gap-1">
                <button 
                  type="button"
                  className="p-2 text-sky-500 hover:bg-sky-500/10 rounded-full transition-colors"
                  title="Media"
                >
                  <FaImage className="w-5 h-5" />
                </button>
                <button 
                  type="button"
                  className="p-2 text-sky-500 hover:bg-sky-500/10 rounded-full transition-colors"
                  title="GIF"
                >
                  <MdGifBox className="w-5 h-5" />
                </button>
                <button 
                  type="button"
                  className="p-2 text-sky-500 hover:bg-sky-500/10 rounded-full transition-colors"
                  title="Poll"
                >
                  <FaPoll className="w-5 h-5" />
                </button>
                <button 
                  type="button"
                  className="p-2 text-sky-500 hover:bg-sky-500/10 rounded-full transition-colors"
                  title="Emoji"
                >
                  <FaSmile className="w-5 h-5" />
                </button>
                <button 
                  type="button"
                  className="p-2 text-sky-500 hover:bg-sky-500/10 rounded-full transition-colors"
                  title="Schedule"
                >
                  <FaCalendarAlt className="w-5 h-5" />
                </button>
              </div>

              <button
                type="submit"
                disabled={!tweetText.trim()}
                className="bg-sky-500 hover:bg-sky-600 disabled:bg-sky-500/50 disabled:cursor-not-allowed text-white font-bold px-5 py-2 rounded-full transition-colors"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}