import { useState } from 'react';
import { createContainer } from 'unstated-next';

// main func
const useChatContainer = () => {

  const [messages, setMessage] = useState([]);
  const [counts, setCounts] = useState(0);

    return {
        messages,
        setMessage,
        counts,
        setCounts,
    }
}

const ChatContext = createContainer(useChatContainer);
export default ChatContext;