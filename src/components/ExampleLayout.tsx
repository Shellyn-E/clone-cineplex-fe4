import Image from "next/image";
import Link from "next/link";

const ExampleLayout = ({ children }: any) => {
  return (
    <>
      <nav className="bg-gray-900">
        <div className="max-w-100xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            <a href="#" className="flex-shrink-0 text-white">
              <Image
                src="https://21cineplex.com//theme/v5/assets/img/logo.png"
                width={100}
                height={200}
                alt="Logo"
              />
            </a>
            <div className="ml-10 flex items-baseline">
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-800 focus:outline-none focus:bg-gray-700"
              >
                Home
              </a>
              <a href="#"></a>
            </div>
          </div>
        </div>
      </nav>
      <div className="pt-[88px] pb-4 px-2 md:px-5">{children}</div>
      <div className="w-full bg-gray-50 h-[100px] pb-[48px] md:pb-0 px-2 md:px-5">
        Footer
      </div>
    </>
  );
};

export default ExampleLayout;
