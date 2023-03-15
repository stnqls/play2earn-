import React from "react";

import "./Bank.scss";

const BankList = [
  {
    name: "카카오뱅크",
  },
  {
    name: "케이뱅크",
  },
  {
    name: "토스뱅크",
  },
  {
    name: "국민은행",
  },
  {
    name: "신한은행",
  },
  {
    name: "기업은행",
  },
  {
    name: "농협은행",
  },
  {
    name: "우리은행",
  },
  {
    name: "하나은행",
  },
  {
    name: "SC제일은행",
  },
  {
    name: "산업은행",
  },
  {
    name: "한국씨티은행",
  },
  {
    name: "새마을금고",
  },
  {
    name: "신협중앙회",
  },
  {
    name: "저축은행",
  },
  {
    name: "수협은행",
  },
  {
    name: "우체국",
  },
  {
    name: "광주은행",
  },
  {
    name: "경남은행",
  },
  {
    name: "대구은행",
  },
  {
    name: "전북은행",
  },
  {
    name: "부산은행",
  },
  {
    name: "제주은행",
  },
];

const Bank = (props: any) => {
  return (
    <React.Fragment>
      <div
        className="bank-cover"
        onClick={() => {
          props.setModal(false);
        }}
      ></div>
      <div className="bank">
        <div className="bank__title">은행 선택</div>
        <div
          className="bank__close"
          onClick={() => {
            props.setModal(false);
          }}
        >
          취소
        </div>
        <div className="bank__contents">
          {/* <input
            type="text"
            className="bank__contents__search"
            placeholder="은행검색"
          /> */}
          <ul className="bank__contents__list">
            {BankList.map((item: any, index: number) => (
              <li
                className="bank__contents__list__item"
                key={`bank-list-${index}`}
                onClick={() => {
                  props.setBank(item.name);
                  props.setModal(false);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bank;
