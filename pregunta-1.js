

    class Queue {
        constructor() {
          this.queue = [1.2,1.3,1.4,1.5];
        }
      
        enqueue(element) {
          this.queue.push(element);
          return this.queue;
        }
      
        dequeue() {
          return this.queue.shift();
        }
      
        peek() {
          return this.queue[0];
        }
      
        size() {
          return this.queue.length;
        }
      
        isEmpty() {
          return this.queue.length === 0;
        }
      
        print() {
          return this.queue;
        }
      }
    
      const revertirCola = (queue)=>{
        const arreglo = queue.queue
        console.log(`Cola antes de invertir: [${arreglo}]`)
        let queueLength = arreglo.length;
        
    
        for (let x = 0; x < queueLength / 2; x++){
          let temporal = arreglo[x];
    
          let indiceContrario = queueLength - x - 1
    
          arreglo[x] = arreglo[indiceContrario]
    
          arreglo[indiceContrario] = temporal
          
          return queue
        }
       }
            
    
       const queue = new Queue();
       revertirCola(queue)
       console.log(`Cola despues de invertir: [${queue.queue}]`); 
       