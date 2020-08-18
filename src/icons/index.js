import React from "react";

const CloseBtn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <circle cx="7" cy="7" r="7" fill="#226D75"></circle>
      <g clip-path="url(#clip0)">
        <path
          fill="#FBFBFD"
          d="M10 4.707L9.293 4 7 6.293 4.707 4 4 4.707 6.293 7 4 9.293l.707.707L7 7.707 9.293 10 10 9.293 7.707 7 10 4.707z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H6V6H0z" transform="translate(4 4)"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default CloseBtn;
