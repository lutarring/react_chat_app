import { useState } from 'react';
import { createContainer } from 'unstated-next';

// main func
const useChatContainer = () => {
  


  const [messages, setMessage] = useState([]);

    return {
        messages,
        setMessage,
    }
}

const ChatContext = createContainer(useChatContainer);
export default ChatContext;