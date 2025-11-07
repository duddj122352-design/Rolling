import React from 'react'

function Header() {
  return(
    <>
    <header className='bg-white sticky top-0 z-50 text-20-bold'>
      <div className="flex items-center justify-between px-4">
        {/* Rolling 로고 */}
        <div className='flex items-center space-x-2'>
          <span className="text-xl text-purple-600"></span>
          <span className="text-xl font-semibold text-gray-800">Rolling</span>
        </div>
      </div>
    </header>
    </>
  );
}

export default Header