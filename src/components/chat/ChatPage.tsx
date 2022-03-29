import React, { Fragment } from "react";
import ChatArea from "./ChatArea";
import MessageSender from "./MessageSender";
import Sidebar from "./Sidebar/index";
import StyledPageContainer from "./StyledPageContainer";

const ChatPage = () =>(
	<Fragment>
		<StyledPageContainer>
			<ChatArea />
			<MessageSender/>
		</StyledPageContainer>
		<Sidebar />
	</Fragment>
);

export default ChatPage