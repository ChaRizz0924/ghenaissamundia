import Image from "next/image"

type Props = {
  title: string
  content: string
  image: string
  reverse?: boolean
}

export default function StoryBlock({
  title,
  content,
  image,
  reverse = false,
}: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
  
  {reverse ? (
    <>
      {/* Text first */}
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {content}
        </p>
      </div>

      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden border">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </>
  ) : (
    <>
      {/* Image first */}
      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden border">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {content}
        </p>
      </div>
    </>
  )}
</div>
  )
}