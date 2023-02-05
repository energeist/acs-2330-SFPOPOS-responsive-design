// src/POPOSList.js

import { React, useState } from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.js';

function POPOSList() {
  const [ query, setQuery ] = useState('');
  // the code below reduces to data.filter().map() - filter returns 
  // an array matching query string and then map iterates over that returned array.
  const spaces = data.filter((obj) => {
    const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
    const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
    return inTitle || inAddress })
  .map(({ title, address, images, hours, id, features } ) => {
    return (
      <POPOSSpace
        id={id}
        key={title}
        name={title}
        address={address?address:"No address listed"}
        hours={hours?hours:"No hours available"}
        image={images[0]}
      />
    )
  });

  return (
    <div className="POPOSList">
      <form>
        <input
          value={query}
          placeholder="search"
          onChange={(evt) => setQuery(evt.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      { spaces }
    </div>
  )
}

export default POPOSList;