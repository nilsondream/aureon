import { AudioLines, ChevronRight, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="max-w-6xl mx-auto">
        <div className="text-center mt-40 flex flex-col gap-10 items-center">
          <h1 className=" font-bold text-6xl">
            Immerse yourself in sound
          </h1>
          <p className="w-1/2">
            Discover speakers crafted for those who demand more than just music clarity, power, and elegance in every note.
          </p>
          <button className="flex items-center gap-1 cursor-pointer bg-foreground text-background px-10 py-5 rounded-full font-medium hover:scale-105 transition-transform">
            Explore the Collection
            <ChevronRight size={17} />
          </button>
        </div>
        <img src="/main-product.webp" alt="aureon" className="mx-auto mt-20" />
      </section>
      <section className="bg-muted py-40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-semibold">
            Experience clarity, depth, and balance crafted for true music lovers.
          </h2>
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-40">
        <div className="grid grid-cols-2 gap-x-20 gap-y-40 items-center">
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <AudioLines />
              <p>Uncompromising Sound</p>
            </div>
            <h3 className="text-3xl font-medium">
              We believe sound is more than what you hear—it’s what you feel.
            </h3>
            <p>
              Our speakers are engineered with precision, combining cutting-edge audio technology with refined aesthetics to complement any space.
            </p>
            <button className="cursor-pointer flex items-center gap-1 bg-foreground text-background px-6 py-3 rounded-full font-medium">
              Learn More
              <ChevronRight size={15} />
            </button>
          </div>
          <div className="aspect-square shrink-0 rounded-3xl bg-muted"></div>

          <div className="aspect-square shrink-0 rounded-3xl bg-muted"></div>
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <Smartphone />
              <p>Smart Control</p>
            </div>
            <h3 className="text-3xl font-medium">
              Seamlessly connect and control your music with ease. Every feature is designed with you in mind.
            </h3>
            <p>
              Our speakers are designed to integrate effortlessly with your devices, providing a user-friendly experience that puts you in control.
            </p>
            <button className="cursor-pointer flex items-center gap-1 bg-foreground text-background px-6 py-3 rounded-full font-medium">
              Learn More
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
