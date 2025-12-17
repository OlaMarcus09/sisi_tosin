import Image from "next/image"
import { ProductModal } from "@/components/brand/ProductModal"
import { ChristmasBanner } from "@/components/brand/ChristmasBanner"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Instagram, Video, ArrowRight, Star, Mail, Clapperboard, Camera } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black font-sans text-black dark:text-white transition-colors duration-300">
      
      {/* --- CHRISTMAS THEME START --- */}
      <ChristmasBanner />
      {/* --- CHRISTMAS THEME END --- */}

      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] w-full bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-70">
           <Image 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop" 
            alt="Sisi Tosin Model" 
            fill
            className="object-cover"
            priority={true} 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-end h-full pb-20 px-6 md:px-20 max-w-5xl">
          <div className="flex gap-2 mb-4">
            <Badge className="bg-rose-600 text-white border-none px-3 py-1">Actor</Badge>
            <Badge className="bg-emerald-600 text-white border-none px-3 py-1">🎄 Holiday Edit</Badge>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-4 leading-none tracking-tight">
            The Star of <br/> <span className="text-rose-500 italic">The Season.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            From the movie screen to your wardrobe. Explore Sisi Tosin's exclusive holiday styles and latest brand features.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full w-full md:w-auto text-lg h-12 font-bold">
              Shop Holiday Looks
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white/10 rounded-full w-full md:w-auto h-12">
              <Clapperboard className="mr-2 h-4 w-4" /> View Acting Reel
            </Button>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-rose-50 dark:bg-zinc-900 py-8 border-b border-rose-100 dark:border-zinc-800">
        <div className="container mx-auto flex flex-row justify-around items-center text-center">
            <div>
                <h3 className="text-xl md:text-2xl font-bold text-rose-900 dark:text-rose-400">365K+</h3>
                <p className="text-xs md:text-sm text-rose-700 dark:text-rose-300 uppercase tracking-wider">TikTok</p>
            </div>
            <div className="h-8 w-[1px] bg-rose-200 dark:bg-zinc-700"></div>
            <div>
                <h3 className="text-xl md:text-2xl font-bold text-rose-900 dark:text-rose-400">3.9M</h3>
                <p className="text-xs md:text-sm text-rose-700 dark:text-rose-300 uppercase tracking-wider">Likes</p>
            </div>
            <div className="h-8 w-[1px] bg-rose-200 dark:bg-zinc-700"></div>
             <div>
                <h3 className="text-xl md:text-2xl font-bold text-rose-900 dark:text-rose-400">Actor</h3>
                <p className="text-xs md:text-sm text-rose-700 dark:text-rose-300 uppercase tracking-wider">Pro</p>
            </div>
        </div>
      </section>

      {/* 3. PORTFOLIO SECTION */}
      <section className="py-20 px-6 md:px-20 bg-white dark:bg-black">
        <div className="text-center mb-16">
            <Badge className="bg-black dark:bg-white text-white dark:text-black mb-4">Portfolio</Badge>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Beyond the Feed</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Sisi Tosin is more than an influencer. She is a professional actress, event host, and brand ambassador connecting products to millions.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-shadow">
                <Clapperboard className="h-10 w-10 text-rose-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Film & TV</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">Featured in Nollywood productions and web series. Bringing characters to life with depth and charisma.</p>
                <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-lg overflow-hidden relative">
                    <Image src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop" alt="Acting Reel" fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Video className="text-white h-12 w-12" />
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-shadow">
                <Star className="h-10 w-10 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Brand Deals</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">Trusted by top beauty and lifestyle brands to drive engagement and sales through authentic storytelling.</p>
                <div className="grid grid-cols-3 gap-4 opacity-60">
                     <div className="h-10 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
                     <div className="h-10 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
                     <div className="h-10 bg-zinc-300 dark:bg-zinc-700 rounded"></div>
                </div>
            </div>

             {/* Card 3 */}
             <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-shadow">
                <Camera className="h-10 w-10 text-rose-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Content Creation</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">High-quality skits, beauty transitions, and lifestyle vlogs that go viral. 7.4M+ views on top content.</p>
                 <Button variant="outline" className="w-full border-zinc-300 dark:border-zinc-600 text-black dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800">View Media Kit</Button>
            </div>
        </div>
      </section>

      {/* 4. SHOP SECTION */}
      <section className="py-16 px-6 md:px-20 bg-rose-50/50 dark:bg-zinc-900/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
             <div className="flex items-center gap-2 mb-2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold">Gifts & Glamour</h2>
             </div>
             <p className="text-gray-500 dark:text-gray-400">Curated looks perfect for the festive season.</p>
          </div>
          <Button variant="link" className="text-rose-600 font-bold p-0 md:p-4">See All Products <ArrowRight className="ml-2 h-4 w-4"/></Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="group">
             <ProductModal 
                title="The Christmas Gala Gown" 
                price="₦65,000" 
                image="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2548&auto=format&fit=crop" 
             />
             <div className="mt-4">
                 <h3 className="font-bold text-xl">The Gala Gown</h3>
                 <Badge className="bg-emerald-600 ml-2 hover:bg-emerald-700 text-white">Festive</Badge>
                 <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Custom Fit Available</p>
             </div>
          </div>

          <div className="group">
             <ProductModal 
                title="Sisi's Everyday Two-Piece" 
                price="₦25,000" 
                image="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop" 
             />
             <div className="mt-4">
                 <h3 className="font-bold text-xl">Everyday Two-Piece</h3>
                 <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Ready to Wear</p>
             </div>
          </div>

          <div className="group">
             <ProductModal 
                title="Luxury Oud Perfume" 
                price="₦18,000" 
                image="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1904&auto=format&fit=crop" 
             />
             <div className="mt-4">
                 <h3 className="font-bold text-xl">Luxury Oud</h3>
                 <Badge className="bg-rose-600 ml-2 hover:bg-rose-700 text-white">Perfect Gift</Badge>
                 <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Signature Scent</p>
             </div>
          </div>
        </div>
      </section>

      {/* 5. WORK WITH ME */}
      <section className="bg-black dark:bg-zinc-900 text-white py-20 px-6 md:px-20 text-center border-t border-zinc-800">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Want to work with Sisi Tosin?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
            For brand collaborations, movie roles, and event appearances, please reach out to the management team.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white font-bold h-14 px-8 text-lg">
                <Mail className="mr-2 h-5 w-5" /> Send Inquiry
            </Button>
            <Button size="lg" variant="outline" className="text-white border-zinc-700 hover:bg-zinc-800 h-14 px-8 text-lg">
                Download Media Kit
            </Button>
        </div>
      </section>

      <footer className="bg-white dark:bg-black py-10 border-t border-gray-100 dark:border-zinc-800 text-center">
        <p className="text-gray-900 dark:text-white font-serif text-xl font-bold mb-2">Sisi Tosin</p>
        <div className="flex justify-center gap-6 text-gray-400 mb-6">
            <a href="#" className="hover:text-rose-600">Instagram</a>
            <a href="#" className="hover:text-rose-600">TikTok</a>
            <a href="#" className="hover:text-rose-600">WhatsApp</a>
        </div>
        <p className="text-gray-400 text-sm">© 2025 Sisi Tosin Brand.</p>
      </footer>
    </main>
  )
}
