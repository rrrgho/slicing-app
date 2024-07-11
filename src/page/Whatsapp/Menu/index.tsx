import StatusIcon from '../assets/images/update-icon.png'
import CallIcon from '../assets/images/call-icon.png'
import CommunityIcon from '../assets/images/community-icon.png'
import SettingIcon from '../assets/images/setting-icon.png'
import ChatIcon from '../assets/images/chat-icon.png'


import ChatActive from '../assets/images/chat-active.png'
import StatusActive from '../assets/images/update-active.png'
import CallActive from '../assets/images/call-active.png'
import CommunityActive from '../assets/images/community-active.png'
import SettingActive from '../assets/images/setting-active.png'
import { useState } from 'react'

const Menu = () => {
    const [icon, setIcon] = useState("CHAT")
    return (
        <div className="flex justify-around h-[65px]">
            <div className='pt-2 pl-2'>
                <button className='bg-transparent border-0 h-full w-full' onClick={() => {setIcon('STATUS')}}>
                    <img src={icon === 'STATUS' ? StatusActive : StatusIcon} className='h-full' alt="Icon" />
                </button>
            </div>
            <div className="pt-2 pl-2">
                <button className="bg-transparent border-0 h-full w-full" onClick={() => {setIcon('CALL')}}>
                    <img src={icon === 'CALL' ? CallActive : CallIcon} alt="Call" className='h-full'  />
                </button>
            </div>
            <div className="pt-2 pl-2">
                <button className="bg-transparent border-0 h-full w-full" onClick={() => {setIcon('COMMUNITY')}}>
                    <img src={icon === 'COMMUNITY' ? CommunityActive : CommunityIcon} alt="Comm" className='h-full' />
                </button>
            </div>
            <div className="pt-2 pl-2">
                <button className="bg-transparent border-0 h-full w-full" onClick={() => {setIcon('CHAT')}}>
                    <img src={icon === 'CHAT' ? ChatActive : ChatIcon} alt="Chat" className='h-full'  />
                </button>
            </div>
            <div className="pt-2 pl-2">
                <button className="bg-transparent border-0 h-full w-full" onClick={() => {setIcon('SETTING')}}>
                    <img src={icon === 'SETTING' ? SettingActive : SettingIcon} alt="Chat" className='h-full'  />
                </button>
            </div>
        </div>
    )
}

export default Menu;