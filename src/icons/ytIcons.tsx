import { iconsProps, sizeStylesIcons } from "./iconStyles";

export const YTIcon = (props: iconsProps) => {
  return (
    <>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={sizeStylesIcons.get(props.size)}
          height={sizeStylesIcons.get(props.size)}
          viewBox="0,0,256,256"
        >
          <g
            fill="#414d5d"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
          >
            <g transform="scale(8,8)">
              <path d="M16,6c-3.76562,0 -7.09375,0.39063 -9.125,0.6875c-1.67969,0.24609 -3.03516,1.51172 -3.34375,3.1875c-0.26172,1.42578 -0.53125,3.51172 -0.53125,6.125c0,2.61328 0.26953,4.69922 0.53125,6.125c0.30859,1.67578 1.66406,2.94531 3.34375,3.1875c2.03906,0.29688 5.37891,0.6875 9.125,0.6875c3.74609,0 7.08594,-0.39062 9.125,-0.6875c1.67969,-0.24219 3.03516,-1.51172 3.34375,-3.1875c0.26172,-1.42969 0.53125,-3.51953 0.53125,-6.125c0,-2.60547 -0.26562,-4.69531 -0.53125,-6.125c-0.30859,-1.67578 -1.66406,-2.94141 -3.34375,-3.1875c-2.03125,-0.29687 -5.35937,-0.6875 -9.125,-0.6875zM16,8c3.63281,0 6.87891,0.37109 8.84375,0.65625c0.84375,0.125 1.50391,0.76172 1.65625,1.59375c0.24219,1.32031 0.5,3.27734 0.5,5.75c0,2.46875 -0.25781,4.42969 -0.5,5.75c-0.15234,0.83203 -0.80859,1.47266 -1.65625,1.59375c-1.97266,0.28516 -5.23437,0.65625 -8.84375,0.65625c-3.60937,0 -6.875,-0.37109 -8.84375,-0.65625c-0.84375,-0.12109 -1.50391,-0.76172 -1.65625,-1.59375c-0.24219,-1.32031 -0.5,-3.27344 -0.5,-5.75c0,-2.48047 0.25781,-4.42969 0.5,-5.75c0.15234,-0.83203 0.80859,-1.46875 1.65625,-1.59375c1.96094,-0.28516 5.21094,-0.65625 8.84375,-0.65625zM13,10.28125v11.4375l1.5,-0.84375l7,-4l1.5,-0.875l-1.5,-0.875l-7,-4zM15,13.71875l3.96875,2.28125l-3.96875,2.28125z"></path>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};
