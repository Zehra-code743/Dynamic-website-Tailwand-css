import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto p-8 bg-orange-100">
      {/* Intro Section */}
      <div className="intro mb-12">
        <h1 className="text-3xl font-semibold text-gray-900">This is my About Us Page</h1>
        <p className="mt-4 text-lg text-gray-700">
          At Perfume Direct we're committed to providing an exceptional shopping experience with an easy to use website fast shipping, and outstanding customer service. Our mission is to supply the biggest fragrance & cosmetics brands at affordable prices to all.
        </p>
        <p className="mt-4 text-lg text-gray-700">Orders Shipped: 800k and counting...</p>
      </div>

      {/* Products Section */}
      <section className="contact">
        {/* First Row of Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="aipic">
            <h2 className="text-xl font-semibold text-gray-900">Product 1</h2>
            <p className="mt-2 text-gray-600">Step 1 Take A Warm Bath & Dry Your Skin.</p>
            <Image src="/images 7.png" alt="Product 1" height={300} width={300} className="rounded-lg shadow-md mt-4" />
          </div>
          <div className="aipic">
            <h2 className="text-xl font-semibold text-gray-900">Product 2</h2>
            <p className="mt-2 text-gray-600">Step 2 Moisturize.</p>
            <Image src="/images 8.jpg" alt="Product 2" height={300} width={300} className="rounded-lg shadow-md mt-4" />
          </div>
        </div>

        {/* Second Row of Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="aipic">
            <h2 className="text-xl font-semibold text-gray-900">Product 3</h2>
            <p className="mt-2 text-gray-600">Step 3 Apply Perfume Focusing On Pulse Points.</p>
            <Image src="/perfume14.png" alt="Product 3" height={300} width={300} className="rounded-lg shadow-md mt-4" />
          </div>
          <div className="aipic">
            <h2 className="text-xl font-semibold text-gray-900">Product 4</h2>
            <p className="mt-2 text-gray-600">Step 4 Avoid Rubbing the Perfume on Your Body.</p>
            <Image src="/perfume13.png" alt="Product 4" height={300} width={300} className="rounded-lg shadow-md mt-4" />
          </div>
        </div>
      </section>
    </div>
  );
}
