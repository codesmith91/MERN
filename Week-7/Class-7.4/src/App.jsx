import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom,
         messagingAtom,
         networkAtom,
         notificationsAtom,
         totalNotificationSelector
       } from './atom'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}


function MainApp() {
    const networkNotificationCount = useRecoilValue(networkAtom);
    const jobsAtomCount = useRecoilValue(jobsAtom);
    const NotificationAtomCount = useRecoilValue(notificationsAtom);
    const messagingAtomCount = useRecoilValue(messagingAtom);
    const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>

      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifiaction ({NotificationAtomCount})</button>
      <buttonUpdater />
      <button>Me ({totalNotificationCount})</button>
    </>
  )
}


function ButtonUpdater() {
   const  setMessagingAtomCount = useSetRecoilState(messagingAtom);
  return <button onClick={() => {
    setMessagingAtomCount(c => c + 1)
  }}>Me</button>
}
export default App
