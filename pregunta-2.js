
     class Stack {
        constructor() {
          this.stack = [1,2];
        }
        
        push(element) {
          this.stack.push(element);
          return this.stack;
        }
        
        pop() {
          return this.stack.pop();
        }
        
        peek() {
          return this.stack[this.stack.length - 1];
        }
        
        size() {
          return this.stack.length;
        }
      
        print() {
          console.log(this.stack);
        }
      }
      
       const revertirPila = (stack)=>{
        const arreglo = stack.stack
        console.log(`Pila antes de invertir: [${arreglo}]`)
        let stackLength = arreglo.length;
        for (let x = 0; x < stackLength / 2; x++){
          let temporal = arreglo[x];
    
          let indiceContrario = stackLength - x - 1
    
          arreglo[x] = arreglo[indiceContrario]
    
          arreglo[indiceContrario] = temporal
        }
       }
            
    
      
    
      const stack = new Stack();
      revertirPila(stack)
      console.log(`Pila despues de invertir: [${stack.stack}]`); 
        
    