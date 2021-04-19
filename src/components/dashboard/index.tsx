import { DashboardBody, DashboardProps } from './dashboard'
import { Selection, SelectionProps } from './selection'

export * from './dashboard'
export * from './selection'

export const Dashboard: React.FC<DashboardProps> = (props) => {
  return (
    <>
      <Selection />
      < DashboardBody isSignedIn />
    </>
  )
}