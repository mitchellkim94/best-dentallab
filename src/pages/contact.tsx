import React from "react";
import ContactForm from "../components/ContactForm";
import PageLayout from "../components/layouts/PageLayout";

export default function ContactPage()  {
    return (
        <PageLayout>
            <div className="contact">
                <h1>
                    베스트 치과기공소에게<br/>무엇이든 물어보세요.
                </h1>
                <ContactForm/>
            </div>
        </PageLayout>
    )
}
