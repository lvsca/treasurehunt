import Header from "@/components/Header";
import Link from "next/link";
import { Gem, Target, Users, TrendingUp } from 'lucide-react'
import Image from "next/image";
import Footer from "@/components/footer";

const benefits = [
  {
    title: 'Discover Treasures',
    description: 'Find rare and valuable items hidden throughout the game.',
    icon: Gem,
  },
  {
    title: 'Complete Tasks',
    description: 'Take on daily challenges to earn keys and unlock more treasures.',
    icon: Target,
  },
  {
    title: 'Compete with Friends',
    description: 'Join a community of treasure hunters and climb the leaderboards.',
    icon: Users,
  },
  {
    title: 'Level Up',
    description: 'Gain experience and unlock new abilities as you progress.',
    icon: TrendingUp,
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 sm:py-16 lg:py-20 text-center border-b shadow-blue-300 shadow-md mt-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
              Embark on an Epic Treasure Hunt
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              Discover hidden treasures, complete exciting tasks, and level up in this thrilling adventure!
            </p>
            <Link href="/register" className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
              Start Your Adventure
            </Link>
          </div>

          <div className="py-12 sm:py-16 lg:py-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Why Play Treasure Hunt?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center mt-4">
                <div className="bg-indigo-100 rounded-full p-3 mb-4">
                  <benefit.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
                ))}
            </div>
          </div>

          <div className="py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Uncover Rare Treasures</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Explore a vast world filled with hidden treasures waiting to be discovered. From ancient artifacts to magical items, each treasure you find brings you closer to becoming a legendary hunter.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Collect over 100 unique treasures</li>
                  <li>Trade with other players to complete your collection</li>
                  <li>Unlock special abilities with rare items</li>
                </ul>
              </div>
              <div className="relative h-64 sm:h-80 lg:h-96">
                <Image
                  src="https://i.pinimg.com/736x/d7/82/55/d78255e46cb3152c126d04a92454b14e.jpg"
                  alt="Treasure chest filled with gold coins and jewels"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="py-12 sm:py-16 lg:py-20 text-center border border-blue-300 border-t shadow-md shadow-blue-300 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of treasure hunters and embark on an unforgettable journey. Sign up now and claim your first treasure for free!
            </p>
            <Link href="/register" className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
              Create Your Account
            </Link>
          </div>

          <Footer />
        </div>
      </main>
    </div>
  )
}