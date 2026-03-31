import Image from "next/image"
import Link from "next/link"

type ImageLinkCardProps = {
  image: string
  alt: string
  href: string
}

export default function ImageLinkCard({
  image,
  alt,
  href,
}: ImageLinkCardProps) {
  return (
    <Link href={href} className="block group">
      
      <div className="relative w-full h-100 overflow-hidden rounded-xl border">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

    </Link>
  )
}