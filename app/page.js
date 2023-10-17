import Image from "next/image";
import SignIn from "./components/signIn";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center mt-44">
        <Image src="/Waiter.png" alt="Waiter Image" width={200} height={200} />
        <SignIn />
      </div>
    </main>
  );
}
