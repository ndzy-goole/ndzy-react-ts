import React from 'react';
const img = (
  <img
    alt="logo"
    src={require('@/images/ndzy.png')}
    style={{ width: 32, height: 32 }}
  />
);
const Logo = ({ collapsed }: { collapsed: boolean }) => {
  return collapsed ? (
    <div className="flex justify-center">{img}</div>
  ) : (
    <div className="flex justify-center">
      <span className="flex">
        {img} <span className="mx-auto px-4">ndzy</span>
      </span>
    </div>
  );
};
export default Logo;
