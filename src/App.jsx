import styles from "./style";
import { NavBar,
    Billing,
    CardDeal,
    Business,
    Clients,
    CTA,
    Stats,
    Footer,
    Testimonials,
    Hero, } from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <NavBar/>
            </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxwidth}`}>
            <Hero/>
            </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles. flexCenter}`}>
        <div className={`${styles.boxwidth}`}>
            <Stats/>
            <Business/>
            <CardDeal/>
            <Testimonials/>
            <Billing/>
            <Clients/>
            <CTA/>
            <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;
