import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  HomeIcon,
  PersonIcon,
  BellIcon,
  GearIcon,
  QuestionMarkCircledIcon,
} from '@radix-ui/react-icons'

interface SidebarPropTypes {
  onSelect?: (page: string) => void
}

const Sidebar: React.FC<SidebarPropTypes> = (props) => {
  const { onSelect } = props

  return (
    <div className="flex gap-2 min-h-screen border-r border-gray-100">
      <div className="w-full p-5">
        <h1 className="text-black text-2xl">ARTSS</h1>
        <ul className="mt-4">
          <li className="bg-gray-100 flex mt-2 p-4 items-center hover:bg-gray-100 rounded-md">
            <Link to={'/'}>
              <HomeIcon className="w-5 h-5" />
              <a href="#" className="px-4 block">
                Home
              </a>
            
          </li>
          <li className="flex mt-2 p-4 items-center hover:bg-gray-100 rounded-md">
            <Link to={'/patients'}>
              <PersonIcon className="w-5 h-5" />
              <a href="#" className="px-4 block">
                Patients
              </a>
            </Link>
          </li>
          <li className="flex mt-2 p-4 items-center hover:bg-gray-100 rounded-md">
            <Link to={'/notifications'}>
              <BellIcon className="w-5 h-5" />
              <a href="#" className="px-4 block">
                Notifications
              </a>
            </Link>
          </li>
          <li className="flex mt-2 p-4 items-center hover:bg-gray-100 rounded-md">
            <Link to={'/settings'}>
              <GearIcon className="w-5 h-5" />
              <a href="#" className="px-4 block">
                Settings
              </a>
            </Link>
          </li>
          <li className="flex mt-2 p-4 items-center hover:bg-gray-100 rounded-md">
            <Link to={'/help'}>
              <QuestionMarkCircledIcon className="w-5 h-5" />
              <a href="#" className="px-4 block">
                Help
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

Sidebar.propTypes = propTypes

export default Sidebar
