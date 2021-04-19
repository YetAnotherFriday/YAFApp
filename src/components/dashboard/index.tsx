import { DashboardBody, DashboardProps } from './dashboard'
import { Selection } from './selection'



export const Dashboard: React.FC<DashboardProps> = (props) => {
  return (
    <>
      <Selection />
      < DashboardBody isSignedIn />
    </>
  )
}