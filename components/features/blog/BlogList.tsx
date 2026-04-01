import BlogCard from "./BlogCard"

type Blog = {
  slug: string
  title: string
  description: string
  image: string
  category: string
  date: string
}

type Props = {
  blogs: Blog[]
}

export default function BlogList({ blogs }: Props) {
  return (
    <section className="max-w-6xl w-full mx-auto px-6 py-16 space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} {...blog} />
        ))}
      </div>
    </section>
  )
}