import { navigate } from "gatsby";
import React, { ChangeEventHandler, EventHandler, FormEventHandler, useState } from "react";
import BlockButton from "../components/buttons/BlockButton";
import PageLayout from "../components/layouts/PageLayout";

function encode(data: any) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
}
  

export default function ContactPage()  {
    const [input, setInput] = useState({});

    const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const onSubmit: FormEventHandler = async (e) => {
        console.log("보낸다");

        e.preventDefault()

        const form = e.currentTarget;

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...input,
            }),
        }).then().catch((error) => console.log(error));
        
    }
    
    return (
        <PageLayout>
            <div className="contact">
                <h1>
                    베스트 치과기공소에게<br/>무엇이든 물어보세요.
                </h1>
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
            </div>
        </PageLayout>
    )
}
