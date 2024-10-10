import * as React from "react";
import type { SVGProps } from "react";
const SvgSparkle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m1 12 9.167-1.833L12 1l1.833 9.167L23 12l-9.167 1.833L12 23l-1.833-9.167z"
    />
  </svg>
);
export default SvgSparkle;
