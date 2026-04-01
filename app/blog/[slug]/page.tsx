import { blogs } from "@/data/blogs"
import { notFound } from "next/navigation"
import Image from "next/image"


type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params

  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) return notFound()

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      
      <h1 className="text-3xl font-bold mb-6">
        {blog.title}
      </h1>

      <div className="relative w-full h-72 mb-6">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <p className="text-muted-foreground leading-relaxed">
        {blog.content}
      </p>

    </section>
  )
}