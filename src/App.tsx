import React, { useState } from 'react'
import Sidebar from './components/sidebar'
import Header from './components/header/header'
import Page from './components/content'

/* Design 

App
- Flex (row flex)
  - Sidebar
  - Flex (column flex)
    -     
*/

const App: React.FC = ({}) => {
  // the page to render
  const [currentPage, setCurrentPage] = useState('home')

  // function to set page based on sidebar selection
  const handleSidebarSelection = (page: string) => {
    setCurrentPage(page)
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar onSelect={handleSidebarSelection} />
      <div className="flex flex-col w-full min-h-screen">
        <Header />
        <Page page={currentPage} />
      </div>
    </div>
  )
}

export default App
