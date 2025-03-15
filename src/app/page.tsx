import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col bg-black">
      {/* Hero Section - Full Height */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Moon.png"
            alt="Moon background"
            fill
            className="object-cover brightness-90"
            priority
          />
        </div>
        
        {/* Content */}
        <div className="container px-4 py-8 mx-auto text-center relative z-10 flex flex-col items-center">
          {/* Brutus Logo */}
          <h1 className="text-6xl md:text-8xl font-archivo font-bold tracking-tighter mb-12 text-white">
            BRUTUS
          </h1>
          
          {/* Shop Collection Button */}
          <Link href="/shop">
            <button className="shop-collection-btn shadow-xl hover:shadow-2xl">
              Shop Collection
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
