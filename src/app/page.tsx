import Image from "next/image";

export default function HomePage() {
  return (
    <div className="grid gap-8 md:grid-cols-2 items-center min-h-screen p-8">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Welcome to My Simple Site</h1>
        <p className="text-gray-700">
          Ye ek minimal Next.js 15 + TypeScript + Tailwind CSS website hai.
          Isme sirf Home, About aur Contact pages hain — koi extra package nahi.
        </p>
        <div className="flex gap-3">
          <a
            href="/about"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Learn More
          </a>
          <a
            href="/contact"
            className="inline-flex items-center rounded-md border px-4 py-2 hover:bg-gray-50"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="relative aspect-[4/4.5] w-full">
        <Image
          src="/Hassan.jpg"
          alt="Homepage hero image"
          fill
          className="object-cover rounded-lg shadow"
          priority
        />
      </div>
    </div>
  );
}
