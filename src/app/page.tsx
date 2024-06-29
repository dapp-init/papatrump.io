"use client";
import Image from "next/image";
import logo from "../assets/homeimage/logo-003.jpg";
import images from "../constant/images";
import TidioChat from "@/components/tidio";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to another page
    router.push("/connectwallet");
  };

  return (
    <div>
      {/* navbar section */}
      <div className="bg-black p-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-l font-bold text-xl">
          <Image src={images.pptLogo} alt="Image" className="h-12 w-auto" />
        </div>

        {/* Button */}
        <button
          onClick={handleClick}
          className="bg-blue-600 text-white text-2xl font-black py-2 px-8 rounded"
        >
          BUY
        </button>
      </div>

      {/* header */}

      <div className="relative">
        {/* First div with full-width and full-height image */}
        <div className="relative h-screen">
          <Image
            className="object-cover object-center h-full w-full"
            src={images.ppt1}
            alt="First Image"
          />
          {/* Second div - content overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Centered content */}
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="text-center text-white">
              <div className="flex items-center mx-8 px-16">
                <Image
                  src={images.ppt2}
                  alt="Top Image"
                  className=" flex items-center"
                  height={300}
                  width={300}
                />
              </div>

              <div className="flex flex-col md:flex-row md:justify-center md:items-center mt-10 ">
                <button onClick={handleClick} className="bg-blue-600  border-4 border-white text-white font-bold py-3 px-8 rounded max-w-full break-words ">
                  BUY NOW
                </button>
              </div>
              <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-2 mt-8 mb-4  ">
                <button onClick={handleClick} className="bg-blue-600  border-4 border-white text-white font-bold py-3 px-8 rounded max-w-full break-words ">
                  UNISWAP
                </button>
                <button onClick={handleClick} className="bg-blue-600  border-4 border-white text-white font-bold py-3 px-8 rounded max-w-full break-words ">
                  DEXTOOLS
                </button>
                <button onClick={handleClick} className="bg-blue-600  border-4 border-white text-white font-bold py-3 px-8 rounded max-w-full break-words ">
                  DEXSCREENER
                </button>
              </div>
              <div className="flex flex-col md:flex-row md:justify-center md:items-center  gap-2 ">
                <button onClick={handleClick} className="bg-blue-600  border-4 border-white text-white font-bold py-3 px-8 rounded max-w-full break-words ">
                  AVE.AI
                </button>
                <button onClick={handleClick} className="bg-blue-600  border-4 border-white text-white font-bold py-3 px-8 rounded max-w-full break-words ">
                  DEXVIEW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 mt-10 pt-5">
          <div className="text-center">
            <div className="text-7xl font-bold text-blue-600">ABOUT</div>
            <div className="mt-4">
              <p className="text-lg">
                PAPA Trump : Where Memes Meet Investment!
              </p>
              <br />
              <br />
              <p className="text-lg">
                PAPA Trump stands at the intersection of meme culture and
                investment opportunities, offering a unique platform where
                supporters of Donald Trump and savvy investors alike can thrive.
              </p>
              <br />
              <br />
              <p className="text-lg">
                The live PAPA Trump price today is $0.001507 USD with a 24-hour
                trading volume of $439,450 USD. We update our PPT to USD price
                in real-time. PAPA Trump is up 6.57% in the last 24 hours. The
                current CoinMarketCap ranking is #2991, with a live market cap
                of not available. The circulating supply is not available and
                the max. supply is not available.
              </p>
              <br />
              <br />
            </div>
            <div className="mt-8 flex justify-center space-x-4">
              <button
                onClick={handleClick}
                className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-3 rounded-lg border-4 border-white"
              >
                BUY NOW
              </button>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-14 py-3 rounded-lg border-4 border-white">
                CHART
              </button>
            </div>
            <div className="mt-8 flex space-x-9 justify-center px-16 mx-16">
              <Image
                src={images.aveai}
                alt="Image 1"
                className="rounded-lg"
                width={50}
                height={50}
              />
              <Image
                src={images.dexScreener}
                alt="Image 2"
                className="rounded-lg"
                width={50}
                height={50}
              />
              <Image
                src={images.dexTools}
                alt="Image 3"
                className="rounded-lg"
                width={50}
                height={50}
              />
              <Image
                src={images.jupiter}
                alt="Image 3"
                className="rounded-lg"
                width={50}
                height={50}
              />
            </div>
            <div className="mt-8">
              <p className="text-lg">2024(c). ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </div>

      <TidioChat />

      {/* key features */}
    </div>
  );
}
