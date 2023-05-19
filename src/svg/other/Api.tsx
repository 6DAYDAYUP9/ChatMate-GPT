/**
 * Created by Leon<silenceace@gmail.com> at 2023-03-30.
 */

import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
const SvgComponent = (props: SvgProps) => {
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      {...props}>
      <Path
        d="M26.8857 4.35938L25.6436 3.11719C25.5967 3.07031 25.5381 3.0498 25.4766 3.0498C25.415 3.0498 25.3564 3.07324 25.3096 3.11719L23.0801 5.34668C22.0928 4.67578 20.9443 4.3418 19.7959 4.3418C18.2959 4.3418 16.7959 4.91309 15.6504 6.05859L12.665 9.04395C12.5742 9.13477 12.5742 9.28418 12.665 9.375L20.625 17.335C20.6719 17.3818 20.7305 17.4023 20.792 17.4023C20.8506 17.4023 20.9121 17.3789 20.959 17.335L23.9443 14.3496C25.9629 12.3281 26.2002 9.20215 24.6562 6.92285L26.8857 4.69336C26.9766 4.59961 26.9766 4.4502 26.8857 4.35938ZM22.5322 12.9404L20.792 14.6807L15.3193 9.20801L17.0596 7.46777C17.7891 6.73828 18.7617 6.33398 19.7959 6.33398C20.8301 6.33398 21.7998 6.73535 22.5322 7.46777C23.2617 8.19727 23.666 9.16992 23.666 10.2041C23.666 11.2383 23.2617 12.208 22.5322 12.9404ZM16.96 16.0166C16.8691 15.9258 16.7197 15.9258 16.6289 16.0166L14.6777 17.9678L12.0322 15.3223L13.9863 13.3682C14.0771 13.2773 14.0771 13.1279 13.9863 13.0371L12.9199 11.9707C12.8291 11.8799 12.6797 11.8799 12.5889 11.9707L10.6348 13.9248L9.375 12.665C9.32812 12.6182 9.26953 12.5977 9.20801 12.5977C9.14941 12.5977 9.08789 12.6211 9.04102 12.665L6.05859 15.6504C4.04004 17.6719 3.80273 20.7979 5.34668 23.0772L3.11719 25.3066C3.02637 25.3975 3.02637 25.5469 3.11719 25.6377L4.35938 26.8799C4.40625 26.9268 4.46484 26.9473 4.52637 26.9473C4.58789 26.9473 4.64648 26.9238 4.69336 26.8799L6.92285 24.6504C7.91016 25.3213 9.05859 25.6553 10.207 25.6553C11.707 25.6553 13.207 25.084 14.3525 23.9385L17.3379 20.9531C17.4287 20.8623 17.4287 20.7129 17.3379 20.6221L16.0781 19.3623L18.0322 17.4082C18.123 17.3174 18.123 17.168 18.0322 17.0771L16.96 16.0166ZM12.9404 22.5322C12.2109 23.2617 11.2383 23.666 10.2041 23.666C9.16992 23.666 8.2002 23.2646 7.46777 22.5322C6.73828 21.8027 6.33398 20.8301 6.33398 19.7959C6.33398 18.7617 6.73535 17.792 7.46777 17.0596L9.20801 15.3193L14.6807 20.792L12.9404 22.5322Z"
        fill={props.color}
      />
    </Svg>
  )
}
const SvgIcon = React.memo(SvgComponent)
export default SvgIcon