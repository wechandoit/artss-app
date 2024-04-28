import * as React from 'react'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

const Search = () => {
  return (
    <div className="flex w-3/4 p-4 items-center">
      <MagnifyingGlassIcon className="w-7 h-7" />
      <input
        className="ml-4 w-full outline-none"
        type="text"
        placeholder="Search"
      />
    </div>
  )
}

export default Search
