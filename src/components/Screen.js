import { useContext } from "react"
import { Status } from "../API/context"

export default function Screen({ dark, setDark, a, s, b, result }) {

   const process = useContext(Status)
   const darkTheme = { backgroundColor: '#374353', color: '#fff' }
   const lightTheme = {backgroundColor: '#fff', color: '#0086f5'}

   return (
      <div className="screen" style={{ color: dark ? '#fff' : '#0086f5' }}>
         <button onClick={() => setDark(!dark)} style={dark ? darkTheme : lightTheme} >
            {dark ? 'Light' : 'Dark'} mode
         </button>
         <br />
         {process === 'result' && result}
         {process === 'calculation' ? a : ''}
         {process === 'calculation' && a ? s : ''}
         {process === 'calculation' && a && s ? b : ''}
      </div>
   )
}