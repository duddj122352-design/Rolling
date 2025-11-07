import React from 'react';
import RollingIcon from './img/logo.png';

function Header() {
  return (
    <>
      <header className='bg-white sticky top-0 z-50 w-full h-[64px]'>
        <div className="w-full h-full flex items-center justify-between">
          {/* Rolling 로고 영역 */}
          <div className='flex items-center justify-center justify-items-center z-60'>
            {/* 로고 아이콘 */}
            <a href="/"><img src={RollingIcon} alt="로고" /></a>
          </div>

          {/* "롤링 페이퍼 만들기" 버튼 영역 */}
          <div>
            <button
              className="border bg-white rounded-lg  text-16-bold h-[42px] w-[149px]">
              롤링 페이퍼 만들기
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;