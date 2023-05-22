import { clients } from "../constants"
import styles from "../style"

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
    {clients.map((client)=>{
        return(
            <div key={client.id} className={` flex-1 sm:min-w-[192px] flex  flex-wrap`}>
                <img src={client.logo} alt="logo" className="sm:w-[192px] mr-[120px] mb-[20px] cursor-pointer hover:translate-y-1.5   w-[100px] object-contain" />

            </div>
        )
    })}
        </div>
    </section>
  )
}

export default Clients