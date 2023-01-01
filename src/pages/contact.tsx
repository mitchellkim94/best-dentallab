import { navigate } from "gatsby";
import React from "react";
import { MdArrowBack } from "react-icons/md";
import ContactForm from "../components/ContactForm";
import PageLayout from "../components/layouts/PageLayout";

export default function ContactPage()  {
    return (
        <PageLayout>
            <div className="contact">
                <header className="contact_header">
                    <MdArrowBack size={24} onClick={() => navigate(-1)}/>
                </header>
                <h1>
                    베스트 치과기공소에게<br/>무엇이든 물어보세요.
                </h1>
                <ContactForm/>
            </div>
        </PageLayout>
    )
}
