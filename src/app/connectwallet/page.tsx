"use client";
import React, { MouseEvent, useState } from "react";
import { images, data } from "@/constant";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

import loading from "../loading";

function ConnectWallet() {
  interface Wallet {
    imageUrl: StaticImageData;
    title: string;
  }

  const [isLoading, setIsLoading] = useState(false);

  const Card: React.FC<Wallet> = ({ imageUrl, title }) => {
    const router = useRouter();

    const handleCardClick = (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsLoading(true);
      setTimeout(() => {
        // Navigate to another page with the title from the card clicked
        router.push(`/input-page?title=${encodeURIComponent(title)}`);
      }, 4000);
    };

    return (
      <div
        className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
        onClick={handleCardClick}
      >
        <Image src={imageUrl} alt={title} className="w-full rounded-t-lg" />
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </div>
    );
  };


  return (
    <div>
      
      {/* Header */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-4">
          {/* Left side */}
          <div className="flex items-center">
            <Image
              src={images.walletIoWallet}
              alt="Image"
              className="h-12 w-auto"
              width={48}
              height={48}
            />
          </div>

          {/* Right side */}
          <div className="space-x-4">
            <a href="#" className="text-blue-500 hover:underline">
              Wallets
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              Apps
            </a>
          </div>
        </div>
      </div>
      {/* Centered content */}
      <div className="flex items-center justify-center mt-8">
        <div className="text-center">
          <h3 className="text-4xl font-bold">Wallets</h3>
          <p className="mt-2 text-xl p-2">
            Multiple iOS and Android wallets support this protocol. Your private
            keys are encrypted locally on your device with Secure Enclave,
            protected by Biometric and 2-Factor Authentication. .
          </p>
        </div>
      </div>
      {/* Wallet Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 sm:grid-cols-3 gap-3 mt-8 p-8">
        {data.wallets.map((wallet, index) => (
          <Card key={index} title={wallet.title} imageUrl={wallet.imgUrl} />
        ))}
      </div>
      {isLoading && loading()}
      {/*footer*/}
      <div className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
        <div className="max-w-4xl mx-auto flex justify-between px-4">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Discord
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Telegram
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default ConnectWallet;
