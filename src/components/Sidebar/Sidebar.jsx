import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthUserContext } from '../../context/authuser';
import { 
  FaHome, 
  FaSearch, 
  FaBell, 
  FaEnvelope, 
  FaBookmark, 
  FaUser, 
  FaEllipsisH 
} from 'react-icons/fa';
import { BsLightningChargeFill, BsPencilSquare } from 'react-icons/bs';
import { MdStars } from 'react-icons/md';
import { RiUserStarLine } from 'react-icons/ri';

const XLogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Sidebar() {
  const { authUser, logout } = useContext(AuthUserContext);
  const location = useLocation();

  const navItems = [
    { icon: FaHome, label: 'Home', path: '/' },
    { icon: FaSearch, label: 'Explore', path: '/explore' },
    { icon: FaBell, label: 'Notifications', path: '/notifications' },
    { icon: FaEnvelope, label: 'Messages', path: '/messages' },
    { icon: BsLightningChargeFill, label: 'Grok', path: '/grok' },
    { icon: FaBookmark, label: 'Bookmarks', path: '/bookmarks' },
    { icon: RiUserStarLine, label: 'Creator Studio', path: '/creator-studio' },
    { icon: MdStars, label: 'Premium', path: '/premium' },
    { icon: FaUser, label: 'Profile', path: '/profile' },
    { icon: FaEllipsisH, label: 'More', path: '/more' }
  ];

  return (
    <div className="w-80 h-screen sticky top-0 flex flex-col border-r border-gray-700 px-6">
      <div className="p-3 mb-1">
        <Link to="/" className="inline-flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-900 transition-colors">
          <XLogo />
        </Link>
      </div>

      <nav className="flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-5 px-4 py-4 rounded-full transition-colors mb-1 ${
                isActive 
                  ? 'font-bold' 
                  : 'font-normal hover:bg-gray-900'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xl">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold text-lg rounded-full py-3 px-6 mb-4 transition-colors w-full flex items-center justify-center gap-2">
        <BsPencilSquare className="w-5 h-5" />
        Post
      </button>

      {authUser && (
        <div className="mb-4">
          <button 
            onClick={logout}
            className="flex items-center gap-3 p-3 rounded-full hover:bg-gray-900 transition-colors w-full"
          >
            <img 
              src={authUser.avatar} 
              alt={authUser.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1 text-left overflow-hidden">
              <p className="font-bold text-sm truncate">{authUser.name}</p>
              <p className="text-gray-500 text-sm truncate">{authUser.username}</p>
            </div>
            <FaEllipsisH className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      )}
    </div>
  );
}