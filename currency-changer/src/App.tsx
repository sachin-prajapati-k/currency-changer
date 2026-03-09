
import './App.css'
import FetchedData from './hook/getCurrency'
import InputBox from './components/inputbox';
function App() {
const data=FetchedData();
console.log(data)
  return (
    <><div className="flex h-screen items-center justify-center">
      <div className='flex flex-col gap-3'>

    <InputBox/>
    <InputBox/>
      </div>
    </div>
    </>
  )
}

export default App
