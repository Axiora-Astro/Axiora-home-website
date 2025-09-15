"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ComingSoonBanner() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email)
    }
  }

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Axiora is launching soon – Be the first to know!
          </h2>

          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-balance">
            Join our waitlist and get exclusive early access to the future of data analysis
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-black border-0 rounded-xl px-6 py-3 text-lg flex-1"
                required
              />
              <Button
                type="submit"
                className="bg-black hover:bg-black/90 text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                Notify Me
              </Button>
            </form>
          ) : (
            <div className="bg-white/10 rounded-xl p-6 max-w-md mx-auto">
              <div className="text-2xl mb-2">🎉</div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">You're on the list!</h3>
              <p className="text-primary-foreground/90">We'll notify you as soon as Axiora is ready to launch.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
