import Link from "next/link";

export default function Home() {
  return (
    <main className="
      w-screen
      flex flex-row justify-center items-center
      py-12
    bg-gray-400 mx-auto 
    ">
      <div className="flex flex-row flex-wrap h-auto bg-white border-4 border-red-600 w-1/3">
        <h1 className="bg-yellow-300 text-center font-bold text-3xl p-4 m-4 border-4 border-green-600">
          test
        </h1>
        <Link className="bg-yellow-300 text-center font-bold text-3xl p-4 m-4 border-4 border-green-600" href="/css-playground">
          css-playground
        </Link>
      </div>
    </main>
  );
}
