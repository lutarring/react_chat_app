import './index.css';
import Chat from './component/Chat/Chat';
import Header from './component/Header/Header';
import Send from './component/Send/Send';
import SignIn from './component/SignIn/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";



const auth = getAuth();



function App() {
  const [user] = useAuthState(auth);
  return (
    <>
    <Header />
    {user? <><Send/ > <Chat /> </>: <SignIn />}
    </>
  );
}

export default App;
