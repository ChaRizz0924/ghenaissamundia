import { blogs } from "@/data/blogs"
import BlogSection from "@/components/features/blog/BlogSection"

type Props = {
  params: Promise<{ slug?: string[] }>
}

export default async function DatePage({ params }: Props) {
  const { slug } = await params

  let filtered = blogs

  if (slug) {
    const [year, month, day] = slug

    filtered = blogs.filter((blog) => {
      const d = new Date(blog.date)

      if (year && d.getFullYear().toString() !== year) return false
      if (month && (d.getMonth() + 1).toString() !== month) return false
      if (day && d.getDate().toString() !== day) return false

      return true
    })
  }

  return (
    <BlogSection filteredBlogs={filtered} />
  );

}