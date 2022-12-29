import React, { useEffect } from "react";
import { MdCheck, MdClose } from "react-icons/md";
import { useRecoilState } from "recoil";
import { AlertMessages, alertMessages } from "../../store/alert";
import IconButton from "../buttons/IconButton";

export default function PopAlert() {
    const [messages, setMessage] = useRecoilState<AlertMessages>(alertMessages);

    const offMessage = (index: number) => {
        const msg = [...messages];
        msg.splice(index, 1);
        setMessage(msg);
    }

    useEffect(() => {
        console.log(messages);
        
    }, []);

    return (
        <div className="pop_alert--container">
            {
                messages.map((message, idx) => (
                    <div key={`msg#${idx}`} className="pop_alert--box">
                        <div className="pop_alert--message">
                            <i className="pop_alert--icon">
                                <MdCheck size={18}/>
                            </i>
                            <span>{message}</span>
                        </div>
                        <IconButton 
                            icon={<MdClose size={24}/>}
                            onClick={() => offMessage(idx)}    
                        />
                    </div>
                ))
            }
        </div>
    )
}