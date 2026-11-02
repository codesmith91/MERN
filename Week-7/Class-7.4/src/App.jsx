import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom } from './atom'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}


function MainApp() {
    const networkNotificationCount = useRecoilValue(networkAtom);
    const jobsAtomCount = useRecoilValue(jobsAtom);
    const NotificationAtomCount = useRecoilValue(networkAtom);
    const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);


  return (
    <>
      <button>Home</button>

      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifiaction ({NotificationAtomCount})</button>

      <button onClick={() => {
        setMessagingAtomCount(c => c +1);
      }}>Me</button>
    </>
  )
}

export default App
