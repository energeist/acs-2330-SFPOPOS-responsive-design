// src/POPOSList.js

import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json'

function POPOSList() {

  const spaces = data.map(( { title, address, hours, images } ) => {
    return (
      <POPOSSpace
        key={title}
        name={title}
        address={address?address:"No address listed"}
        hours={hours?hours:"No hours available"}
        image={images[0]}
      />
    )
  })

  return (
    <div className="POPOSList">
      { spaces }
    </div>
  )
}

export default POPOSList;