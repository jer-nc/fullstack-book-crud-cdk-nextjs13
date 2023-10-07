import Image from "next/image";
import image from '../../public/hero-image.png'
import NavbarHome from "@/components/custom/NavbarHome";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-12">
      <NavbarHome />
      <h1 className="text-2xl font-semibold">Next.js 13 Cognito Authentication Template Demo</h1>
      <p className="text-muted-foreground mt-4">
        This is a demonstration of the Next.js 13 Cognito Authentication Template. You can access the source code{" "}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >here</a>
      </p>
      <div className="py-12">
        <Image priority width={300} height={500} src={image} style={{ width: 'auto' }} alt="next-js-cognito" />
      </div>
      <p className="mt-4">
        Keep in mind that this is just a demo and shouldn&apos;t be used in a real production setting.
      </p>
    </main>
  )
}
