"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: "APPAREL" | "ACCESSORIES";
  description: string;
  details: string[];
  sizes?: string[];
  link?: string;
}

const products: Product[] = [
  {
    "id": "bra-midnight-motion",
    "name": "Ryker Boone \"Midnight Motion\" Recycled Longline Sports Bra",
    "price": "$35.19",
    "image": "/images/consistent/ryker_joyce_morning_coffee.png",
    "category": "APPAREL",
    "description": "Designed for night runs, early morning workouts, and everything in between. The \"Midnight Motion\" Sports Bra combines sleek styling with technical performance. Offering supportive compression and a comfortable longline cut, this double-layered sports bra is made of eco-friendly recycled fibers that move with your body.",
    "details": [
      "Double-layered for supportive compression",
      "Moisture-wicking polyester-spandex fabric",
      "Eco-friendly recycled fibers (longline version)",
      "Comfy elastic band"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-midnight-motion-recycled-longline-sports-bra"
  },
  {
    "id": "glass-whiskey-weather-white",
    "name": "Ryker Boone \"Whiskey Weather\" Rocks Glass (White Logo)",
    "price": "$8.11",
    "image": "/images/promo-beverage-glass.jpg",
    "category": "ACCESSORIES",
    "description": "When the nights get cold and the music slows down, it's officially whiskey weather. The Ryker Boone \"Whiskey Weather\" Rocks Glass is built for late-night cabin sessions, porch-sitting, and winding down. Custom printed with a crisp, timeless white logo, this heavy-bottomed glass is a clean and classic fan essential.",
    "details": [
      "10.5 oz capacity with heavy base",
      "UV-printed signature branding",
      "Dishwasher safe",
      "Crafted for high-end feel"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-whiskey-weather-rocks-glass-white-logo"
  },
  {
    "id": "glass-september-turns-gold",
    "name": "Ryker Boone \"September Turns Gold\" Rocks Glass (Gold Logo)",
    "price": "$8.11",
    "image": "/images/promo-beverage-glass.jpg",
    "category": "ACCESSORIES",
    "description": "Pour a double and enjoy the warm glow of the Tennessee hills. The official Ryker Boone \"September Turns Gold\" Rocks Glass is the perfect companion for slow evenings, campfire chats, and acoustic tracks. Featuring his signature branding in a striking UV-printed gold logo, this 10.5 oz tumbler adds a touch of rustic luxury to any home bar.",
    "details": [
      "10.5 oz capacity with heavy base",
      "UV-printed signature branding",
      "Dishwasher safe",
      "Crafted for high-end feel"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-september-turns-gold-rocks-glass-gold-logo"
  },
  {
    "id": "mug-lights-go-gold-gold",
    "name": "Ryker Boone \"When The Lights Go Gold\" Black Glossy Mug (Gold Logo)",
    "price": "$8.95",
    "image": "/images/promo-camp-mug.png",
    "category": "ACCESSORIES",
    "description": "Start your day with a touch of Tennessee warmth. Emblazoned with Ryker Boone’s signature branding in a rich gold-colored logo print, this premium black glossy ceramic mug is perfect for early morning coffee on the deck or hot tea during cabin writing sessions.",
    "details": [
      "11 oz premium ceramic construction",
      "Glossy finish",
      "Double-sided logo print",
      "Microwave and dishwasher safe"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-when-the-lights-go-gold-black-glossy-mug-gold-logo"
  },
  {
    "id": "mug-sweet-tea-white",
    "name": "Ryker Boone \"Sweet Tea & Blue Jeans\" Black Glossy Mug (White Logo)",
    "price": "$8.95",
    "image": "/images/promo-camp-mug.png",
    "category": "ACCESSORIES",
    "description": "Cozy up with your favorite warm brew. Inspired by early morning deck conversations and rustic cabin songwriting sessions, this classic black glossy ceramic mug features Ryker Boone’s signature branding in a clean, high-contrast white logo design.",
    "details": [
      "11 oz premium ceramic construction",
      "Glossy finish",
      "Double-sided logo print",
      "Microwave and dishwasher safe"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-sweet-tea-blue-jeans-black-glossy-mug-white-logo"
  },
  {
    "id": "mug-back-to-gold-gold",
    "name": "Ryker Boone \"Back To Gold\" White Glossy Mug (Gold Logo)",
    "price": "$8.95",
    "image": "/images/promo-camp-mug.png",
    "category": "ACCESSORIES",
    "description": "Bring the warmth of the country home. The official Ryker Boone \"Back To Gold\" White Glossy Mug features a clean white ceramic finish decorated with his signature branding in a rich gold-colored logo print. Ideal for sitting on the cabin porch at sunset, enjoying your morning brew, or writing your next favorite song.",
    "details": [
      "11 oz premium ceramic construction",
      "Glossy finish",
      "Double-sided logo print",
      "Microwave and dishwasher safe"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-back-to-gold-white-glossy-mug-gold-logo"
  },
  {
    "id": "mug-honky-tonk-black",
    "name": "Ryker Boone \"Honky Tonk Sundown\" White Glossy Mug (Black Logo)",
    "price": "$8.95",
    "image": "/images/promo-camp-mug.png",
    "category": "ACCESSORIES",
    "description": "Start your morning off on the right beat. Inspired by Nashville nights, live acoustic stages, and dust-kicking rhythms, the Ryker Boone \"Honky Tonk Sundown\" White Glossy Mug features a clean, high-contrast black logo design printed on durable white ceramic.",
    "details": [
      "11 oz premium ceramic construction",
      "Glossy finish",
      "Double-sided logo print",
      "Microwave and dishwasher safe"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-honky-tonk-sundown-white-glossy-mug-black-logo"
  },
  {
    "id": "apron-sweet-tea-black",
    "name": "Ryker Boone \"Sweet Tea & Blue Jeans\" Embroidered Cooking Apron (White/Black Logo)",
    "price": "$17.95",
    "image": "/images/consistent/family_ranch_garden.png",
    "category": "APPAREL",
    "description": "Cook with some classic southern comfort. Inspired by family ranch kitchens, harvesting the garden, and Sunday family picnics, the official Ryker Boone \"Sweet Tea & Blue Jeans\" Cooking Apron is a rustic essential. Emblazoned with his signature branding in a clean, black embroidered logo on crisp white fabric, this durable apron is built for daily cooking, baking, and backyard barbecues.",
    "details": [
      "Durable cotton-poly canvas blend",
      "Embroidered signature logo",
      "Two spacious front pockets",
      "Adjustable neck strap and back ties"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-sweet-tea-blue-jeans-embroidered-cooking-apron-white-black-logo"
  },
  {
    "id": "apron-barefoot-white",
    "name": "Ryker Boone \"Barefoot on the Backroad\" Embroidered Cooking Apron (Black/White Logo)",
    "price": "$17.95",
    "image": "/images/consistent/family_ranch_garden.png",
    "category": "APPAREL",
    "description": "Bring some rustic style to the grill. Inspired by campfire cookouts, backyard get-togethers, and life on the ranch, the Ryker Boone \"Barefoot on the Backroad\" Cooking Apron features a high-contrast white embroidered logo on a sleek black background. Keep your clothes protected while you whip up your favorite home-style comfort foods.",
    "details": [
      "Durable cotton-poly canvas blend",
      "Embroidered signature logo",
      "Two spacious front pockets",
      "Adjustable neck strap and back ties"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-barefoot-on-the-backroad-embroidered-cooking-apron-black-white-logo"
  },
  {
    "id": "apron-september-gold",
    "name": "Ryker Boone \"September Turns Gold\" Embroidered Cooking Apron (Black/Gold Logo)",
    "price": "$17.95",
    "image": "/images/consistent/family_ranch_garden.png",
    "category": "APPAREL",
    "description": "Cook in style under the harvest moon. Emblazoned with a beautiful, premium gold embroidered logo on a deep black background, this Ryker Boone cooking apron blends rugged country charm with a touch of elegance. Perfect for baking autumn pies, preparing family dinners, or grilling out under the stars.",
    "details": [
      "Durable cotton-poly canvas blend",
      "Embroidered signature logo",
      "Two spacious front pockets",
      "Adjustable neck strap and back ties"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-september-turns-gold-embroidered-cooking-apron-black-gold-logo"
  },
  {
    "id": "hat-backroad-black",
    "name": "Ryker Boone \"Backroad Heartbeat\" Richardson Trucker Hat (Black Logo)",
    "price": "$18.89",
    "image": "/images/consistent/merch_ryker_trucker_hat.png",
    "category": "APPAREL",
    "description": "Rugged, low-key, and built for the open road. The Ryker Boone \"Backroad Heartbeat\" Trucker Hat combines a classic structured snapback with a stealthy, tone-on-tone black embroidered logo. The perfect daily cap for working in the stables or driving down gravel roads.",
    "details": [
      "Classic Richardson structured design",
      "Premium mesh back panels for ventilation",
      "High-stitch-count embroidered logo",
      "Adjustable snapback closure"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-backroad-heartbeat-richardson-trucker-hat-black-logo"
  },
  {
    "id": "hat-lights-go-gold-gold",
    "name": "Ryker Boone \"When The Lights Go Gold\" Richardson Trucker Hat (Gold Logo)",
    "price": "$18.89",
    "image": "/images/consistent/merch_ryker_trucker_hat.png",
    "category": "APPAREL",
    "description": "The ultimate country classic, elevated. The Ryker Boone \"When The Lights Go Gold\" Trucker Hat features a premium Richardson structured snapback design finished with a high-stitch-count gold embroidered logo. Perfect for golden hour drives, outdoor festivals, and sunny ranch days.",
    "details": [
      "Classic Richardson structured design",
      "Premium mesh back panels for ventilation",
      "High-stitch-count embroidered logo",
      "Adjustable snapback closure"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-when-the-lights-go-gold-richardson-trucker-hat-gold-logo"
  },
  {
    "id": "hat-honky-tonk-white",
    "name": "Ryker Boone \"Honky Tonk Sundown\" Richardson Trucker Hat (White Logo)",
    "price": "$18.89",
    "image": "/images/consistent/merch_ryker_trucker_hat.png",
    "category": "APPAREL",
    "description": "A timeless classic that never goes out of style. The Ryker Boone \"Honky Tonk Sundown\" Trucker Hat features a clean white embroidered logo standing out bold on a premium Richardson snapback. The perfect cap for tailgates, live shows, or simple porch-sitting.",
    "details": [
      "Classic Richardson structured design",
      "Premium mesh back panels for ventilation",
      "High-stitch-count embroidered logo",
      "Adjustable snapback closure"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-honky-tonk-sundown-richardson-trucker-hat-white-logo"
  },
  {
    "id": "blanket-september-gold",
    "name": "Ryker Boone \"September Turns Gold\" Embroidered Premium Sherpa Blanket",
    "price": "$46.50",
    "image": "/images/consistent/merch_family_blanket.png",
    "category": "APPAREL",
    "description": "Wrap yourself in the cozy warmth of a Tennessee autumn. The official Ryker Boone \"September Turns Gold\" Embroidered Premium Sherpa Blanket is the perfect companion for chilly evenings on the porch, twilight campfire jams, or relaxing in the living room. Emblazoned with his signature branding in a high-quality gold embroidered logo, it features a sleek, sheeny black fleece exterior on one side and an incredibly soft, cream-colored sherpa lining on the other.",
    "details": [
      "Ultra-soft cream-colored Sherpa lining",
      "Premium fleece exterior with gold embroidered logo",
      "Generous size (50\" x 60\")",
      "Machine washable on cold cycle"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-september-turns-gold-embroidered-premium-sherpa-blanket"
  },
  {
    "id": "beanie-backroad-black",
    "name": "Ryker Boone \"Backroad Heartbeat\" Yupoong Cuffed Beanie (Black Logo)",
    "price": "$13.79",
    "image": "/images/consistent/merch_joyce_beanie.png",
    "category": "APPAREL",
    "description": "Rugged, warm, and low-key. The Ryker Boone \"Backroad Heartbeat\" Yupoong Cuffed Beanie combines a classic knit design with a stealthy, tone-on-tone black embroidered logo. Knitted from premium, stretch-fit fabric, it keeps you warm and insulated while keeping your style clean and understated.",
    "details": [
      "Premium Yupoong knit beanie",
      "Cuffed design with stretch-fit comfort",
      "High-stitch-count embroidered logo",
      "One size fits most"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-backroad-heartbeat-yupoong-cuffed-beanie-black-logo"
  },
  {
    "id": "beanie-back-to-gold-gold",
    "name": "Ryker Boone \"Back to Gold\" Yupoong Cuffed Beanie (Gold Logo)",
    "price": "$13.79",
    "image": "/images/consistent/merch_joyce_beanie.png",
    "category": "APPAREL",
    "description": "Stay warm as the seasons shift. The Ryker Boone \"Back to Gold\" Cuffed Beanie is knitted from premium, ultra-soft Turbo acrylic fabric for ultimate comfort during chilly weather. Featuring his signature branding in a rich gold embroidered logo on a classic knit design, it’s the perfect cozy addition to your late-autumn and winter wardrobe.",
    "details": [
      "Premium Yupoong knit beanie",
      "Cuffed design with stretch-fit comfort",
      "High-stitch-count embroidered logo",
      "One size fits most"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-back-to-gold-yupoong-cuffed-beanie-gold-logo"
  },
  {
    "id": "beanie-september-white",
    "name": "Ryker Boone \"September Turns Gold\" Yupoong Cuffed Beanie (White Logo)",
    "price": "$13.79",
    "image": "/images/consistent/merch_joyce_beanie.png",
    "category": "APPAREL",
    "description": "A timeless, cozy classic for the cold months. The Ryker Boone \"September Turns Gold\" Cuffed Beanie is made from premium stretch knit fabric, keeping you exceptionally warm through the fall and winter seasons. Emblazoned with a crisp white embroidered logo, it's a bright and classic fan favorite.",
    "details": [
      "Premium Yupoong knit beanie",
      "Cuffed design with stretch-fit comfort",
      "High-stitch-count embroidered logo",
      "One size fits most"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-september-turns-gold-yupoong-cuffed-beanie-white-logo"
  },
  {
    "id": "bra-dust-kicking-black",
    "name": "Ryker Boone \"Dust Kicking Rhythm\" Sports Bra",
    "price": "$24.43",
    "image": "/images/consistent/ryker_joyce_morning_coffee.png",
    "category": "APPAREL",
    "description": "Keep your rhythm steady and your movement free. The official Ryker Boone \"Dust Kicking Rhythm\" Sports Bra is designed for low-to-medium intensity activities—perfect for yoga, hiking, daily chores, or backyard two-stepping. Made from a comfortable, moisture-wicking polyester-spandex blend, it features his signature branding in a clean black logo design, keeping you cool, dry, and moving in time with the beat.",
    "details": [
      "Double-layered for supportive compression",
      "Moisture-wicking polyester-spandex fabric",
      "Eco-friendly recycled fibers (longline version)",
      "Comfy elastic band"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-dust-kicking-rhythm-sports-bra"
  },
  {
    "id": "crop-lights-gold",
    "name": "Ryker Boone \"When The Lights Go Gold\" Women's Crop Top (Gold Logo)",
    "price": "$18.80",
    "image": "/images/promo-ryker-tshirt.png",
    "category": "APPAREL",
    "description": "Summer style meets country soul. The official Ryker Boone \"When The Lights Go Gold\" Crop Top features a modern, relaxed silhouette in premium, ultra-soft combed cotton. Emblazoned with a beautiful, high-quality gold logo print, it offers a laid-back crop length with dropped shoulders—perfect for summer concerts, outdoor festivals, and sunny afternoons.",
    "details": [
      "Premium AS Colour combed cotton",
      "Relaxed crop cut with dropped shoulders",
      "Double-needle stitching for durability",
      "Pre-shrunk to minimize shrinkage"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-when-the-lights-go-gold-womens-crop-top-gold-logo"
  },
  {
    "id": "crop-barefoot-black",
    "name": "Ryker Boone \"Barefoot on the Backroad\" Women's Crop Top (Black Logo)",
    "price": "$18.80",
    "image": "/images/promo-ryker-tshirt.png",
    "category": "APPAREL",
    "description": "Laid-back comfort for warm weather. The Ryker Boone \"Barefoot on the Backroad\" Crop Top features a clean, tone-on-tone black logo on a relaxed-fit combed cotton crop top. A low-profile, chic fan essential designed for outdoor adventures, bonfire nights, and casual summer days.",
    "details": [
      "Premium AS Colour combed cotton",
      "Relaxed crop cut with dropped shoulders",
      "Double-needle stitching for durability",
      "Pre-shrunk to minimize shrinkage"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-barefoot-on-the-backroad-womens-crop-top-black-logo"
  },
  {
    "id": "crop-august-white",
    "name": "Ryker Boone \"August Heatwave\" Women's Crop Top (White Logo)",
    "price": "$18.80",
    "image": "/images/promo-ryker-tshirt.png",
    "category": "APPAREL",
    "description": "Beat the summer heat in classic style. Emblazoned with a bold, high-contrast white logo, the Ryker Boone \"August Heatwave\" Crop Top brings a clean, striking aesthetic to premium midweight combed cotton. Perfect for throwing on after a swim, hitting backyard tailgates, or two-stepping in the dust.",
    "details": [
      "Premium AS Colour combed cotton",
      "Relaxed crop cut with dropped shoulders",
      "Double-needle stitching for durability",
      "Pre-shrunk to minimize shrinkage"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-august-heatwave-womens-crop-top-white-logo"
  },
  {
    "id": "crop-hoodie-august-white",
    "name": "Ryker Boone \"August Heatwave\" Fleece Crop Hoodie (White Logo)",
    "price": "$33.15",
    "image": "/images/consistent/merch_joyce_beanie.png",
    "category": "APPAREL",
    "description": "The ultimate cozy layer for cooler nights. The Ryker Boone \"August Heatwave\" Fleece Crop Hoodie features a bold white logo design printed on premium, ultra-soft midweight fleece. With a comfortable regular fit and a raw-edge cropped hem, it's a stylish, high-contrast fan favorite for campfires and late-night drives.",
    "details": [
      "Ultra-soft fleece lining",
      "Modern crop cut with raw-edge hem",
      "Matching drawcords and cozy hood",
      "Durable print design"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-august-heatwave-fleece-crop-hoodie-white-logo"
  },
  {
    "id": "crop-hoodie-backroad-black",
    "name": "Ryker Boone \"Backroad Heartbeat\" Fleece Crop Hoodie (Black Logo)",
    "price": "$33.15",
    "image": "/images/consistent/merch_joyce_beanie.png",
    "category": "APPAREL",
    "description": "Cozy warmth with an understated, low-profile edge. The Ryker Boone \"Backroad Heartbeat\" Fleece Crop Hoodie combines an incredibly soft cotton-poly fleece fabric with a stealthy, tone-on-tone black logo design. Perfect for early morning porch coffee, warm autumn road trips, or just winding down.",
    "details": [
      "Ultra-soft fleece lining",
      "Modern crop cut with raw-edge hem",
      "Matching drawcords and cozy hood",
      "Durable print design"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-backroad-heartbeat-fleece-crop-hoodie-black-logo"
  },
  {
    "id": "crop-hoodie-lights-gold",
    "name": "Ryker Boone \"When The Lights Go Gold\" Fleece Crop Hoodie (Gold Logo)",
    "price": "$33.15",
    "image": "/images/consistent/merch_joyce_beanie.png",
    "category": "APPAREL",
    "description": "Cozy meets chic. The official Ryker Boone \"When The Lights Go Gold\" Fleece Crop Hoodie features an ultra-soft fleece lining with a modern cropped, raw-edge hem. Emblazoned with a premium gold logo, it’s the perfect warm layer for wrapping up after an outdoor festival set or relaxing by the cabin fireplace.",
    "details": [
      "Ultra-soft fleece lining",
      "Modern crop cut with raw-edge hem",
      "Matching drawcords and cozy hood",
      "Durable print design"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-when-the-lights-go-gold-fleece-crop-hoodie-gold-logo"
  },
  {
    "id": "tote-honky-tonk-white",
    "name": "Ryker Boone \"Honky Tonk Sundown\" Eco-Friendly Tote Bag (Black/White Logo)",
    "price": "$15.56",
    "image": "/images/consistent/merch_joyce_tote.png",
    "category": "ACCESSORIES",
    "description": "Sustainable style for the open road. The official Ryker Boone \"Honky Tonk Sundown\" Tote Bag is crafted from 100% certified organic cotton twill. Featuring a clean, high-contrast white logo printed on a durable black canvas bag, it’s a roomy and stylish accessory perfect for carrying vinyl records, groceries, books, or concert gear.",
    "details": [
      "100% certified organic cotton twill",
      "Durable heavy canvas construction",
      "Perfect size for books, records, or gear",
      "Reinforced shoulder straps"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-honky-tonk-sundown-eco-friendly-tote-bag-black-white-logo"
  },
  {
    "id": "tote-back-to-gold-gold",
    "name": "Ryker Boone \"Back To Gold\" Eco-Friendly Tote Bag (Oyster/Gold Logo)",
    "price": "$15.56",
    "image": "/images/consistent/merch_joyce_tote.png",
    "category": "ACCESSORIES",
    "description": "Natural, warm, and eco-friendly. The Ryker Boone \"Back To Gold\" Tote Bag features his signature branding in a rich gold print on a beautiful oyster-colored organic cotton canvas background. Roomy and highly practical, it brings a touch of rustic elegance to your daily errands, library trips, or beach days.",
    "details": [
      "100% certified organic cotton twill",
      "Durable heavy canvas construction",
      "Perfect size for books, records, or gear",
      "Reinforced shoulder straps"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-back-to-gold-eco-friendly-tote-bag-oyster-gold-logo"
  },
  {
    "id": "tote-lights-gold",
    "name": "Ryker Boone \"When The Lights Go Gold\" Eco-Friendly Tote Bag (Black/Gold Logo)",
    "price": "$15.56",
    "image": "/images/consistent/merch_joyce_tote.png",
    "category": "ACCESSORIES",
    "description": "Premium look, eco-friendly feel. The Ryker Boone \"When The Lights Go Gold\" Tote Bag features his signature logo in a striking gold design printed against a deep black organic cotton canvas background. Combining durability with high-end style, it's the perfect daily carryall for your records, books, and everyday essentials.",
    "details": [
      "100% certified organic cotton twill",
      "Durable heavy canvas construction",
      "Perfect size for books, records, or gear",
      "Reinforced shoulder straps"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-when-the-lights-go-gold-eco-friendly-tote-bag-black-gold-logo"
  },
  {
    "id": "tote-barefoot-black",
    "name": "Ryker Boone \"Barefoot on the Backroad\" Eco-Friendly Tote Bag (Oyster/Black Logo)",
    "price": "$15.56",
    "image": "/images/consistent/merch_joyce_tote.png",
    "category": "ACCESSORIES",
    "description": "Earthy, organic, and laid-back. Inspired by country backroads and slow living, the Ryker Boone \"Barefoot on the Backroad\" Tote Bag is made from 100% certified organic cotton twill. Emblazoned with a clean black logo design on a natural oyster-colored background, it's a versatile daily essential for beach trips, farmer's markets, or library runs.",
    "details": [
      "100% certified organic cotton twill",
      "Durable heavy canvas construction",
      "Perfect size for books, records, or gear",
      "Reinforced shoulder straps"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-barefoot-on-the-backroad-eco-friendly-tote-bag-oyster-black-logo"
  },
  {
    "id": "tee-honky-tonk-black",
    "name": "Ryker Boone \"Honky Tonk Sundown\" Supersoft T-Shirt (White/Black Logo)",
    "price": "$11.75",
    "image": "/images/promo-ryker-tshirt.png",
    "category": "APPAREL",
    "description": "The absolute fan essential. The official Ryker Boone \"Honky Tonk Sundown\" T-Shirt features a clean, high-contrast black logo printed on Bella+Canvas' most iconic white unisex tee. Crafted from 100% premium Airlume combed and ring-spun cotton, this lightweight (4.2 oz) shirt offers exceptional softness and a classic regular fit that feels comfortable from the very first wear.",
    "details": [
      "Bella+Canvas supersoft unisex tee",
      "100% Airlume combed and ring-spun cotton",
      "Lightweight and highly breathable (4.2 oz)",
      "Pre-shrunk for a lasting fit"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-honky-tonk-sundown-supersoft-t-shirt-white-black-logo"
  },
  {
    "id": "tee-backroad-white",
    "name": "Ryker Boone \"Backroad Heartbeat\" Supersoft T-Shirt (Black/White Logo)",
    "price": "$11.75",
    "image": "/images/promo-ryker-tshirt.png",
    "category": "APPAREL",
    "description": "The classic concert tee, redefined for ultimate comfort. Emblazoned with a bold white logo on a sleek black backdrop, the Ryker Boone \"Backroad Heartbeat\" T-Shirt is printed on Bella+Canvas' most popular, premium-soft unisex tee. Designed for maximum breathability and a comfortable regular fit, it’s a timeless daily classic.",
    "details": [
      "Bella+Canvas supersoft unisex tee",
      "100% Airlume combed and ring-spun cotton",
      "Lightweight and highly breathable (4.2 oz)",
      "Pre-shrunk for a lasting fit"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-backroad-heartbeat-supersoft-t-shirt-black-white-logo"
  },
  {
    "id": "tee-lights-gold",
    "name": "Ryker Boone \"When The Lights Go Gold\" Supersoft T-Shirt (Black/Gold Logo)",
    "price": "$11.75",
    "image": "/images/promo-ryker-tshirt.png",
    "category": "APPAREL",
    "description": "Bring a touch of premium style to your daily wardrobe. The Ryker Boone \"When The Lights Go Gold\" T-Shirt features a striking gold logo design printed on a sleek black Bella+Canvas unisex tee. Exceptionally soft and lightweight, it blends rugged country charm with a modern, high-end look that is perfect for concerts, tailgates, and everyday wear.",
    "details": [
      "Bella+Canvas supersoft unisex tee",
      "100% Airlume combed and ring-spun cotton",
      "Lightweight and highly breathable (4.2 oz)",
      "Pre-shrunk for a lasting fit"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-when-the-lights-go-gold-supersoft-t-shirt-black-gold-logo"
  },
  {
    "id": "tee-youth-gold",
    "name": "Ryker Boone Youth \"Gold Logo\" T-Shirt (Black/Gold Logo)",
    "price": "$13.50",
    "image": "/images/consistent/merch_graham_tee.png",
    "category": "APPAREL",
    "description": "The perfect tee for the next generation of country music fans. Modeled by Ryker's son Graham, this premium youth shirt features the signature gold Ryker Boone logo printed on a super-soft, lightweight black tee. Crafted from 100% Airlume combed and ring-spun cotton, it provides ultimate comfort for school, play, and family ranch adventures.",
    "details": [
      "Bella+Canvas premium youth tee",
      "100% Airlume combed and ring-spun cotton",
      "Soft-touch neck and durable seams",
      "Classic regular youth fit"
    ],
    "sizes": [
      "S (Y8-10)",
      "M (Y10-12)",
      "L (Y12-14)",
      "XL (Y14-16)"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-youth-gold-logo-t-shirt-black-gold-logo"
  },
  {
    "id": "tee-youth-backroad-black",
    "name": "Ryker Boone Youth \"Backroad Kid\" T-Shirt (White/Black Logo)",
    "price": "$13.50",
    "image": "/images/consistent/merch_graham_tee.png",
    "category": "APPAREL",
    "description": "Classic style for active kids. The Ryker Boone Youth \"Backroad Kid\" T-Shirt features a clean, high-contrast black logo printed on a crisp white Bella+Canvas tee. Exceptionally soft and lightweight, it’s a durable everyday staple that keeps kids cool and comfortable from the classroom to backyard play.",
    "details": [
      "Bella+Canvas premium youth tee",
      "100% Airlume combed and ring-spun cotton",
      "Soft-touch neck and durable seams",
      "Classic regular youth fit"
    ],
    "sizes": [
      "S (Y8-10)",
      "M (Y10-12)",
      "L (Y12-14)",
      "XL (Y14-16)"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-youth-backroad-kid-t-shirt-white-black-logo"
  },
  {
    "id": "tee-youth-honky-tonk-white",
    "name": "Ryker Boone Youth \"Honky Tonk Kid\" T-Shirt (Black/White Logo)",
    "price": "$13.50",
    "image": "/images/consistent/merch_graham_tee.png",
    "category": "APPAREL",
    "description": "A timeless classic, scaled down for younger fans. Emblazoned with a bold white logo on a solid black background, this Ryker Boone youth tee is printed on a premium, ultra-soft Bella+Canvas cotton shirt. Offering a relaxed unisex fit and ultimate breathability, it's the perfect concert or everyday tee for active kids.",
    "details": [
      "Bella+Canvas premium youth tee",
      "100% Airlume combed and ring-spun cotton",
      "Soft-touch neck and durable seams",
      "Classic regular youth fit"
    ],
    "sizes": [
      "S (Y8-10)",
      "M (Y10-12)",
      "L (Y12-14)",
      "XL (Y14-16)"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-youth-honky-tonk-kid-t-shirt-black-white-logo"
  },
  {
    "id": "hoodie-honky-tonk-black",
    "name": "Ryker Boone \"Honky Tonk Sundown\" Premium Hoodie (White/Black Logo)",
    "price": "$27.29",
    "image": "/images/consistent/merch_family_group.png",
    "category": "APPAREL",
    "description": "The ultimate cold-weather layering essential. The official Ryker Boone \"Honky Tonk Sundown\" Premium Hoodie is crafted from a heavyweight, ultra-soft cotton-poly blend. Featuring a clean black logo design printed on a crisp white backdrop, it is built with a spacious front pocket and matching drawcords—perfect for late-night campfires and chilly morning deck sessions.",
    "details": [
      "Cotton Heritage premium heavy fleece",
      "Front pouch pocket and matching drawcords",
      "Double-needle stitching at seams",
      "Super soft combed ring-spun cotton"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-honky-tonk-sundown-premium-hoodie-white-black-logo"
  },
  {
    "id": "hoodie-lights-gold",
    "name": "Ryker Boone \"When The Lights Go Gold\" Premium Hoodie (Black/Gold Logo)",
    "price": "$27.29",
    "image": "/images/consistent/merch_family_group.png",
    "category": "APPAREL",
    "description": "A premium cold-weather classic. The Ryker Boone \"When The Lights Go Gold\" Premium Hoodie features a striking gold logo design printed on a sleek black Cotton Heritage hoodie. Heavyweight and incredibly soft to the touch, this hoodie blends rugged comfort with a high-end look that is perfect for tailgates, evening concerts, and everyday wear.",
    "details": [
      "Cotton Heritage premium heavy fleece",
      "Front pouch pocket and matching drawcords",
      "Double-needle stitching at seams",
      "Super soft combed ring-spun cotton"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-when-the-lights-go-gold-premium-hoodie-black-gold-logo"
  },
  {
    "id": "hoodie-backroad-white",
    "name": "Ryker Boone \"Backroad Heartbeat\" Premium Hoodie (Black/White Logo)",
    "price": "$27.29",
    "image": "/images/consistent/merch_family_group.png",
    "category": "APPAREL",
    "description": "The classic fan essential, built for comfort that lasts. Emblazoned with a bold white logo on a deep black Cotton Heritage hoodie, the Ryker Boone \"Backroad Heartbeat\" Premium Hoodie features a heavyweight, ultra-plush fabric designed for daily wear. Keep warm and move to the beat through the coldest seasons.",
    "details": [
      "Cotton Heritage premium heavy fleece",
      "Front pouch pocket and matching drawcords",
      "Double-needle stitching at seams",
      "Super soft combed ring-spun cotton"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-backroad-heartbeat-premium-hoodie-black-white-logo"
  },
  {
    "id": "hoodie-youth-honky-tonk-black",
    "name": "Ryker Boone Youth \"Honky Tonk Kid\" Heavy Blend Hoodie (White/Black Logo)",
    "price": "$13.50",
    "image": "/images/consistent/merch_graham_hoodie.png",
    "category": "APPAREL",
    "description": "Cozy warmth built for active kids. The official Ryker Boone Youth \"Honky Tonk Kid\" Heavy Blend Hoodie features a clean black logo printed on a crisp white midweight fleece. Specially designed for child safety with no drawcords, it features a double-lined hood and a front pouch pocket to keep hands warm on chilly mornings.",
    "details": [
      "Gildan Youth Heavy Blend fleece",
      "Double-lined hood with no drawcords for safety",
      "Air jet yarn for reduced pilling",
      "Durable double-needle stitching"
    ],
    "sizes": [
      "S (Y8-10)",
      "M (Y10-12)",
      "L (Y12-14)",
      "XL (Y14-16)"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-youth-honky-tonk-kid-heavy-blend-hoodie-white-black-logo"
  },
  {
    "id": "hoodie-youth-gold-gold",
    "name": "Ryker Boone Youth \"Gold Logo\" Heavy Blend Hoodie (Black/Gold Logo)",
    "price": "$13.50",
    "image": "/images/consistent/merch_graham_hoodie.png",
    "category": "APPAREL",
    "description": "The ultimate cozy layer for young country fans. Modeled by Ryker's son Graham, this premium youth hoodie features a striking gold logo design printed on a solid black fleece background. Made from a durable, soft cotton-poly blend, it’s built to withstand playground adventures, ranch chores, and cool campfire nights.",
    "details": [
      "Gildan Youth Heavy Blend fleece",
      "Double-lined hood with no drawcords for safety",
      "Air jet yarn for reduced pilling",
      "Durable double-needle stitching"
    ],
    "sizes": [
      "S (Y8-10)",
      "M (Y10-12)",
      "L (Y12-14)",
      "XL (Y14-16)"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-youth-gold-logo-heavy-blend-hoodie-black-gold-logo"
  },
  {
    "id": "hoodie-youth-backroad-white",
    "name": "Ryker Boone Youth \"Backroad Kid\" Heavy Blend Hoodie (Black/White Logo)",
    "price": "$13.50",
    "image": "/images/consistent/merch_graham_hoodie.png",
    "category": "APPAREL",
    "description": "A timeless classic, scaled down for active boys and girls. Emblazoned with a bold white logo on a deep black Gildan youth hoodie, the \"Backroad Kid\" Heavy Blend Hoodie features an ultra-cozy midweight fleece fabric designed for daily wear. Keep warm and play hard through the coldest seasons.",
    "details": [
      "Gildan Youth Heavy Blend fleece",
      "Double-lined hood with no drawcords for safety",
      "Air jet yarn for reduced pilling",
      "Durable double-needle stitching"
    ],
    "sizes": [
      "S (Y8-10)",
      "M (Y10-12)",
      "L (Y12-14)",
      "XL (Y14-16)"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-youth-backroad-kid-heavy-blend-hoodie-black-white-logo"
  },
  {
    "id": "tee-womens-classic-sweet-tea",
    "name": "Ryker Boone Women's \"Sweet Tea & Blue Jeans\" Classic Tee (White/Black Logo)",
    "price": "$18.55",
    "image": "/images/consistent/merch_joyce_beanie.png",
    "category": "APPAREL",
    "description": "A premium, heavy-drape classic for everyday comfort. Inspired by slow southern afternoons and front porch writing sessions, this women’s classic tee features Ryker's signature branding in a bold black logo printed on a crisp white shirt. Crafted from 100% combed cotton, it offers a sturdy but soft feel with a relaxed regular fit and a flattering longer length.",
    "details": [
      "Heavyweight 6.5 oz, 22-singles combed cotton",
      "Side-seamed construction, neck ribbing, and shoulder-to-shoulder tape",
      "Double needle hems and pre-shrunk",
      "Regular fit with a longer length. Model is 5'7\" and wearing a size M"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-womens-sweet-tea-blue-jeans-classic-tee-white-black-logo"
  },
  {
    "id": "tee-womens-classic-lights-gold",
    "name": "Ryker Boone Women's \"When The Lights Go Gold\" Classic Tee (Black/Gold Logo)",
    "price": "$18.55",
    "image": "/images/consistent/merch_joyce_beanie.png",
    "category": "APPAREL",
    "description": "Bring a touch of golden country style to your everyday look. The official \"When The Lights Go Gold\" women's classic tee features Ryker Boone's signature stamp printed in a rich, vibrant gold against a deep black background. Made from premium, heavyweight combed cotton, it gives you a structured, durable drape that keeps its shape and look.",
    "details": [
      "High-contrast signature gold logo",
      "Heavyweight 6.5 oz combed ring-spun cotton",
      "Neck ribbing, side-seamed design, and shoulder-to-shoulder tape",
      "Regular cut with a longer length. Model is 5'7\" and wearing a size M"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-womens-when-the-lights-go-gold-classic-tee-black-gold-logo"
  },
  {
    "id": "tee-womens-classic-backroad-white",
    "name": "Ryker Boone Women's \"Backroad Heartbeat\" Classic Tee (Black/White Logo)",
    "price": "$18.55",
    "image": "/images/consistent/merch_joyce_beanie.png",
    "category": "APPAREL",
    "description": "Classic styling built for the country roads. Emblazoned with a crisp white logo on a sleek black background, the \"Backroad Heartbeat\" classic tee is a premium, everyday basic for fans. Heavyweight but exceptionally soft, this combed cotton tee offers a clean drape and a longer length for casual, comfortable wear.",
    "details": [
      "Crisp, high-contrast white logo",
      "Sturdy 6.5 oz combed cotton with side seams",
      "Shoulder-to-shoulder tape, neck ribbing, and pre-shrunk fabric",
      "Regular fit with a longer length. Model is 5'7\" and wearing a size M"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-womens-backroad-heartbeat-classic-tee-black-white-logo"
  },
  {
    "id": "tee-comfort-colors-honky-tonk-white",
    "name": "Ryker Boone \"Honky Tonk Sundown\" Comfort Colors Heavyweight Tee (White/Black Logo)",
    "price": "$15.45",
    "image": "/images/promo-ryker-tshirt.png",
    "category": "APPAREL",
    "description": "The ultimate vintage-style concert tee. The official \"Honky Tonk Sundown\" heavyweight tee is printed on a premium Comfort Colors garment-dyed shirt for a lived-in, soft-washed feel right out of the box. Decorated with Ryker's signature branding in a clean black logo on a crisp white shirt, it offers a relaxed, classic fit that looks and feels like an old favorite.",
    "details": [
      "100% ring-spun cotton, garment-dyed for a relaxed, retro look",
      "Sturdy 6.1 oz fabric designed to keep its shape",
      "Double-needle stitching on the collar, sleeves, and bottom hem",
      "Classic relaxed fit"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-honky-tonk-sundown-comfort-colors-heavyweight-tee-white-black-logo"
  },
  {
    "id": "tee-comfort-colors-lights-gold",
    "name": "Ryker Boone \"When The Lights Go Gold\" Comfort Colors Heavyweight Tee (Black/Gold Logo)",
    "price": "$15.45",
    "image": "/images/promo-ryker-tshirt.png",
    "category": "APPAREL",
    "description": "Classic comfort meets high-end country style. The \"When The Lights Go Gold\" Comfort Colors heavyweight tee features Ryker's stamp logo in a rich, vibrant gold print against a garment-dyed black background. With a relaxed fit and incredibly soft ring-spun cotton, this heavyweight tee combines rustic charm with a premium, lived-in feel.",
    "details": [
      "Custom printed with a high-contrast gold logo",
      "100% ring-spun cotton washed for a vintage feel",
      "Heavyweight 6.1 oz fabric with double-needle collar and hems",
      "Relaxed fit"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-when-the-lights-go-gold-comfort-colors-heavyweight-tee-black-gold-logo"
  },
  {
    "id": "tee-comfort-colors-backroad-white",
    "name": "Ryker Boone \"Backroad Heartbeat\" Comfort Colors Heavyweight Tee (Black/White Logo)",
    "price": "$15.45",
    "image": "/images/promo-ryker-tshirt.png",
    "category": "APPAREL",
    "description": "Low-key, rugged, and incredibly comfortable. Emblazoned with a bold white logo design on a garment-dyed black Comfort Colors shirt, the \"Backroad Heartbeat\" heavyweight tee is the perfect go-to daily essential. Made from soft, ring-spun cotton, it delivers a comfortable, relaxed fit with a stylish, faded vintage look.",
    "details": [
      "Crisp white Ryker Boone logo design on a classic washed black shirt",
      "100% ring-spun cotton, garment-dyed for a lived-in look and feel",
      "Heavyweight 6.1 oz fabric with double-needle hems",
      "Comfortable relaxed fit"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "link": "https://shop.rykerboonemusic.website/products/ryker-boone-backroad-heartbeat-comfort-colors-heavyweight-tee-black-white-logo"
  }
];

function StoreContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | "APPAREL" | "ACCESSORIES">("ALL");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");

  useEffect(() => {
    const productId = searchParams?.get("product");
    if (productId) {
      const found = products.find(p => p.id === productId);
      if (found) {
        setSelectedProduct(found);
        setSelectedSize(found.sizes ? found.sizes[0] : "");
      }
    }
  }, [searchParams]);

  const filteredProducts = selectedCategory === "ALL" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const openDrawer = (product: Product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes ? product.sizes[0] : "");
  };

  const closeDrawer = () => {
    setSelectedProduct(null);
  };

  return (
    <main style={{ background: '#050505', color: 'white', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <Navbar />
      
      {/* Store Header */}
      <section style={{ paddingTop: '10rem', paddingBottom: '4rem', paddingLeft: '8%', paddingRight: '8%', background: 'linear-gradient(to bottom, #0a0a0a, #050505)' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: '900', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            Ryker Boone Official Store
          </span>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginTop: '1rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
            THE FAMILY <span style={{ color: 'var(--accent-gold)' }}>COLLECTION</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8', fontSize: '1rem' }}>
            Premium apparel and accessories designed in Nashville, modeled by the Boone family. Crafted for durability and authentic country lifestyle.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
          {(["ALL", "APPAREL", "ACCESSORIES"] as const).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                background: 'transparent',
                border: 'none',
                color: selectedCategory === category ? 'var(--accent-gold)' : 'var(--text-secondary)',
                fontSize: '0.75rem',
                fontWeight: '900',
                letterSpacing: '0.25em',
                cursor: 'pointer',
                padding: '0.5rem 1rem',
                position: 'relative',
                transition: 'color 0.3s ease'
              }}
            >
              {category}
              {selectedCategory === category && (
                <div style={{
                  position: 'absolute',
                  bottom: '-1.1rem',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'var(--accent-gold)'
                }} />
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '3rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              onClick={() => openDrawer(product)}
              style={{ 
                background: 'rgba(255,255,255,0.01)', 
                border: '1px solid rgba(255,255,255,0.03)',
                borderRadius: '16px',
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'rgba(226, 179, 90, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)';
              }}
            >
              <div style={{ 
                position: 'relative', 
                aspectRatio: '1', 
                borderRadius: '8px', 
                overflow: 'hidden',
                marginBottom: '1.5rem',
                background: 'rgba(0,0,0,0.2)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
              }}>
                <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
                <div style={{ 
                  position: 'absolute', 
                  top: '1rem', 
                  left: '1rem', 
                  background: 'rgba(10,10,10,0.85)', 
                  padding: '0.4rem 0.8rem', 
                  fontSize: '0.55rem', 
                  fontWeight: '900', 
                  letterSpacing: '0.15em',
                  color: 'var(--accent-gold)',
                  borderRadius: '3px'
                }}>
                  {product.category}
                </div>
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.75rem', color: 'white', fontFamily: 'var(--font-playfair)', minHeight: '2.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {product.name}
              </h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--accent-gold)', fontWeight: '900', fontSize: '1.1rem' }}>
                  {product.price}
                </span>
                <span style={{ fontSize: '0.65rem', fontWeight: '900', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
                  Quick Buy
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Slide-out Drawer */}
      {selectedProduct && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(10px)',
          zIndex: 999,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        onClick={closeDrawer}
        >
          <div style={{
            width: '100%',
            maxWidth: '500px',
            height: '100%',
            background: '#0d0d0d',
            borderLeft: '1px solid rgba(226, 179, 90, 0.15)',
            padding: '3rem 2.5rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeDrawer}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              ×
            </button>

            {/* Product Details inside Drawer */}
            <div style={{ position: 'relative', aspectRatio: '1', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 30px 60px rgba(0,0,0,0.6)' }}>
              <Image src={selectedProduct.image} alt={selectedProduct.name} fill style={{ objectFit: 'cover' }} />
            </div>

            <span style={{ color: 'var(--accent-gold)', fontSize: '0.65rem', fontWeight: '900', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
              {selectedProduct.category}
            </span>
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white', lineHeight: '1.2' }}>
              {selectedProduct.name}
            </h2>
            <div style={{ color: 'var(--accent-gold)', fontSize: '1.5rem', fontWeight: '900', marginBottom: '1.5rem' }}>
              {selectedProduct.price}
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.9rem', marginBottom: '2rem' }}>
              {selectedProduct.description}
            </p>

            {/* Sizes */}
            {selectedProduct.sizes && (
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: '900', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
                  Select Size
                </span>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        padding: '0.5rem 1rem',
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        background: selectedSize === size ? 'var(--accent-gold)' : 'rgba(255,255,255,0.02)',
                        color: selectedSize === size ? 'black' : 'white',
                        border: selectedSize === size ? '1px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Details Bullet List */}
            <div style={{ marginBottom: '3rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: '900', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                Product Features
              </span>
              <ul style={{ display: 'grid', gap: '0.5rem', paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                {selectedProduct.details.map((detail, index) => (
                  <li key={index} style={{ marginBottom: '0.25rem' }}>{detail}</li>
                ))}
              </ul>
            </div>
            {/* Buy Action */}
            <div style={{ marginTop: 'auto' }}>
              <Link href={selectedProduct.link || "https://shop.rykerboonemusic.website"} target="_blank">
                <button style={{
                  width: '100%',
                  background: 'var(--accent-gold)',
                  color: 'black',
                  padding: '1.2rem',
                  fontSize: '0.8rem',
                  fontWeight: '900',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f5c66b'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--accent-gold)'}
                >
                  PURCHASE ON OFFICIAL STORE
                </button>
              </Link>
              <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em' }}>
                Fulfilled by SingIt Pop Official Merchandising Partner
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

export default function StorePage() {
  return (
    <Suspense fallback={<div style={{ background: '#050505', minHeight: '100vh' }} />}>
      <StoreContent />
    </Suspense>
  );
}
