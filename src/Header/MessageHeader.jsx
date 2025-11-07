import React from "react";
import sharingIcon from "./img/sharing.svg";

import { ReactComponent as ThumbIcon } from "./img/Thumb.svg";
import { ReactComponent as HeartIcon } from "./img/heart.svg";
import { ReactComponent as LaughingIcon } from "./img/Laughing.svg";
import { ReactComponent as CongratulationsIcon } from "./img/Congratulations.svg";

import { ReactComponent as PlusIcon } from "./img/plus.svg";

function MessageHeader() {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-sm">
      {/* 왼쪽 영역 */}
      <div className="flex items-center gap-3">
        <span className="font-semibold text-gray-800">To. Ashley Kim</span>
        <div className="flex -space-x-2">
          <img
            src="https://placekitten.com/28/28"
            alt="profile"
            className="w-6 h-6 rounded-full border border-white"
          />
          <img
            src="https://placekitten.com/29/29"
            alt="profile"
            className="w-6 h-6 rounded-full border border-white"
          />
          <img
            src="https://placekitten.com/30/30"
            alt="profile"
            className="w-6 h-6 rounded-full border border-white"
          />
          <div className="w-6 h-6 rounded-full bg-gray-300 text-xs flex items-center justify-center border border-white">
            +6
          </div>
        </div>
        <span className="text-sm text-gray-600">
          <strong className="text-gray-800">23명</strong>이 작성했어요!
        </span>
      </div>

      {/* 오른쪽 영역 */}
      <div className="flex items-center gap-2">
        {/* 반응 아이콘 그룹 */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 bg-gray-300 px-2 py-1 rounded-full text-sm text-gray-800">
            <ThumbIcon className="w-4 h-4" /> 24
          </button>
          <button className="flex items-center gap-1 bg-gray-300 px-2 py-1 rounded-full text-sm text-gray-800">
            <HeartIcon className="w-4 h-4" /> 16
          </button>
          <button className="flex items-center gap-1 bg-gray-300 px-2 py-1 rounded-full text-sm text-gray-800">
            <CongratulationsIcon className="w-4 h-4" /> 10
          </button>
        </div>

        {/* 드롭다운 */}
        <div className="relative group">
          <button className="text-gray-700 text-lg">▼</button>
          <div className="absolute right-0 mt-2 hidden group-hover:block bg-white border rounded-lg shadow-lg p-2">
            <div className="grid grid-cols-2 gap-2">
              <button className="flex items-center justify-center gap-1 bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                <ThumbIcon className="w-4 h-4" /> 10
              </button>
              <button className="flex items-center justify-center gap-1 bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                <HeartIcon className="w-4 h-4" /> 8
              </button>
              <button className="flex items-center justify-center gap-1 bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                <CongratulationsIcon className="w-4 h-4" /> 24
              </button>
              <button className="flex items-center justify-center gap-1 bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                <LaughingIcon className="w-4 h-4" /> 2
              </button>
            </div>
          </div>
        </div>

        {/* 추가 버튼 */}
        <button className="flex items-center gap-1 bg-white border border-gray-300 rounded-md px-3 py-1 text-16-regular text-gray-900 ">
          <img src={PlusIcon} alt="추가" className="w-4 h-4" />
          추가
        </button>

        {/* 공유 버튼 */}
        <div className="relative group">
          <button className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-200">
            <img src={sharingIcon} alt="공유" className="w-5 h-5" />
          </button>
          <div className="absolute right-0 mt-2 hidden group-hover:block bg-white border rounded-lg shadow-md">
            <button className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left">
              카카오톡 공유
            </button>
            <button className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left">
              URL 공유
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageHeader;
