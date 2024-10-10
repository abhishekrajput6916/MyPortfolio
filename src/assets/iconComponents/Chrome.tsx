import * as React from "react";
import type { SVGProps } from "react";
const SvgChrome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M0 256c0-46.6 12.5-90.4 34.3-128.9l109.8 191.2C166 357.5 207.9 384 256 384c14.3 0 27.1-2.3 40.8-6.6l-76.3 132.2C95.9 492.3 0 385.3 0 256m365.1 65.6c12.3-19.2 18.9-42.5 18.9-65.6 0-38.2-16.8-72.5-43.3-96h152.7c12 29.6 18.6 62.1 18.6 96 0 141.4-114.6 255.1-256 256zM477.8 128H256c-62.9 0-113.7 44.1-125.5 102.7L54.2 98.5C101 38.5 174 0 256 0c94.8 0 177.5 51.5 221.8 128M168 256c0-48.6 39.4-88 88-88s88 39.4 88 88-39.4 88-88 88-88-39.4-88-88" />
  </svg>
);
export default SvgChrome;
