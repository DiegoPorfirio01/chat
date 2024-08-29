import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ErrorImage from "@/public/images/error.svg";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col h-[calc(100vh-250px)] w-full">
      <Image src={ErrorImage} width={500} height={500} alt="" />
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}