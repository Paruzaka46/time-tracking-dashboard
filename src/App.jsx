import { useState, useEffect } from 'react'
import jsonData from "./data.json"
import Profile from './Profile'
import TimeTrack from './TimeTrack'

function App() {
  const [timeData, setTimeData] = useState(jsonData)
  const [mode, setMode] = useState({
    daily: true,
    weekly: false,
    monthly: false
})

  const changeMode = (pick) => {
    setMode(() => {
      if (pick === "daily") {
        return {
          daily: true,
          weekly: false,
          monthly: false
        }
      }
      if (pick === "weekly") {
        return {
          daily: false,
          weekly: true,
          monthly: false
        }
      }
      if (pick === "monthly") {
        return {
          daily: false,
          weekly: false,
          monthly: true
        }
      }
    })
  }
  
  return (
    <div className='container'>
      <Profile onPick={changeMode}/>
      {timeData.map((timeMode, index) => {
        return <TimeTrack 
          key={index} 
          title={timeMode.title} 

          current={mode.daily ? 
          timeMode.timeframes.daily.current
          : mode.weekly ?
          timeMode.timeframes.weekly.current
          : timeMode.timeframes.monthly.current}

          previous={mode.daily ? 
          timeMode.timeframes.daily.previous
          : mode.weekly ?
          timeMode.timeframes.weekly.previous
          : timeMode.timeframes.monthly.previous}
          />
      })}
    </div>
  )
}

export default App
