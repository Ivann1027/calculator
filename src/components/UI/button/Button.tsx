import classes from './Button.module.css'

interface IButtonProps {
   style: {}
   onClick: () => void
   value: string
   butType: string
}

const Button: React.FC<IButtonProps> = ({ style, onClick, value, butType }) => {

   let butClass: string
   let buttonClassName: string = [classes.button, butClass].join(' ')

   if (butType === 'sign') butClass = classes.sign
   if (butType === 'num') butClass = classes.num

   return (
      <button style={style} value={value} onClick={onClick} className={buttonClassName}>
         {value}
      </button>
   )
}

export default Button