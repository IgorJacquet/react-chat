import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie'
import { ChannelContainer, ChannelListContainer } from './components';

import './App.css';

const apiKey = '3eqx7sqrzqe4';

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
	<div className='app__wrapper'>
			<ChannelListContainer

			/>
			<ChannelContainer

			/>
	</div>
  )
}

export default App