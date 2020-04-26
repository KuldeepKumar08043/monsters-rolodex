import React from 'react';

import './search-box.styles.css';

export const SearchBox = (props) => (
    <div>
        <input className='search' type="text" placeholder={props.placeholder}
            onChange={props.handleChange} />
    </div>
)