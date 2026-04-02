import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/common/SectionHeader"
import ImageLinkCard from "@/components/common/ImageLinkCard"

export default function CredentialsSection() {
  return (
    <section
      id="credentials"
      className="max-w-6xl mx-auto px-6 py-16 space-y-6"
    >
      {/* Title */}
      <SectionHeader
        title="Credentials"
        subtitle="A quick overview of my education, skills, and experience."
        />

      {/* TOP ROW (2 boxes) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-2">Education</h3>
            <p className="text-muted-foreground text-sm">
              Bachelor of Science in Information Technology  
              <br />
              Focused on Web Development and Systems Design.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-2">Skills</h3>
            <p className="text-muted-foreground text-sm">
              Next.js, React, Laravel, MySQL, Tailwind CSS  
              <br />
              Building responsive and scalable web apps.
            </p>
          </CardContent>
        </Card>

      </div>

      {/* BOTTOM ROW (1 wide box) */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-2">Experience</h3>
          <p className="text-muted-foreground text-sm">
            Developed multiple academic and personal projects including
            portfolio websites, CRUD systems, and full-stack applications
            using modern frameworks.
          </p>
        </CardContent>
      </Card>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <ImageLinkCard
        image="/Array Expert.jpg"
        alt="Array Expert"
        href="/Array Expert.jpg" />

      <ImageLinkCard
        image="/Code Relay.jpg"
        alt="Code Relay"
        href="/Code Relay.jpg" />

      <ImageLinkCard
        image="/Creative Web Design.jpg"
        alt="Creative Web Design"
        href="/Creative Web Design.jpg" />

      <ImageLinkCard
        image="/E2P's.jpg"
        alt="E2P's"
        href="/E2P's.jpg" />

      <ImageLinkCard
        image="/Diploma.jpg"
        alt="Diploma"
        href="/Diploma.jpg" />

      <ImageLinkCard
        image="/With High Honors.jpg"
        alt="With High Honors"
        href="/With High Honors.jpg" />

      <ImageLinkCard
        image="/Work Immersion.jpg"
        alt="Work Immersion"
        href="/Work Immersion.jpg" />

      <ImageLinkCard
        image="/Loyalty Award.jpg"
        alt="Loyalty Award"
        href="/Loyalty Award.jpg" />

      <ImageLinkCard
        image="/Earthquake Drill.jpg"
        alt="Earthquake Drill"
        href="/Earthquake Drill.jpg" />

      <ImageLinkCard
        image="/Breast Cancer Awareness Month.jpg"
        alt="Breast Cancer Awareness Month"
        href="/Breast Cancer Awareness Month.jpg" />
    </div>

      {/* PDF Preview */}
      <div className="w-full h-298 border rounded-lg overflow-hidden">
        <iframe
          src="/formal-resume.pdf"
          className="w-full h-full"
        />
      </div>
    </section>
  )
}