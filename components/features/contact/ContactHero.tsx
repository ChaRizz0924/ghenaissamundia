import ContactForm from "./ContactForm";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="container max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-8 items-center py-16">
      
      {/* Left Image Placeholder */}
      <div className="relative w-full h-100   rounded-lg overflow-hidden border">
        <Image
        src="/ghenaissa.jpg"
        alt="contact"
        fill
        className="object-cover rounded-xl"
        />
      </div>

      {/* Right Form Preview */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

        <div className="space-y-3">
          <ContactForm />
        </div>
      </div>

    </section>
  )
}