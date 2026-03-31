import StoryBlock from "./StoryBlock"
import SectionHeader from "@/components/common/SectionHeader"

export default function AboutStory() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">

      <StoryBlock
        title="Who I Am"
        content="I am a web developer passionate about building modern web applications..."
        image="/ghenai.jpg"
      />

      <StoryBlock
        title="My Journey"
        content="I started learning programming and explored different technologies..."
        image="/ghenai.jpg"
        reverse
      />

      <StoryBlock
        title="Skills & Growth"
        content="I focus on Next.js, Laravel, and building scalable systems..."
        image="/ghenai.jpg"
      />

      <StoryBlock
        title="Future Goals"
        content="I aim to become a full-stack developer and build impactful systems..."
        image="/ghenai.jpg"
        reverse
      />

    </section>
  )
}