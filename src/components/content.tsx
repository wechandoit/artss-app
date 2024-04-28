import * as React from 'react'
import { useState } from 'react'

import Patient from '../pages/patient'
import Patients from '../pages/patients'

import {
  HomeIcon,
  PersonIcon,
  BellIcon,
  GearIcon,
  QuestionMarkCircledIcon,
} from '@radix-ui/react-icons'

const Content = ({ page }) => {
  const renderPage = () => {
    switch (page) {
      case 'patient':
        return <Patient />
    }
  }

  return (
    <div>
      <div>{renderPage()}</div>
    </div>
  )
}

export default Content
