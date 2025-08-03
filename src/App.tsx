import CreditCardForm from "./components/CreditCardForm"

const App = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white bg-no-repeat bg-[url('src/assets/images/bg-main-mobile.png')] lg:bg-[url('src/assets/images/bg-main-desktop.png')] bg-[length:100%_240px] lg:bg-[length:33%_100%] bg-top lg:bg-left">
      <CreditCardForm />
    </div>
  )
}

export default App


{/* <div className="relative bg-white bg-no-repeat bg-left bg-[url('src/assets/images/bg-main-desktop.png')] min-h-screen bg-[length:40%_auto] flex items-center justify-center "> */}