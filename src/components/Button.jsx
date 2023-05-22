
// eslint-disable-next-line react/prop-types
const Button = ({styles}) => {
  return (
    <button type="button" className={` py-4 px-6 bg-blue-gradient rounded-full font-poppins font-medium text ${styles}`}>
Get Started
    </button>
  )
}

export default Button