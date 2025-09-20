import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="grid gap-8 md:grid-cols-2 items-center min-h-screen p-8">
      {/* Left side - Image */}
      <div className="relative aspect-[4/4.5] w-full">
        <Image
          src="/Hassan.jpg"
          alt="Contact illustration"
            fill
          className="object-cover rounded-lg shadow"
          priority
        />
      </div>

      {/* Right side - Form */}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-xl text-center mb-6">
          Hum se raabta k liye neeche form bhariye.
        </p>

        <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
