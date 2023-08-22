import Landing2 from "@/components/Landing2"
import Page2 from "@/components/page2"
import Page3 from "@/components/page3"


export const metadata={
  title:"Home: VintageMelodies"
}

export default function Home() {
  return (
    <div
    className=' w-full h-full'
    >
      <Landing2/>
      <Page2/>
      <Page3/>
    </div>
  )
}
