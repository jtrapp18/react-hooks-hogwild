import React from 'react';

const SearchBar = ({chgSort, chgFilter}) => {
    return (
        <div>
        <strong>Sort by:</strong>
        <label>
            <input
                type="radio"
                value="name"
                name="sort"
                checked={null}
                onChange={chgSort}
            />
          Name
        </label>
        <label>
            <input
                type="radio"
                value="weight"
                name="sort"
                checked={null}
                onChange={chgSort}
            />
          Weight
        </label>
        <br />
        <label>
            <input
                type="checkbox" 
                defaultChecked={false}
                onChange={chgFilter}
            />
            Greased Only
        </label>
      </div>
    );
}

export default SearchBar;
