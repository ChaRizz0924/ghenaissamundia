import { blogs } from "@/data/blogs"
import BlogSection from "@/components/features/blog/BlogSection"

type Props = {
  params: Promise<{ slug: string[] }>
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const category = slug[0]

  const filtered = blogs.filter(
    (b) => b.category === category
  )

  return <BlogSection filteredBlogs={filtered} />
}