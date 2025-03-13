import { WalletIcon, CreditCardIcon, BanknoteIcon, DollarSignIcon, CheckIcon } from "lucide-react"
import Link from "next/link"
import "@/styles/animated-button.css"

export function AnimatedCheckoutButton() {
  return (
    <Link href="/checkout/payment" className="w-full">
      <button className="pay-btn">
        <div className="icon-container">
          <WalletIcon className="icon default-icon wallet-icon" />
          <CreditCardIcon className="icon card-icon" />
          <BanknoteIcon className="icon payment-icon" />
          <DollarSignIcon className="icon dollar-icon" />
          <CheckIcon className="icon check-icon" />
        </div>
        <span className="btn-text">Proceed to Checkout</span>
      </button>
    </Link>
  )
} 