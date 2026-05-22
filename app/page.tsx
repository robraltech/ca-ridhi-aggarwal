"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Star,
  MessageCircle,
  Calendar,
  Folder,
  Settings,
  CheckCircle2,
  ArrowRight,
  Users,
  Shield,
  Zap,
  Clock,
  FileText,
  Calculator,
  Building2,
  BookOpen,
  FileCheck,
  Briefcase,
  IndianRupee,
  UserCheck,
  Lightbulb,
} from "lucide-react"



export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
  <Image
    src="/ca-logo.png"
    alt="CA India Logo"
    width={70}
    height={70}
    className="h-14 w-auto"
    priority
  />

  <div className="leading-tight">
    <div className="font-bold text-primary text-sm md:text-base">
      RIDHI AGGARWAL
    </div>

    <div className="text-primary font-semibold text-sm md:text-base">
      & ASSOCIATES
    </div>

    <div className="text-muted-foreground text-[10px] md:text-xs tracking-wide">
      CHARTERED ACCOUNTANTS
    </div>
  </div>
</Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium text-foreground hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary">
              About Us
            </Link>
            <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Services
            </Link>
            <Link href="#why-us" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Why Us
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Resources
            </Link>
            <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Contact Us
            </Link>
          </nav>

          <Button
            asChild
            className="bg-primary hover:bg-primary/90"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd4yU8c-plVYYtVVRIQ6Czfnvo4lfroHABMwV6DH6qKEcM2yw/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Consultation
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f8f9fc] via-[#f0f4f8] to-[#e8eef5] overflow-hidden">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-4 items-center">
            {/* Left Content */}
            <div className="space-y-6 z-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1a2b4a] leading-[1.1] tracking-tight text-balance">
                Smart Tax & Compliance
                <br />
                Solutions for
                <br />
                Individuals & Businesses
              </h1>
              <p className="text-[#5a6a7a] text-base md:text-lg leading-relaxed max-w-[560px]">
                Reliable, transparent and personalized CA services
                <br className="hidden sm:block" />
                to help you stay compliant and focus on growth.
              </p>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                    <span className="text-primary text-xs font-bold">G</span>
                  </div>
                  <span className="text-[#1a2b4a] font-medium">ICAI Qualified CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-[#1a2b4a] font-medium">Direct CA Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded border border-primary flex items-center justify-center">
                    <IndianRupee className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-[#1a2b4a] font-medium">Transparent Pricing</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  asChild
                  className="h-14 px-10 rounded-xl bg-[#1a2b4a] hover:bg-[#0f1d33] text-white font-semibold text-base shadow-md"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd4yU8c-plVYYtVVRIQ6Czfnvo4lfroHABMwV6DH6qKEcM2yw/viewform?usp=publish-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Free Consultation
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-14 px-8 rounded-xl gap-2 border-[#d1d5db] bg-white hover:bg-gray-50 text-[#1a2b4a] font-medium text-base shadow-sm"
                >
                  <a
                    href="https://wa.me/918527728379?text=Hi%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <svg
                      className="h-5 w-5 text-[#25D366]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                    </svg>

                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Content - Image and Stats */}
            <div className="relative flex justify-center lg:justify-end items-end">
              <div className="relative w-full max-w-[700px]">
                <Image
                  src="/lady.jpg"
                  alt="CA Ridhi Aggarwal"
                  width={700}
                  height={650}
                  className="object-cover object-bottom scale-110"
                  priority
                />
              </div>

              {/* Stats Card */}
              <div className="absolute top-24 right-2 lg:right-6 bg-white rounded-2xl shadow-2xl p-6 w-48">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                  <div className="text-primary">
                    <Users className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1a2b4a] text-xl">100+</div>
                    <div className="text-xs text-[#8a9aaa]">Clients Served</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-4 border-b border-gray-100">
                  <div className="text-primary">
                    <Shield className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1a2b4a] text-xl">100%</div>
                    <div className="text-xs text-[#8a9aaa]">Compliance Focus</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4">
                  <div className="text-primary">
                    <Clock className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1a2b4a] text-xl">Fast</div>
                    <div className="text-xs text-[#8a9aaa]">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Banner - Dark Navy */}
        <div className="bg-[#1a2b4a] py-5">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24">
              <p className="text-white/90 text-center lg:text-left">
                Trusted by <span className="font-semibold text-white">Individuals</span>,{" "}
                <span className="font-semibold text-white">Freelancers</span> &{" "}
                <span className="font-semibold text-white">Small Businesses</span> across India
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <svg className="h-7 w-7" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="font-bold text-white text-lg">5.0</span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white/70 text-sm">(Google Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20">
          <h2 className="text-3xl font-bold text-center">Our Services</h2>
          <div className="w-12 h-1 bg-[#1a2b4a] mx-auto mt-2 rounded-full mb-12"></div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <FileText className="h-8 w-8 text-primary" />,
                title: "Income Tax Filing",
                description: "ITR filing for salaried individuals, professionals and businesses.",
              },
              {
                icon: <Calculator className="h-8 w-8 text-primary" />,
                title: "GST Services",
                description: "GST registration, returns filing and advisory.",
              },
              {
                icon: <Building2 className="h-8 w-8 text-primary" />,
                title: "Business Registration",
                description: "Private Limited, LLP, Partnership, Proprietorship & more.",
              },
              {
                icon: <BookOpen className="h-8 w-8 text-primary" />,
                title: "Accounting & Bookkeeping",
                description: "Accurate and timely bookkeeping to keep your business organized.",
              },
              {
                icon: <FileCheck className="h-8 w-8 text-primary" />,
                title: "TDS & Compliance",
                description: "TDS filing, returns and other statutory compliances.",
              },
              {
                icon: <Briefcase className="h-8 w-8 text-primary" />,
                title: "Business Advisory",
                description: "Financial planning, budgeting and guidance for business growth.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border border-[#d9dee7] shadow-none hover:shadow-md transition-shadow rounded-xl"
              >
                <CardContent className="p-5 min-h-[160px] flex items-start gap-5">
                  <div className="bg-primary/10 min-w-[72px] h-[72px] rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>

                  <div className="text-left pt-1">
                    <h3 className="font-bold text-lg tracking-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20">
          <h2 className="text-3xl font-bold text-center">
            Why Choose Ridhi Aggarwal & Associates?
          </h2>
          <div className="w-12 h-1 bg-[#1a2b4a] mx-auto mt-2 rounded-full mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-4">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Up-to-Date Knowledge",
                description: "Latest laws, notifications and compliance updates.",
              },
              {
                icon: <UserCheck className="h-8 w-8" />,
                title: "Direct CA Interaction",
                description: "Work directly with CA, no middle layer.",
              },
              {
                icon: <IndianRupee className="h-8 w-8" />,
                title: "Affordable Pricing",
                description: "Transparent fees with no hidden charges.",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Fast Turnaround",
                description: "Timely delivery and quick response.",
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Personalized Solutions",
                description: "Tailored services as per your needs.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#eef5ff] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{item.icon}</div>
                </div>
                <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Simple Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20">
          <h2 className="text-3xl font-bold text-center">
            Our Simple Process
          </h2>
          <div className="w-12 h-1 bg-[#1a2b4a] mx-auto mt-2 rounded-full mb-12"></div>

          <div className="grid md:grid-cols-4 gap-6 lg:gap-4 relative">
            {[
              {
                icon: <Calendar className="h-8 w-8" />,
                step: "1",
                title: "Book Consultation",
                description: "Schedule a free consultation with us.",
              },
              {
                icon: <Folder className="h-8 w-8" />,
                step: "2",
                title: "Share Documents",
                description: "Share your documents securely with us.",
              },
              {
                icon: <Settings className="h-8 w-8" />,
                step: "3",
                title: "We Handle Everything",
                description: "We analyze and take care of the entire process.",
              },
              {
                icon: <CheckCircle2 className="h-8 w-8" />,
                step: "4",
                title: "Timely Delivery",
                description: "Get your work done accurately and on time.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-[#eef5ff] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{item.icon}</div>
                </div>

                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-7 h-8 w-8 text-gray-400" />
                )}

                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-primary font-bold">{item.step}</span>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20">
          <h2 className="text-3xl font-bold text-center">
            What Our Clients Say
          </h2>
          <div className="w-12 h-1 bg-[#1a2b4a] mx-auto mt-2 rounded-full mb-12"></div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Very smooth and hassle-free ITR filing experience. Highly recommend!",
                name: "Neha Sharma",
                role: "Salaried Professional",
              },
              {
                quote: "Great support for GST registration and returns. Very responsive!",
                name: "Rohit Verma",
                role: "Business Owner",
              },
              {
                quote: "Professional, transparent and always available when needed.",
                name: "Ankit Mehta",
                role: "Freelancer",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border border-[#d9dee7] shadow-none rounded-xl"
              >
                <CardContent className="p-6 min-h-[220px] flex flex-col justify-between">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2 leading-none">
                      “
                    </div>

                    <div className="flex mb-4 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-base">
                      ~ {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Image */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/lady.jpg"
                  alt="CA Ridhi Aggarwal"
                  width={700}
                  height={450}
                  className="w-full h-[360px] object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div>
                <p className="text-primary font-semibold mb-2 tracking-wide">
                  ABOUT US
                </p>
                <h2 className="text-4xl font-bold">
                  Meet CA Ridhi Aggarwal
                </h2>
                <div className="w-12 h-1 bg-[#1a2b4a] mt-3 rounded-full"></div>
              </div>

              <p className="text-muted-foreground text-base leading-relaxed">
                Ridhi Aggarwal is a Qualified Chartered Accountant committed to
                providing reliable, practical and client-centric financial solutions.
                With a strong academic background and updated knowledge, she started
                Ridhi Aggarwal & Associates with a vision to simplify compliance and
                support businesses in their growth journey.
              </p>

              <div className="pt-4">
                <p className="text-4xl text-primary italic font-light">
                  Ridhi Aggarwal
                </p>
                <p className="text-muted-foreground text-lg">
                  Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20">
          <div className="flex flex-wrap items-center justify-between gap-6">

            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <Calendar className="h-10 w-10 text-white" />
              </div>

              <div className="text-white">
                <h3 className="text-3xl font-bold">
                  Need Help with Tax or Compliance?
                </h3>
                <p className="text-white/80 text-lg">
                  Get expert guidance from a Qualified CA today.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                variant="secondary"
                className="h-14 px-8 rounded-xl bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd4yU8c-plVYYtVVRIQ6Czfnvo4lfroHABMwV6DH6qKEcM2yw/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Free Consultation
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-14 px-8 rounded-xl gap-2 border-[#d1d5db] bg-white hover:bg-gray-50 text-[#1a2b4a] font-medium text-base shadow-sm"
              >
                <a
                  href="https://wa.me/918527728379?text=Hi%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <svg
                    className="h-5 w-5 text-[#25D366]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>

                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
  <Image
    src="/ca-logo.png"
    alt="CA India Logo"
    width={60}
    height={60}
    className="h-12 w-auto"
  />

  <div className="leading-tight">
    <div className="font-bold text-white">
      RIDHI AGGARWAL
    </div>

    <div className="font-semibold text-white">
      & ASSOCIATES
    </div>

    <div className="text-white/60 text-[10px]">
      CHARTERED ACCOUNTANTS
    </div>
  </div>
</div>
              <p className="text-white/60 text-sm mb-4">Reliable. Transparent. Trusted.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-white/60 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-white/60 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-white/60 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#why-us" className="hover:text-white">
                    Why Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Income Tax Filing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    GST Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Business Registration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Accounting & Bookkeeping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    TDS & Compliance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Business Advisory
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 8527728379</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@ridhicaggarwal.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>
                    123, Business Park, Sector 63,
                    <br />
                    Noida, Uttar Pradesh - 201301
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-wrap justify-between gap-4 text-sm text-white/60">
            <p>© 2024 Ridhi Aggarwal & Associates. All Rights Reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-white">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
