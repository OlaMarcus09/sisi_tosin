import { Sparkles, Gift } from "lucide-react"

export function ChristmasBanner() {
  return (
    <div className="bg-emerald-900 text-white py-2 px-4 text-center text-sm md:text-base font-medium flex justify-center items-center gap-2 animate-in slide-in-from-top duration-700">
      <Sparkles className="h-4 w-4 text-yellow-400" />
      <span>🎄 Holiday Special: Free Delivery on all Custom Orders until Dec 25th!</span>
      <Gift className="h-4 w-4 text-rose-400" />
    </div>
  )
}
