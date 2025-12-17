"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Ruler, ShoppingBag, Heart } from "lucide-react"

export function ProductModal({ title, price, image }: { title: string, price: string, image: string }) {
  const [isCustom, setIsCustom] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-black text-white hover:bg-rose-600 transition-colors">
          <ShoppingBag className="mr-2 h-4 w-4" /> View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white text-black">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif font-bold">{title}</DialogTitle>
          <p className="text-rose-600 font-medium text-lg">{price}</p>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="relative overflow-hidden rounded-md">
            <img src={image} alt={title} className="w-full h-64 object-cover" />
            <div className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full">
                <Heart className="h-4 w-4 text-rose-600 fill-rose-600" />
            </div>
          </div>

          <Tabs defaultValue="standard" className="w-full" onValueChange={(val) => setIsCustom(val === 'custom')}>
            <TabsList className="grid w-full grid-cols-2 bg-gray-100">
              <TabsTrigger value="standard">Standard Size</TabsTrigger>
              <TabsTrigger value="custom">Custom Fit</TabsTrigger>
            </TabsList>
            
            <TabsContent value="standard" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Size</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="s">Small (UK 8)</SelectItem>
                    <SelectItem value="m">Medium (UK 10-12)</SelectItem>
                    <SelectItem value="l">Large (UK 14-16)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>

            <TabsContent value="custom" className="space-y-4 pt-4">
              <div className="bg-rose-50 border border-rose-100 p-3 rounded-md text-xs text-rose-800 flex items-center mb-2">
                <Ruler className="h-3 w-3 mr-2" />
                Provide measurements in inches for a perfect fit.
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Bust</Label>
                  <Input placeholder="36" />
                </div>
                <div className="space-y-2">
                  <Label>Waist</Label>
                  <Input placeholder="28" />
                </div>
                <div className="space-y-2">
                  <Label>Hips</Label>
                  <Input placeholder="40" />
                </div>
                <div className="space-y-2">
                  <Label>Length</Label>
                  <Input placeholder="60" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-6">
          {isCustom ? "Order via WhatsApp (Custom)" : "Add to Cart"}
        </Button>
      </DialogContent>
    </Dialog>
  )
}
