export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-6 text-sm">
        
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-2">Ghenaissa Marie J. Mundia</h3>
          <p className="text-muted-foreground">
            A personal portfolio bound to people who wants to know me. It showcase my projects and certificates to prove my greatness. 
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-2">Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/projects" className="hover:underline">Projects</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-muted-foreground">geniomundia1984@example.com</p>
          <p className="text-muted-foreground">+63 963 266 1627</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs pb-4 text-muted-foreground">
        © {new Date().getFullYear()} Ghenaissa Mundia. All rights reserved.
      </div>
    </footer>
  )
}