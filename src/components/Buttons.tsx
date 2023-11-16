import { MouseEventHandler } from "react"
import Button from "./UI/button/Button"
import { LuDelete } from 'react-icons/lu'

interface IButtonsProps {
   dark: boolean
   process: string
   setProcess: () => void
   a: string
   setA: () => void
   s: string
   setS: () => void
   b: string
   setB: () => void
   result: string
   dispatch: () => void
}

const Buttons: React.FC<IButtonsProps> = ({ dark, process, setProcess, a, setA, s, setS, b, setB, result, dispatch }) => {
   
   const themeForSigns = { backgroundColor: dark ? '#374353' : '#fff', boxShadow: dark ? '-3px -3px 5px #999, 3px 3px 5px #333' : '2px 2px 8px lightblue', color: dark ? '#919b9a' : '#0086f5' }
   const themeForNums = { backgroundColor: dark ? '#374353' : '#fff', boxShadow: dark ? '-3px -3px 5px #999, 3px 3px 5px #333' : '2px 2px 8px lightblue', color: dark ? '#fff' : 'black' }

   function handleCalculation(e: MouseEvent<HTMLButtonElement>) {
      if (process !== 'calculation') setProcess('calculation')
      if (!s) setA(e.target.value)
      if (!s && a) setA(a + e.target.value)
      if (s) setB(e.target.value)
      if (s && b) setB(b + e.target.value)
      if (result) {
         setB('')
         setS('')
         setA(result + e.target.value)
         dispatch({type: 'null'})
      }
   }
   function handleAction(e) {
      if (a) setS(e.target.value)
      if (result) {
         setB('')
         setA(result)
         dispatch({type: 'null'})
         setS(e.target.value)
         setProcess('calculation')
      }
   }
   function handleCleaning() {
      setProcess('nothing')
      setA('')
      setS('')
      setB('')
      dispatch({type: 'null'})
   }
   function handleResult() {
      dispatch({
         type: s,
         a: a,
         b: b
      })
      setA('')
      setB('')
      setS('')
      setProcess('result')
   }

   return (
      <div className="buttons">
         <Button onClick={handleCleaning} value='C' butType='sign' style={themeForSigns} />
         <Button onClick={handleAction} value={<LuDelete size={25} />} butType='sign' style={themeForSigns} />
         <Button onClick={handleAction} value='%' butType='sign' style={themeForSigns} />
         <Button onClick={handleAction} value='/' butType='sign' style={themeForSigns} />
         <Button onClick={handleCalculation} value='7' butType='num' style={themeForNums} />
         <Button onClick={handleCalculation} value='8' butType='num' style={themeForNums} />
         <Button onClick={handleCalculation} value='9' butType='num' style={themeForNums} />
         <Button onClick={handleAction} value='x' butType='sign' style={themeForSigns} />
         <Button onClick={handleCalculation} value='4' butType='num' style={themeForNums} />
         <Button onClick={handleCalculation} value='5' butType='num' style={themeForNums} />
         <Button onClick={handleCalculation} value='6' butType='num' style={themeForNums} />
         <Button onClick={handleAction} value='-' butType='sign' style={themeForSigns} />
         <Button onClick={handleCalculation} value='1' butType='num' style={themeForNums} />
         <Button onClick={handleCalculation} value='2' butType='num' style={themeForNums} />
         <Button onClick={handleCalculation} value='3' butType='num' style={themeForNums} />
         <Button onClick={handleAction} value='+' butType='sign' style={themeForSigns} />
         <Button onClick={handleCalculation} value='0' butType='num' style={themeForNums} />
         <Button onClick={handleCalculation} value='.' butType='num' style={themeForNums} />
         {/* <Button onClick={handleAction} value='<' butType='sign' style={themeForSigns} /> */}
         <Button onClick={handleResult} value='=' butType='sign' style={themeForSigns} />
      </div>
   )
}

export default Buttons