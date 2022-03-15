import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const projectID = '218ed39c-29e6-457f-a34d-869562e532ba';

const App = () => {
  return (
    <ChatEngine
      height="50vh"
      projectID={projectID}
      // userName={localStorage.getItem('username')}
      // userSecret={localStorage.getItem('password')}
      userName="aaa"
      userSecret="bbb"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
