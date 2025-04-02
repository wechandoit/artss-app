import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  HomeIcon,
  PersonIcon,
  BellIcon,
  GearIcon,
  QuestionMarkCircledIcon,
} from '@radix-ui/react-icons';

interface SidebarPropTypes {
  page: string;
  onSelect?: (page: string) => void;
}

const Sidebar: React.FC<SidebarPropTypes> = (props) => {
  const { page, onSelect } = props;
  const navigate = useNavigate();

  const handleClick = (selectedPage: string) => {
    if (onSelect) {
      onSelect(selectedPage);
    }
    navigate(selectedPage);
  };

  return (
    <div className="flex gap-2 min-h-screen border-r border-gray-100">
      <div className="w-full p-5">
        <h1 className="text-black text-2xl">ARTSS</h1>
        <ul className="mt-4">
          <li>
            <button
              className={`flex mt-2 p-4 items-center hover:bg-gray-100 rounded-md w-full ${page === '/' ? 'bg-gray-100' : 'transparent'}`}
              onClick={() => handleClick('/')}
            >
              <HomeIcon className="w-5 h-5 mr-2" /> Home
            </button>
          </li>
          <li>
            <button
              className={`flex mt-2 p-4 items-center hover:bg-gray-100 rounded-md w-full ${page === '/patients' ? 'bg-gray-100' : 'transparent'}`}
              onClick={() => handleClick('/patients')}
            >
              <PersonIcon className="w-5 h-5 mr-2" /> Patients
            </button>
          </li>
          <li>
            <button
              className={`flex mt-2 p-4 items-center hover:bg-gray-100 rounded-md w-full ${page === '/notifications' ? 'bg-gray-100' : 'transparent'}`}
              onClick={() => handleClick('/notifications')}
            >
              <BellIcon className="w-5 h-5 mr-2" /> Notifications
            </button>
          </li>
          <li>
            <button
              className={`flex mt-2 p-4 items-center hover:bg-gray-100 rounded-md w-full ${page === '/settings' ? 'bg-gray-100' : 'transparent'}`}
              onClick={() => handleClick('/settings')}
            >
              <GearIcon className="w-5 h-5 mr-2" /> Settings
            </button>
          </li>
          <li>
            <button
              className={`flex mt-2 p-4 items-center hover:bg-gray-100 rounded-md w-full ${page === '/help' ? 'bg-gray-100' : 'transparent'}`}
              onClick={() => handleClick('/help')}
            >
              <QuestionMarkCircledIcon className="w-5 h-5 mr-2" /> Help
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  page: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
};

export default Sidebar;