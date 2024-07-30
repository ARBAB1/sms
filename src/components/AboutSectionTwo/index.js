import { aboutImg } from "@/assets/images";
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 px-20 md:py-20 lg:py-28 ">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
          <div
          className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
          data-wow-delay=".15s"
        >
          <Image
            src="/images/about/about2.jpeg"
            alt="about image"
            fill
            className="drop-shadow-three dark:hidden dark:drop-shadow-none"
          />
          <Image
            src="/images/about/about2.jpeg"
            alt="about image"
            fill
            className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
          />
        </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
          <div className="max-w-[470px]">
              <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Mobile Financial Services Integration
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Partnering with all major mobile financial service providers in Pakistan, offering extensive outreach with over 75,000 touch points nationwide. This service ensures seamless payment processing and financial transactions through mobile platforms such as Jazz Cash and Easy Paisa.
                  </p>
              </div>
              <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Wallet Operators Integration
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Integrated with leading wallet operators in Pakistan to facilitate digital payments. Currently partnered with Jazz Cash and Easy Paisa, with ongoing integrations with HBL Konnect, Alfax, Finja, and billing aggregators like 1-Link and 1 Bill. This service allows users to make secure transactions via their preferred digital wallets.
                  </p>
              </div>
              <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Single API Payment Solution
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Providing a single API solution for processing payments through credit and debit cards, including MasterCard and Visa. This simplifies the integration process for merchants, enabling them to accept various payment methods through one unified API.
                  </p>
              </div>
              <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      International Security Standards Compliance
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Catering to an international client base by adhering to global security standards, ensuring secure transactions and protecting sensitive data. This service is crucial for maintaining trust and reliability with clients worldwide.
                  </p>
              </div>
              <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Digital Ecosystem Establishment
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Creating a comprehensive digital ecosystem that connects all potential digital market players. This service delivers innovative and secure payment solutions to onboard businesses onto a digital platform, enhancing their digital presence and operational efficiency.
                  </p>
              </div>
              <div className="mb-1">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Payment Card Industry Data Security Standards (PCI DSS) Certification
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Ensuring that all platforms and processes are digitally secure by complying with Payment Card Industry Data Security Standards. This certification guarantees that Smart Pay’s systems are robust and meet international security requirements, protecting both merchants and customers from potential breaches.
                  </p>
              </div>
          </div>
      </div>
      
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
