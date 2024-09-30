import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="text-[#E2E8F0] bg-black px-4 text-center lg:px-20 lg:h-[464px] max-sm:py-4">
      <div className="lg:h-[368px] flex flex-col justify-center max-sm:mb-6">
        <div className="w-full lg:grid lg:grid-cols-4 lg:col-span-4 gap-12 flex flex-col ">
          <div className="flex flex-col gap-3 lg:items-start">
            <h3 className="font-medium text-base py-3">Product</h3>
            <ul className="flex flex-col items-center gap-6  lg:items-start">
              <li className="leading-none text-base !font-normal">Pricing</li>
              <li className="leading-none text-base !font-normal">
                Overview 2
              </li>
              <li className="leading-none text-base !font-normal">Browse</li>
              <li className="leading-none text-base !font-normal">
                Accessibility
              </li>
              <li className="leading-none text-base !font-normal">Five</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 lg:items-start">
            <h3 className="font-medium text-base py-3">Solutions</h3>
            <ul className="gap-3 flex flex-col items-center gap-6 lg:items-start">
              <li className="leading-none text-base !font-normal">
                Brainstorming
              </li>
              <li className="leading-none text-base !font-normal">Ideation </li>
              <li className="leading-none text-base !font-normal">
                Wireframing
              </li>
              <li className="leading-none text-base !font-normal">Research </li>
              <li className="leading-none text-base !font-normal">Design </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 lg:items-start">
            <h3 className="font-medium text-base py-3">Support</h3>
            <ul className="gap-3 flex flex-col items-center gap-6 lg:items-start">
              <li className="leading-none text-base !font-normal">
                Contact Us
              </li>
              <li className="leading-none text-base !font-normal">
                Developers
              </li>
              <li className="leading-none text-base !font-normal">
                Documentation
              </li>

              <li className="leading-none text-base !font-normal">
                Integrations
              </li>
              <li className="leading-none text-base !font-normal">Reports</li>
            </ul>
          </div>
          <div className="lg:mt-0 mt-12 lg:flex lg:flex-col">
            <div className="lg:items-start flex flex-col items-center">
              <h3 className="font-medium text-base py-3">Get the App</h3>
              <div className="lg:items-start mt-2 gap-3 flex flex-col items-center">
                <Link href="https://www.apple.com/app-store/">
                  <Image
                    src="/footer/app-store.svg"
                    alt="App Store"
                    width={128}
                    height={40}
                    className="w-full h-full cursor-pointer"
                  />
                </Link>
                <Link href="https://play.google.com/store">
                  <Image
                    src="/footer/google-play.svg"
                    alt="Google Play"
                    width={128}
                    height={40}
                    className="w-full h-full cursor-pointer"
                  />
                </Link>
              </div>
            </div>

            <div className="lg:items-start flex flex-col items-center mt-8">
              <h3 className="font-medium text-base py-3">Follow Us</h3>
              <div className="gap-4 flex items-center">
                <Link href="https://www.youtube.com">
                  <Image
                    src="/footer/social/youtube.svg"
                    alt="Youtube"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </Link>
                <Link href="https://www.facebook.com">
                  <Image
                    src="/footer/social/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </Link>
                <Link href="https://www.twitter.com">
                  <Image
                    src="/footer/social/twitter.svg"
                    alt="Twitter"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </Link>
                <Link href="https://www.instagram.com">
                  <Image
                    src="/footer/social/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </Link>
                <Link href="https://www.linkedin.com">
                  <Image
                    src="/footer/social/linkedin.svg"
                    alt="Linkedin"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:h-[49px] lg:justify-between lg:items-center border-t border-white/50 max-sm:pt-12 pt-8 flex flex-col lg:flex-row">
        <p className="leading-none text-center">
          Collers @ 2023. All rights reserved.
        </p>
        <div className="max-sm:mt-6 gap-8 flex items-center justify-center">
          <Link href="#cookie-policy">Terms</Link>
          <Link href="#privacy-policy">Privacy</Link>
          <Link href="#terms">Contact</Link>
          <div className="gap-2 flex items-center">
            <Image
              src="/footer/world.svg"
              alt="Lang"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <span>EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
