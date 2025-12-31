"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#f9f4e2] mb-14 md:mb-0 bg-[url('/images/graphics/pattern-footer.png')] px-[max(12px,calc((100%-1208px)/2))] w-full">
      <div className="px-7 py-10 grid-container gap-6 text-[#414141] md:gap-x-10 items-center">
        {/* Логотип со ссылкой на главную */}
        <div className="logo">
          <Link href="/" className="relative w-23 h-16 md:w-16 md:h-11 block">
            <Image src="/icons-footer/logo-footer-2.png" alt="Логотип" fill />
          </Link>
        </div>

        {/* Социальные сети с кликабельными иконками */}
        <div className="social flex flex-row gap-x-5 md:flex-col xl:flex-row gap-y-3 justify-between">
          <div className="flex gap-x-5 items-start flex-wrap">
            <a
              href="https://ig.me/maro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons-footer/instargram.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            <a
              href="https://fb.me/maro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons-footer/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
                className="hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            <a
              href="https://wa.me/70733609"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons-footer/wa.svg"
                alt="WhatsApp"
                width={24}
                height={24}
                className="hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            <a
              href="https://t.me/maro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons-footer/telegram.svg"
                alt="Telegram"
                width={24}
                height={24}
                className="hover:opacity-80 transition-opacity duration-300"
              />
            </a>

            <a 
            href="tel:+37493448055"
            className="flex items-center gap-x-2 hover:opacity-80 transition-opacity duration-300 basis-full md:basis-auto mt-3 md:mt-0"
          >
            <Image
              src="/icons-footer/phone.svg"
              alt="Позвонить по телефону"
              width={20}
              height={20}
              className="hover:opacity-80 transition-opacity duration-300"
            />
            <p className="text-base hover:text-black duration-300">
              70733609
            </p>
          </a>
          </div>
        </div>


        {/* Навигация с кликабельными пунктами */}
        <nav className="nav">
          <ul className="flex flex-wrap gap-x-8 text-xs gap-4 xl:gap-y-2 md:gap-x-10">
            <li className="hover:text-black cursor-pointer">
              <Link href="#">About Us</Link>
            </li>
            <li className="hover:text-black cursor-pointer">
              <Link href="#">Contacts</Link>
            </li>
            <li className="hover:text-black cursor-pointer">
              <Link href="#">Articles</Link>
            </li>
            <li className="hover:text-black cursor-pointer">
              <Link href="#">News</Link>
            </li>
            <li className="hover:text-black cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </nav>

      </div>

      <style jsx>{`
        /* Базовые стили для мобильных (mobile-first) */
        .grid-container {
          display: grid;
          grid-template-areas:
            "logo social"
            "logo phone"
            "nav nav"
            "design design";
          grid-template-columns: 1fr 1fr;
        }

        .logo {
          grid-area: logo;
        }
        .social {
          grid-area: social;
          justify-self: end;
        }
        .phone {
          grid-area: phone;
          justify-self: end;
        }
        .nav {
          grid-area: nav;
        }

        /* Средние экраны (768px и больше) */
        @media (min-width: 768px) {
          .grid-container {
            grid-template-areas:
              "logo nav social phone"
              "logo nav social design";
            grid-template-columns: auto 1fr auto auto;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;