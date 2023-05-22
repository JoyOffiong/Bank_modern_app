import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient2 rounded-[20px] box-shadow`}>

        <div className="flex-1 flex flex-col">
            <h2 className={`${styles.heading2}`}>Lets try our service now!</h2>
            <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat necessitatibus quaerat aspernatur? Eius nulla veniam eveniet? Omnis in labore voluptatem.</p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button/>
        </div>
    </section>
  )
}

export default CTA;