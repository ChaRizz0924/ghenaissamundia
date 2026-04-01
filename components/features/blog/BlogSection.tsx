import { blogs } from "@/data/blogs"
import BlogList from "./BlogList"
import BlogFilters from "./BlogFilters"
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import SectionHeader from "@/components/common/SectionHeader";

type Props = {
  filteredBlogs?: typeof blogs
}

export default function BlogSection({ filteredBlogs }: Props) {
  const data = filteredBlogs ?? blogs

  return (
    <>
        <Navbar />
        <SectionHeader title="Blog" subtitle="Insights, stories, and updates from our team." />
        <BlogFilters />
        <BlogList blogs={data} />
        <Footer />
    </>
  )
}