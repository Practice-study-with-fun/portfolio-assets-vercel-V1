import Image from "next/image";
import logoimage from "../../public/logo.png";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-5xl text-white">This is a portfolio assets Website </h1>
      <div className="logoimage flex justify-center mt-10">
        <Image src={logoimage} alt="Logo" width={200} height={200} />
      </div>
    </div>
  );
}
