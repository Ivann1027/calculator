import classes from './Button.module.css'

export default function Button({ style, onClick, value, butType }) {

   let butClass

   if (butType === 'sign') butClass = classes.sign
   if (butType === 'num') butClass = classes.num

   return (
      <button style={style} value={value} onClick={onClick} className={[classes.button, butClass].join(' ')}>
         {value}
      </button>
   )
}