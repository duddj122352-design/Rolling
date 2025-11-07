import React from 'react';
import { ReactComponent as RollingIcon } from './img/logo.svg';

function Header() {
  return (
    <>
      <header className='bg-white sticky top-0 z-50'>
        <div className="flex items-center justify-between px-6">
          {/* Rolling 로고 영역 */}
          <div className='flex items-center space-x-2'>
            {/* 로고 아이콘 */}
            <a href="/"><RollingIcon className="w-6 h-6" /></a>
            {/* 로고 텍스트 */}
            <a className="text-20-bold text-gray-900" href="/">Rolling</a>
          </div>

          {/* "롤링 페이퍼 만들기" 버튼 영역 */}
          <button
            className="px-4 py-2 bg-white rounded-lg border grayscale-300 text-16-bold">
            롤링 페이퍼 만들기
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;