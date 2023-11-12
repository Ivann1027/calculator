export function resultReducer(result, action) {
   
   let res
   let a = Number(action.a)
   let b = Number(action.b)

   switch (action.type) {
      case '+': {
         res = a + b
         return res
      }
      case '-': {
         res = a - b
         return res
      }
      case 'x': {
         res = a * b
         return res
      }
      case '/': {
         res = a / b
         if (b === 0) return <span style={{color: 'red'}}>Error: can't divide by zero!</span>
         return res
      }
      case '%': {
         res = a % b
         return res
      }
      case 'null': {
         res = ''
         return res
      }
   }
}