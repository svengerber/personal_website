import Image from "next/image";

export default function Welcome() {
    return (
        <div className="grid grid-cols-2">
            <div className="w-50 h-50">
            <Image
                    src="/welcome.jpg"
                    alt={""}
                    className=""
                    width={"300"}
                    height={"500"}
                />
            </div>
            <div className="text-8xl">
                <h1>Welcome to my page ✌️</h1>
            </div>
        </div>
    );
  }