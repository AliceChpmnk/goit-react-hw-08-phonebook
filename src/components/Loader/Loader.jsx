import React from 'react';
import { ColorRing } from 'react-loader-spinner';

export default function Loader() {
  return (
    <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#1DA1F2', '#8ECAe6', '#053e85', '#219EBC', '#A2D2FF']}
  />
  )
}