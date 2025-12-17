import Image from "next/image"
import { ProductModal } from "@/components/brand/ProductModal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Instagram, Video, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-black">
      
      {/* 1. HERO SECTION - Mobile Optimized */}
      <section className="relative h-[90vh] w-full bg-black overflow-hidden">
        {/* Background Image - Optimized with 'priority' for speed */}
        <div className="absolute inset-0 opacity-70">
           <Image 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop" 
            alt="Sisi Tosin Model" 
            fill
            className="object-cover"
            priority={true} // Loads this image immediately
           />
        </div>
        
        <div className="relative z-10 flex flex-col justify-end h-full pb-20 px-6 md:px-20 max-w-4xl">
          <div className="flex gap-2 mb-4">
            <Badge className="bg-rose-600 text-white border-none px-3 py-1">Actor</Badge>
            <Badge className="bg-white text-black border-none px-3 py-1">Lifestyle</Badge>
          </div>
          {/* Responsive Text: Smaller on mobile, huge on desktop */}
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-4 leading-none tracking-tight">
            Sisi <span className="text-rose-500">Tosin.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            Beauty is pain, but style is eternal. Explore the curated collection and exclusive content.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full w-full md:w-auto text-lg h-12">
              Shop Collections
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white/10 rounded-full w-full md:w-auto h-12">
              <Instagram className="mr-2 h-4 w-4" /> @officialsisitosin
            </Button>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR - Horizontal Scroll on Mobile */}
      <section className="bg-rose-50 py-8 border-b border-rose-100">
        <div className="container mx-auto flex flex-row justify-around items-center text-center">
            <div>
                <h3 className="text-xl md:text-2xl font-bold text-rose-900">365K+</h3>
                <p className="text-xs md:text-sm text-rose-700 uppercase tracking-wider">TikTok</p>
            </div>
            <div className="h-8 w-[1px] bg-rose-200"></div>
            <div>
                <h3 className="text-xl md:text-2xl font-bold text-rose-900">3.9M</h3>
                <p className="text-xs md:text-sm text-rose-700 uppercase tracking-wider">Likes</p>
            </div>
            <div className="h-8 w-[1px] bg-rose-200"></div>
             <div>
                <h3 className="text-xl md:text-2xl font-bold text-rose-900">Actor</h3>
                <p className="text-xs md:text-sm text-rose-700 uppercase tracking-wider">Pro</p>
            </div>
        </div>
      </section>

      {/* 3. SHOP SECTION */}
      <section className="py-16 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">The Collection</h2>
             <p className="text-gray-500">Custom wears designed for the spotlight.</p>
          </div>
          <Button variant="link" className="text-rose-600 font-bold p-0 md:p-4">See All Products <ArrowRight className="ml-2 h-4 w-4"/></Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Product 1 */}
          <div className="group">
             <ProductModal 
                title="The Red Carpet Gown" 
                price="₦65,000" 
                image="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2548&auto=format&fit=crop" 
             />
             <div className="mt-4">
                 <h3 className="font-bold text-xl">The Red Carpet Gown</h3>
                 <p className="text-sm text-gray-500">Custom Fit Available</p>
             </div>
          </div>

          {/* Product 2 */}
          <div className="group">
             <ProductModal 
                title="Sisi's Everyday Two-Piece" 
                price="₦25,000" 
                image="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop" 
             />
             <div className="mt-4">
                 <h3 className="font-bold text-xl">Everyday Two-Piece</h3>
                 <p className="text-sm text-gray-500">Ready to Wear</p>
             </div>
          </div>

          {/* Product 3 */}
          <div className="group">
             <ProductModal 
                title="Luxury Oud Perfume" 
                price="₦18,000" 
                image="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1904&auto=format&fit=crop" 
             />
             <div className="mt-4">
                 <h3 className="font-bold text-xl">Luxury Oud</h3>
                 <p className="text-sm text-gray-500">Signature Scent</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. CONTENT CREATOR HUB */}
      <section className="bg-black text-white py-16 px-6 md:px-20">
         <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <Badge className="bg-yellow-500 text-black mb-4 hover:bg-yellow-400">Trending Now</Badge>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">"Beauty is Pain" <br/> & Other Stories</h2>
                <p className="text-gray-400 mb-8 text-lg">
                    Catch up on the latest skits, behind-the-scenes content, and life updates from Sisi Tosin.
                </p>
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full w-full md:w-auto px-8 py-6 text-lg font-bold">
                    <Video className="mr-2 h-5 w-5" /> Watch on TikTok
                </Button>
            </div>
            
            {/* Mobile Optimized Grid for Images */}
            <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[9/16] bg-gray-800 rounded-xl overflow-hidden md:translate-y-8 relative">
                     <Image 
                        src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" 
                        alt="TikTok Content"
                        fill
                        className="object-cover opacity-60 hover:opacity-100 transition-opacity"
                     />
                </div>
                <div className="aspect-[9/16] bg-gray-800 rounded-xl overflow-hidden relative">
                     <Image 
                        src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop" 
                        alt="TikTok Content"
                        fill
                        className="object-cover opacity-60 hover:opacity-100 transition-opacity"
                     />
                </div>
            </div>
         </div>
      </section>

      <footer className="bg-white py-10 border-t border-gray-100 text-center">
        <p className="text-gray-900 font-serif text-xl font-bold mb-2">Sisi Tosin</p>
        <p className="text-gray-400 text-sm">© 2025 Sisi Tosin Brand.</p>
      </footer>
    </main>
  )
}
