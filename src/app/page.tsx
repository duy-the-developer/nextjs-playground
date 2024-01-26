import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-24 justify-center gap-4">
      <h1 className="text-4xl font-bold">CBS Redirect Demo</h1>
      <div className="space-x-4">
        <Link
          href="/english"
          className="px-4 py-2 rounded-lg bg-black text-white"
        >
          English
        </Link>
        <Link
          href="/danish"
          className="px-4 py-2 rounded-lg bg-black text-white"
        >
          Danish
        </Link>
      </div>
    </main>
  );
}
