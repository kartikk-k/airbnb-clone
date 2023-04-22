import React from 'react'

const buttonClasses = "px-4 py-2 hover:shadow-md duration-300 active:scale-90 active:bg-gray-100 border shrink-0 rounded-full shadow-sm text-sm bg-white text-gray-500"

function SearchFilters() {
    return (
        <div className='flex w-full py-4 space-x-4 overflow-auto scrollbar-light'>
            <button className={buttonClasses}>Cancellation Flexibility</button>
            <button className={buttonClasses}>Type of Place</button>
            <button className={buttonClasses}>Price</button>
            <button className={buttonClasses}>Rooms and Beds</button>
            <button className={buttonClasses}>More Filters</button>
        </div>
    )
}

export default SearchFilters