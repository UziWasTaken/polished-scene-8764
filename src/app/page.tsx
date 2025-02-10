import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gradient-to-b from-purple-100 to-white dark:from-purple-900 dark:to-gray-900">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-sans text-lg">
        <h1 className="text-4xl font-bold text-center text-purple-700 dark:text-purple-300 mb-8">
          Kanna's Adventure
        </h1>
        <p className="text-center text-purple-600 dark:text-purple-200 mb-12">
          Join Kanna Kamui in her daily adventures in the human world!
        </p>
      </div>

      <div className="relative w-64 h-64 mb-12">
        <Image
          className="rounded-full border-4 border-purple-400 dark:border-purple-500 shadow-lg"
          src="/kanna-profile.jpg" // You'll need to add this image
          alt="Kanna Kamui"
          width={256}
          height={256}
          priority
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        <div className="bg-white dark:bg-purple-900/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-200 dark:border-purple-700">
          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-3">
            Daily Life
          </h2>
          <p className="text-purple-600 dark:text-purple-200">
            Follow Kanna's everyday adventures at school and home
          </p>
        </div>

        <div className="bg-white dark:bg-purple-900/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-200 dark:border-purple-700">
          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-3">
            Photo Gallery
          </h2>
          <p className="text-purple-600 dark:text-purple-200">
            Cute moments captured in the human world
          </p>
        </div>

        <div className="bg-white dark:bg-purple-900/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-200 dark:border-purple-700">
          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-3">
            Dragon Facts
          </h2>
          <p className="text-purple-600 dark:text-purple-200">
            Learn about dragon life and Kanna's special abilities
          </p>
        </div>

        <div className="bg-white dark:bg-purple-900/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-200 dark:border-purple-700">
          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-3">
            Friends
          </h2>
          <p className="text-purple-600 dark:text-purple-200">
            Meet Saikawa and other friends from school
          </p>
        </div>
      </div>

      <footer className="mt-16 text-center text-purple-500 dark:text-purple-300">
        <p>© 2024 Kanna's Adventure - A Dragon's Life in the Human World</p>
      </footer>
    </main>
  );
}
