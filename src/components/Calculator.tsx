import { useState, useReducer } from 'react'
import Screen from "./Screen"
import Buttons from "./Buttons"
import { resultReducer } from '../API/reducer'
import { Status } from '../API/context'

const Calculator: React.FC = () => {

   const [result, dispatch] = useReducer(resultReducer, '')
   const [process, setProcess] = useState<string>('nothing')
   const [a, setA] = useState<string>('')
   const [s, setS] = useState<string>('')
   const [b, setB] = useState<string>('')
   const [dark, setDark] = useState<boolean>(false)

   return (
      <div className="calculator" style={{backgroundColor: dark ? '#374353' : '#fff'}}>
         <Status.Provider value={process}>
            <Screen dark={dark} setDark={setDark} a={a} s={s} b={b} result={result} />
         </Status.Provider>
         <Buttons dark={dark} process={process} setProcess={setProcess} a={a} setA={setA} s={s} setS={setS} b={b} setB={setB} result={result} dispatch={dispatch} />
      </div>
   )
}

export default Calculator