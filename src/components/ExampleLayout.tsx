import Link from "next/link";

const ExampleLayout = ({ children }: any) => {
  return (
    <>
      <div className="fixed z-50 w-full bg-white h-[64px] p-5 border border-b">
        Header
      </div>
      <div className="pt-[88px] pb-4 px-2 md:px-5">{children}</div>
      <div className="w-full bg-gray-50 h-[100px] pb-[48px] md:pb-0 px-2 md:px-5">
        Footer
      </div>
    </>
  );
};

export default ExampleLayout;
