import './index.css';
import Chat from './component/Chat/Chat';
import Header from './component/Header/Header';
import SignIn from './component/SignIn/SignIn';
import ChatContext from './component/ChatContext.tsx';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";


function App() {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  
  return (
    <>
     <ChatContext.Provider>
      <Header />
      {user? <> <Chat /> </>: <SignIn />}
    </ChatContext.Provider>
   </>
  );
}

export default App;
