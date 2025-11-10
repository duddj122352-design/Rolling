import React from "react";
import Header from "../Header/HeaderNobutton";
import Input from "../Text_Field/Input";
import User from "../Option/User"
import Select from "../Text_Field/SelectBox";
import Froala from "../Text_Field/Froala";

function Send() {
  return (
    <>
      <Header />
      <div>
        <div>
          <div>
            <p>From.</p>
            <Input />
          </div>
          <div>
            <p>프로필 이미지</p>
            <div>
              <User/>
              <div>
                <p>프로필 이미지를 선택해주세요!</p>
                {/* api */}
              </div>
            </div>
          </div>
          <div>
            <p>상대와의 관계</p>
            <Select text="친구"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Send;
