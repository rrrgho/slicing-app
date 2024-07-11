import { faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

export type IListChat = {
    name: string;
    message: string;
    time: string;
    isRead?: boolean;
}


const ListChat: FC<IListChat> = ({name, message, time, isRead}) => {
    return (
        <div className="flex flex-row justify-around">
            <div className="w-1/6">
                <div className="rounded-full">
                    <img src={`https://avatar.iran.liara.run/public/?id=${Math.floor(
                        Math.random() * 90 + 10
                        )}`} alt="avatar" />
                </div>
            </div>
            <div className="w-4/6">
                <div className="rounded-full">
                    <div className="w-full flex flex-col pl-3">
                        <span className="text-[18px] font-bold text-white">{name}</span>
                        <span className="text-slate-300 text-[15px]">{message}</span>
                    </div>
                </div>
            </div>
            <div className="w-1/6">
                <div className="rounded-full pt-2 text-right flex flex-col justify-end text-end content-end items-end">
                    <span className="text-white text-[13px]">{time}</span>
                    {!isRead && <div className="rounded-full mt-2 w-[22px] h-[22px] bg-primary text-center justify-center items-center content-center flex">
                        <span className="text-white text-[12px]">4</span>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default ListChat;