import Image from "next/image"
import Link from "next/link"

type Props = {
  slug: string
  title: string
  description: string
  image: string
  category: string
  date: string
}

export default function BlogCard({
  slug,
  title,
  description,
  image,
  category,
  date,
}: Props) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      
      <div className="relative w-full h-60   rounded-lg overflow-hidden border">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
      </div>

      <h3 className="mt-3 text-lg font-semibold group-hover:underline">
        {title}
      </h3>

      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </Link>
  )
}