import StoryBlock from "./StoryBlock"

export default function AboutStory() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">

      <StoryBlock
        title="Who I Am"
        content="Hi! I'm Ghenaissa, a proud IT student at Cordova Public College. I have a passion for programming and technology, and I am dedicated to learning and growing in the field. I enjoy exploring new technologies and building projects that solve real-world problems. I am always eager to take on new challenges and collaborate with others to create innovative solutions. My goal is to become a skilled full-stack developer and contribute to impactful projects in the tech industry."
        image="/ghenaissa.jpg"
      />

      <StoryBlock
        title="My Journey"
        content="Way back on my young days, I was fascinated by how websites and applications worked. This curiosity led me to start learning programming languages like HTML, CSS, and JavaScript. Over time, I delved deeper into web development, exploring frameworks like Next.js and Laravel. Along the way, I've built various projects that have helped me grow my skills and gain practical experience. My journey has been filled with learning, experimentation, and a lot of fun as I continue to pursue my passion for technology."
        image="/journey.jpg"
        reverse
      />

      <StoryBlock
        title="Skills & Growth"
        content="Throughout my learning journey, I've acquired a solid foundation in web development technologies, including HTML, CSS, JavaScript, and frameworks like Next.js and Laravel. I am constantly seeking opportunities to expand my skill set and stay updated with the latest trends in the tech industry. I enjoy working on projects that challenge me to learn new technologies and improve my problem-solving abilities. My goal is to continue growing as a developer and contribute to impactful projects that make a difference."
        image="/skills.jpg"
      />

      <StoryBlock
        title="Future Goals"
        content="I want to be in the Philippine Navy as a Computer Systems Analyst. I aspire to contribute my skills and knowledge to the defense sector, leveraging technology to enhance national security and support the mission of the Philippine Navy. I am committed to continuous learning and growth in my field, and I look forward to making a positive impact through my work in the future. I am excited about the opportunities that lie ahead and am eager to take on new challenges as I pursue my career goals. I am confident that with dedication and hard work, I can achieve my aspirations and contribute meaningfully to the field of technology and national defense."
        image="/future.jpg"
        reverse
      />

    </section>
  )
}