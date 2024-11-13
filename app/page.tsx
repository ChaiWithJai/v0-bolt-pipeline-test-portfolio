'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { LinkedinIcon, PodcastIcon as SpotifyIcon, FileText, Send, Play, Pause, Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const controls = useAnimation()
  const [email, setEmail] = useState('aniruddha.murthy@gmail.com')

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    })
  }, [controls])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const testimonials = [
    {
      name: "Emily B.",
      role: "Product Designer",
      text: "You're incredibly creative, curious and smart and I am confident these qualities will take you far in product management and design."
    },
    {
      name: "Joe H.",
      role: "Product Manager",
      text: "Although we worked together for a short period of time, it was clear that you bring a thoughtful and strategic, yet futuristic approach to UX/UI."
    },
    {
      name: "Brian T.",
      role: "Senior Product Manager",
      text: "In a short amount of time, you have made a tremendous impact helping us bring forward experience into our design process. Your contributions to the user experience across all of our clients have been exceptional."
    },
    {
      name: "Sam K.",
      role: "Designer",
      text: "Your skill as a product designer, coupled with deep understanding of user experience, has consistently elevated our projects."
    },
    {
      name: "Deepak G.",
      role: "Product Manager",
      text: "You brought a unique and insightful perspective to our projects from day 1! It was a pleasure having the opportunity to work with you."
    }
  ]

  const lifeImages = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format",
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 flex items-center justify-between p-6">
        <Link href="/" className="text-xl font-medium">
          Aniruddha
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#fun" className="text-gray-600 hover:text-gray-900 transition-colors">
            Fun
          </Link>
          <Link href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">
            Work
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About Me
          </Link>
          <Button variant="secondary" className="rounded-full transition-all hover:bg-gray-200">
            Say Hello!
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link href="#fun" className="text-gray-600 hover:text-gray-900 transition-colors">
                Fun
              </Link>
              <Link href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">
                Work
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About Me
              </Link>
              <Button variant="secondary" className="rounded-full transition-all hover:bg-gray-200">
                Say Hello!
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="px-6 pt-32 pb-32 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-xl md:text-2xl mb-4 text-gray-600">Humanize Product</h2>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Strategic,
            <br />
            Playful.
          </h1>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl"
        >
          I create products that catch attention and drive meaningful change, focusing on simplicity and emotional connection.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12"
        >
          <Button className="rounded-full px-6 py-4 md:px-8 md:py-6 text-base md:text-lg transition-all hover:shadow-lg">
            Explore My Work
          </Button>
        </motion.div>
      </motion.section>

      {/* Fun Stuff Section */}
      <section id="fun" className="bg-gray-50 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Fun stuff first.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                <motion.div 
                  animate={{ 
                    scale: isPlaying ? [1, 1.2, 1] : 1,
                    transition: { repeat: Infinity, duration: 1.5 }
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format"
                    alt="Audio waveform"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </motion.div>
              </div>
              <h3 className="font-medium mb-2">Rap song created using AI</h3>
              <p className="text-sm text-gray-600 mb-4">"Unrivaled Legacy"</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format"
                  alt="AI Metaphors visualization"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <h3 className="font-medium mb-2">Underlying meaning of metaphors using AI</h3>
              <p className="text-sm text-gray-600 mb-4">Metaphorical Symphony</p>
              <Button variant="outline" size="sm">Know More</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="work" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">I work well with others.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl">
                  <p className="text-sm mb-4">{testimonial.text}</p>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life Section */}
      <section id="about" className="px-6 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">My life revolves around...</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {lifeImages.map((src, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`Life photo ${i + 1}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-24 bg-orange-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center gap-4 flex-wrap">
            <span className="text-orange-500">✷</span> 
            let's build 
            <span className="text-orange-500">✷</span> 
            SAY HI!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Input 
              type="email" 
              value={email}
              readOnly
              className="flex-1"
            />
            <Button onClick={copyEmail}>
              <Send className="h-4 w-4 mr-2" />
              Copy Email
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8">
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <FileText className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <SpotifyIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}