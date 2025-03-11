export const products = [
  {
    id: "1",
    name: "Day Cream",
    description: "A lightweight, fast-absorbing moisturizer with SPF 30 protection. Formulated with vitamin E and green tea extract to protect and nourish your skin throughout the day.",
    longDescription: `Our Day Cream is specifically formulated for the modern man's skincare needs. This advanced formula combines powerful UV protection with nourishing ingredients that work together to:

• Shield your skin from harmful UV rays with broad-spectrum SPF 30
• Hydrate and nourish with vitamin E and green tea extract
• Improve skin texture and tone
• Provide all-day moisture without feeling heavy or greasy

Perfect for daily use, this cream absorbs quickly and leaves no residue, making it ideal for all skin types.`,
    price: 45.00,
    details: [
      "50ml / 1.7 fl oz",
      "SPF 30 protection",
      "Non-greasy formula",
      "Suitable for all skin types"
    ],
    ingredients: "Water, Homosalate, Ethylhexyl Salicylate, Butyl Methoxydibenzoylmethane, Glycerin, Dimethicone, Vitamin E, Camellia Sinensis (Green Tea) Leaf Extract, Panthenol, Allantoin, Carbomer, Phenoxyethanol, Ethylhexylglycerin",
    usage: "Apply generously to clean face and neck every morning. Allow to absorb for 1-2 minutes before sun exposure. Reapply every 2 hours when exposed to sun.",
    image: "/images/DayCream.jpg",
    size: "50ml"
  },
  {
    id: "2",
    name: "Body + Hair Shampoo",
    description: "A dual-action cleanser that revitalizes both body and hair. Enriched with biotin and natural extracts for a complete grooming experience.",
    longDescription: `Experience the ultimate convenience with our 2-in-1 Body + Hair Shampoo. This innovative formula is designed to simplify your grooming routine while delivering exceptional results:

• Cleanses both hair and body effectively
• Enriched with biotin for stronger hair
• Natural extracts provide a refreshing sensation
• Balanced pH suitable for daily use
• Maintains skin and scalp health

Our unique blend of ingredients ensures a thorough yet gentle clean, leaving you feeling refreshed and invigorated.`,
    price: 35.00,
    details: [
      "250ml / 8.4 fl oz",
      "Sulfate-free formula",
      "All-in-one solution",
      "Suitable for daily use"
    ],
    ingredients: "Water, Cocamidopropyl Betaine, Sodium Cocoyl Isethionate, Biotin, Panthenol, Aloe Barbadensis Leaf Juice, Mentha Piperita (Peppermint) Oil, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Glycerin, Citric Acid, Phenoxyethanol",
    usage: "Apply to wet hair and body. Massage gently to create a rich lather. Rinse thoroughly. Suitable for daily use.",
    image: "/images/Shampoo.jpg",
    size: "250ml"
  },
  {
    id: "3",
    name: "Spot Care",
    description: "A targeted treatment that quickly addresses imperfections. Contains salicylic acid and tea tree oil for effective spot control without drying the skin.",
    longDescription: `Our Spot Care treatment is a powerful yet gentle solution for targeting specific skin concerns. This concentrated formula works quickly to:

• Clear imperfections with salicylic acid
• Soothe irritation with tea tree oil
• Prevent future breakouts
• Reduce redness and inflammation
• Maintain skin's natural moisture balance

The precision applicator ensures targeted treatment exactly where you need it, making it perfect for on-the-spot care.`,
    price: 28.00,
    details: [
      "30ml / 1.0 fl oz",
      "Fast-acting formula",
      "Targeted application",
      "Gentle yet effective"
    ],
    ingredients: "Water, Salicylic Acid (2%), Melaleuca Alternifolia (Tea Tree) Leaf Oil, Niacinamide, Zinc PCA, Allantoin, Glycerin, Propylene Glycol, Polysorbate 20, Phenoxyethanol",
    usage: "Clean affected area thoroughly. Apply a small amount directly to spots using the precision tip. Use morning and evening, or as needed. Avoid eye area.",
    image: "/images/SpotCare.jpg",
    size: "30ml"
  }
] as const

export type Product = typeof products[number] 