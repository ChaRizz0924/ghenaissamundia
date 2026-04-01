"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert"

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // ✅ Simple validation
    if (!form.name || !form.email || !form.message) {
      setStatus("error")
      return
    }

    setStatus("success")

    setForm({
      name: "",
      email: "",
      message: "",
    })
  }

  // ✅ Auto-hide alert
  useEffect(() => {
    if (status !== "idle") {
      const timer = setTimeout(() => setStatus("idle"), 3000)
      return () => clearTimeout(timer)
    }
  }, [status])

  return (
    <section className="container max-w-6xl w-full mx-auto p-1">

      {/* ✅ Success Alert */}
      {status === "success" && (
        <Alert className="mb-4">
          <AlertTitle>Message Sent!</AlertTitle>
          <AlertDescription>
            Thank you, your message has been successfully submitted.
          </AlertDescription>
        </Alert>
      )}

      {/* ❌ Error Alert */}
      {status === "error" && (
        <Alert variant="destructive" className="mb-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Please fill in all fields before submitting.
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <Input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <Input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <Textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>

      </form>
    </section>
  )
}