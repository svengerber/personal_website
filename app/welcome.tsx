import Image from "next/image";

export default function Welcome() {
    return (
        <div className="grid grid-cols-1 gap-y-50 gap-x-9 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-5">
            <div className="w-50 h-50">
            <Image
                    src="/welcome.jpg"
                    alt={""}
                    className="rounded-lg"
                    width={"300"}
                    height={"500"}
                />
            </div>
            <div className="text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
                <p>Welcome to my page ✌️</p>
            </div>
        </div>
    );
  }