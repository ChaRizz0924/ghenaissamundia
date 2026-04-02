import Image from "next/image"
import { Button } from "@/components/ui/button"

type Props = {
  title: string
  description: string
  image: string
  link: string
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: Props) {
  return (
    <div className="space-y-3">
      
      {/* Image */}
      <div className="relative w-full h-80 md:h-100 border rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text lines (like your sketch) */}
      <div>
        <h3 className="font-semibold text-lg md:text-xl">{title}</h3>
        <p className="text-sm md:text-base text-muted-foreground">
          {description}
        </p>
         <Button variant="outline" size="sm" className="mt-2">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                 Visit Website
            </a>
    </Button>
      </div>

    </div>
  )
}