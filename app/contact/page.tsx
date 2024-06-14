import ContactCards from "./ContactCards";
import ContactForm from "./ContactForm";
import GetInTouch from "./GetInTouch";
import Hero from "./Hero";


export default function page() {
  return (
    <div className="w-full min-h-screen relative">
        <Hero />
        <GetInTouch />
        <ContactForm />
        <ContactCards />
    </div>
  )
}
