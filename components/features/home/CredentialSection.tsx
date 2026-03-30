import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "@/components/common/SectionHeader"

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

    </section>
  )
}