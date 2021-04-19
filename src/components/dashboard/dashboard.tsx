import React from 'react';
import style from './dashboard.module.css'

export interface DashboardProps {
  isSignedIn: boolean
}


export const DashboardBody: React.FC<DashboardProps> = ({ isSignedIn }) => {
  return (
    <div className={style.dashboardWrapper}>
      <div className={style.tickerTimeChart} >

      </div>
      <div className={style.tickerTimeChart} >

      </div>
      <div className={style.tickerTimeChart} >

      </div>
    </div>
  )
}
