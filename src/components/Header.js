import React from 'react';
import Icon from './Icon'; // Reusable Icon component for the icons

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left: Search bar */}
      <div className="flex items-center">
        <Icon name="search" size="24" />
        <input
          type="text"
          placeholder="Search anything..."
          className="ml-4 p-2 border rounded-lg w-64"
        />
      </div>

      {/* Right: Profile, notifications, and buttons */}
      <div className="flex items-center space-x-6">
        <Icon name="notifications" size="24" />
        <Icon name="messages" size="24" />
        <div className="flex items-center space-x-3">
          <img src="/assets/images/avatar.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
          <span className="font-medium">Hi, Saikumar</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
