import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <section className="contact-page">
            <div className="contact-inner">
                <h1 className="contact-title">문의</h1>
                <p className="contact-desc">
                    편하게 남겨주시면 빠르게 연락드리겠습니다.
                </p>
                <ContactForm />
            </div>
        </section>
    );
}
