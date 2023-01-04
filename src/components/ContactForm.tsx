import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useRecoilState } from "recoil";
import { alertMessages } from "../store/alert";

function encode(data: any) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
}

export default function ContactForm() {
    const [input, setInput] = useState({});
    const [messages, setMessage] = useRecoilState(alertMessages);

    const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const onSubmit: FormEventHandler = async (e) => {
        e.preventDefault();
        
        const form = e.currentTarget;
        try {
            const result = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({
                    'form-name': form.getAttribute('name'),
                    ...input,
                }),
            });
            
            if (result.status >= 400) {
                throw Error("문의 등록에 실패하였습니다.");
            }
            
            setMessage([...messages, '문의가 등록되었습니다.']);

            // @ts-ignore
            window.gtag("event", "receive-email");

        } 
        catch (error) {
            // @ts-ignore
            window.gtag("event", "fail-email");

            console.error(error);
            alert("문의등록에 실패하였습니다.");   
        }
    }
    return(
        <form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={onSubmit}
        >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
                <label>
                    Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                </label>
            </p>

            
            <div className="contact_input">
                <label>고객명 또는 회사명</label>
                <input type="text" name="name" onChange={handleChange} />
            </div>

            <div className="contact_input">
                <label>연락처</label>
                <input type="text" name="phone" onChange={handleChange} />
            </div>

            <div className="contact_input">
                <label>E-mail</label>
                <input type="email" name="email" onChange={handleChange} />
            </div>

            <div className="contact_input">
                <label>문의내용</label>
                <textarea name="message" onChange={handleChange} placeholder={'ex) OO치과입니다. 모든 치과보철물에 대한 견적문의드립니다.'}/>
            </div>

            <div className="btn_wrap">
                <button type="submit">문의하기</button>
            </div>
        </form>
    )
}