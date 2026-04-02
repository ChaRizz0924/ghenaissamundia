import { Mail, Phone, MapPin, Globe } from "lucide-react"

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    value: "geniomundia1984@email.com",
    link: "mailto:geniomundia1984@email.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+63 963 266 1627",
    link: "tel:+639632661627",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Cebu, Philippines",
    link: "https://www.google.com/maps/place/10%C2%B015'02.4%22N+123%C2%B056'33.5%22E/@10.2527124,123.9422887,16.55z/data=!4m13!1m8!3m7!1s0x33a999258dcd2dfd:0x4c34030cdbd33507!2sCebu+City,+Cebu!3b1!8m2!3d10.2926115!4d123.9021934!16zL20vMDFwX2x5!3m3!8m2!3d10.250672!4d123.942647?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: Globe,
    title: "Social",
    value: "Ghenaissa Mundia",
    link: "https://www.facebook.com/shades.of.ghey",
  },
]

export default function ContactGrid() {
  return (
    <section className="container max-w-6xl w-full mx-auto">
      <div className="grid grid-cols-2 gap-10">
        {contactItems.map((item, index) => {
          const Icon = item.icon

          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-muted rounded-xl flex flex-col items-center text-center space-y-3 transition hover:scale-105 hover:bg-accent"
            >
              <Icon className="w-6 h-6" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.value}
              </p>
            </a>
          )
        })}
      </div>
    </section>
  )
}