import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Home Remedy Guru</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/symptom-checker">Symptom Checker</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/forum">Community Forum</Link></li>
            <li><Link href="/daily-tips">Daily Tips</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

