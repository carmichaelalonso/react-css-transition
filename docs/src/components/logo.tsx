/**
 * @license
 * Copyright (C) 2016-present Chi Vinh Le and contributors.
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

/* tslint:disable: max-line-length */

import * as React from "react";
import { StatelessComponent, HTMLAttributes } from "react";

export const Logo: StatelessComponent<HTMLAttributes<any>> =
  (props) => (
    <svg {...props} viewBox="0 0 234 235">
      <g>
        <path d="M120.068,170.674l-16.104-21.858l-9.423-12.792l-6.367,14.558l-10.879,24.875l9.063-1.013 c7.392,40.324,45.959,66.36,86.284,58.968c40.325-7.391,67.022-46.071,59.632-86.396c-6.482-35.364-37.029-60.245-71.644-60.849 l-8.772,20.061c27.883-4.764,54.486,13.779,59.601,41.68c5.153,28.11-13.459,55.075-41.568,60.227 c-28.11,5.152-53.864-8.322-59.017-36.433" />
        <path d="M113.434,63.99l16.103,21.859l9.424,12.792l6.367-14.558l10.879-24.875l-9.062,1.013 c-7.393-40.324-45.96-66.359-86.284-58.969C20.535,8.644-6.162,47.325,1.229,87.65c6.482,35.362,37.028,60.245,71.643,60.848 l8.774-20.062c-27.884,4.766-54.487-13.777-59.602-41.68C16.891,58.647,35.503,31.683,63.612,26.53 c28.11-5.152,53.864,8.322,59.017,36.433" />
      </g>
    </svg>
  );
