import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="max-w-6xl mx-auto">
        <div className="text-center mt-40 flex flex-col gap-10 items-center">
          <h1 className=" font-bold text-6xl">
            Elevate your sound experience.
          </h1>
          <p className="w-1/2">
            Discover speakers crafted for those who demand more than just music clarity, power, and elegance in every note.
          </p>
          <button className="flex items-center gap-1 cursor-pointer bg-foreground text-background px-10 py-5 rounded-full font-medium">
            Explore the Collection
            <ChevronRight size={17} />
          </button>
        </div>
        <img src="/main-product.webp" alt="aureon" className="mx-auto mt-20" />
      </section>
      <section className="bg-foreground/5 py-40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-semibold">
            Experience clarity, depth, and balance crafted for true music lovers.
          </h2>
        </div>
      </section>
    </main>
  );
}
