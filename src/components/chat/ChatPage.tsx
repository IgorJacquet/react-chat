import React, { Fragment } from "react";
import ChatArea from "./ChatArea";
import MessageSender from "./MessageSender";
import Sidebar from "./Sidebar/index";
import StyledPageContainer from "./StyledPageContainer";

const ChatPage = () =>(
	<Fragment>
		<StyledPageContainer>
			<ChatArea />
			<Sidebar />
			<MessageSender/>
		</StyledPageContainer>
	</Fragment>
);

export default ChatPage