type SectionHeaderProps = {
  title: string
  subtitle?: string
  align?: "center" | "left"
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${align === "center" ? "text-center" : "text-left"}`}>
      <br></br>
      <br></br>
      <h2 className="text-2xl md:text-3xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

    </div>
  )
}