import React, { Component } from 'react';
import Svg, { G, Path } from 'react-native-svg';

const IconPause = (props: any) => {
    return (
        <Svg  viewBox="0 0 24 24" fill="#fff">
        <G data-name="Layer 2">
          <G data-name="pause-circle">
            <Path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"></Path>
            <Path d="M15 8a1 1 0 00-1 1v6a1 1 0 002 0V9a1 1 0 00-1-1zM9 8a1 1 0 00-1 1v6a1 1 0 002 0V9a1 1 0 00-1-1z"></Path>
          </G>
        </G>
      </Svg>

    )
}

export default IconPause;