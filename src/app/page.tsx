import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Löwe.png"
            alt="Lion portrait"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        
        {/* Content */}
        <div className="container px-4 py-8 mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
            PREMIUM SKINCARE<br />FOR THE MODERN MAN
          </h1>
          <p className="max-w-[600px] mx-auto text-white/80 mb-8 text-lg">
            Elevate your daily routine with our scientifically formulated skincare products.
          </p>
          <Link href="/shop" className="inline-block">
            <button className="relative px-8 py-3 font-archivo text-white rounded-md overflow-hidden transition-all duration-300 transform hover:scale-[1.02] group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B8BDC7] to-[#8B929C] transition-all duration-300 group-hover:from-[#9BA1AB] group-hover:to-[#6E747E]"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.4)_30%,rgba(255,255,255,0)_50%)] animate-shimmer"></div>
              <span className="relative">Shop Collection</span>
            </button>
          </Link>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "1",
                name: "Day Cream",
                description: "Lightweight moisturizer with SPF protection",
                price: "$45",
                image: "/images/DayCream.jpg"
              },
              {
                id: "2",
                name: "Body + Hair Shampoo",
                description: "Dual-action cleanser for body and hair",
                price: "$35",
                image: "/images/Shampoo.jpg"
              },
              {
                id: "3",
                name: "Spot Care",
                description: "Targeted treatment for imperfections",
                price: "$28",
                image: "/images/SpotCare.jpg"
              }
            ].map((product) => (
              <Link href={`/shop/${product.id}`} key={product.id} className="group cursor-pointer">
                <div className="aspect-square bg-neutral-100 dark:bg-neutral-900 relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{product.description}</p>
                <p className="font-medium">{product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-neutral-100 dark:bg-neutral-900">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">The Brutus Standard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Premium Quality",
                description: "Carefully selected ingredients that deliver real results"
              },
              {
                title: "Science-Backed",
                description: "Formulated with proven active ingredients"
              },
              {
                title: "Made for Men",
                description: "Designed specifically for men's skincare needs"
              }
            ].map((value, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
