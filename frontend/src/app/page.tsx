
import Footer from "./component/common/Footer";
import Hero from "./component/home/Hero";
import Teams from "./component/home/Teams";
import Testimonials from "./component/home/Testimonials";


export default function Home() {

  return (
    <div>
      <Hero />
      <Teams />
      <Testimonials />
      <Footer />
    </div>
  );
}