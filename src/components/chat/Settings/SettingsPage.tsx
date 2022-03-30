import React, { Fragment, useState } from 'react';
import { AiOutlineUserAdd, AiOutlineUserDelete, AiOutlineAudioMuted, } from 'react-icons/ai';
import { GoMute, GoUnmute } from 'react-icons/go';
import { RiRotateLockFill, RiAdminLine } from 'react-icons/ri';
import { GiPadlock, GiPadlockOpen } from 'react-icons/gi';

const handleAddUser = () => {
		
}

// 1 = owner 2 = admin 3 = password=true


const SettingsPage = () => {

		return (
		<div className='new-user'>
			<h1>
				<u>
					SETTINGS:
				</u> 
			</h1>
		<h2>
			Add user : 
				<button onClick={handleAddUser}>
					<AiOutlineUserAdd />
				</button>
		</h2>
		{ 1 && (
			<h2>
				Make a member admin : 
					<button onClick={handleAddUser}>
						<RiAdminLine />
					</button>
			</h2>)
		}
		{ (1 || 2) && (
			<h2>
				Ban user : 
					<button onClick={handleAddUser}>
						<AiOutlineUserDelete />
					</button>
			</h2>)
		}
		{ 1 && !3 && (
			<h2>
				Add password : 
					<button onClick={handleAddUser}>
						<GiPadlock />
					</button>
			</h2>)
		}
		{ 1 && 3 && (
			<h2>
				Modify password : 
					<button onClick={handleAddUser}>
						<RiRotateLockFill />
					</button>
			</h2>)
		}
		{ 1 && 3 && (
			<h2>
				Remove password : 
					<button onClick={handleAddUser}>
						<GiPadlockOpen />
					</button>
			</h2>)
		}
		{ (1 || 2) && (
			<h2>
				Mute user : 
					<button onClick={handleAddUser}>
						<GoMute />
					</button>
			</h2>)
		}
		{ (1 || 2) && (
			<h2>
				Unmute user : 
					<button onClick={handleAddUser}>
						<GoUnmute />
					</button>
			</h2>)
		}
		</div>

	)
};

export default SettingsPage;