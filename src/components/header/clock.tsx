import React, { useState, useEffect } from 'react'

const Clock = () => {
  // state for current time
  const [currentTime, setCurrentTime] = useState(new Date())

  // effect to update time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // clean interval for memory leaks
    return () => clearInterval(intervalId)
  }, [])

  // format current time
  const formattedTime = currentTime.toLocaleTimeString()

  return (
    <div className="flex-1 px-8 py-4 bg-gray-100 items-center">
      <p className="whitespace-nowrap text-center">{formattedTime}</p>
    </div>
  )
}

export default Clock
