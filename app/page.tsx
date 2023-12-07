import HImg from 'public/home.jpg'
import Hero from '@components/Hero'
export default function Home() {
    return (
        <>
            <Hero imgData={HImg} imgAlt='home img' title='Home Page'/>
        </>
    )
  }
  