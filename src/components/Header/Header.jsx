import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-center items-center w-full gap-4 p-4 bg-gray-800' >
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          `px-4 py-2 rounded transition-colors duration-300 ease-in-out ${isActive
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`
        }
      >Home</NavLink>
      <NavLink
        to={'/form'}
        className={({ isActive }) =>
          `px-4 py-2 rounded transition-colors duration-300 ease-in-out ${isActive
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`
        }
      >Form</NavLink>
      <NavLink
        to={'/progress-bar'}
        className={({ isActive }) =>
          `px-4 py-2 rounded transition-colors duration-300 ease-in-out ${isActive
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`
        }
      >Progress Bar</NavLink>
      <NavLink
        to={'/auto-complete'}
        className={({ isActive }) =>
          `px-4 py-2 rounded transition-colors duration-300 ease-in-out ${isActive
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`
        }
      >Auto complete</NavLink>
      <NavLink
        to={'/accordion'}
        className={({ isActive }) =>
          `px-4 py-2 rounded transition-colors duration-300 ease-in-out ${isActive
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`
        }
      >Accordion</NavLink>
      <NavLink
        to={'/chip-input'}
        className={({ isActive }) =>
          `px-4 py-2 rounded transition-colors duration-300 ease-in-out ${isActive
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`
        }
      >Chip Input</NavLink>
    </div>
  )
}

export default Header