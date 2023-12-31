class Node{
    constructor(value,next = null){
        this.value =  value;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        

    }
    append(node){
        const newNode= new Node(node)

        if(!this.head){
            this.head= newNode;
        } else {
            this.tail.next= newNode;
        }
            this.tail = newNode;
    }

    peek(value,current =this.head){
        if(this.head === null){
            return false
        }
        if(current!== null){
            if (current.value ===value ){
                return true;
            } else{
                return this.peek(value, current.next)
            }
        }
        return false;

    }
    size(current = this.head, acum =1){
        if(this.head ===null){
            return 0
        }
        if(current.next !== null){
            return this.size(current.next, acum = acum +1)
        }
            return acum
    }
    remove(value, current = this.head){
        if(this.head ===null){
            return false
        }
        if(this.head.value=== value){
            return this.head = this.head.next
        }
        if(current.next !== null){
            if(current.next.value === value){
                current.next = current.next.next;
                return true
            } else{
                return this.remove(value, current.next)
            }
        }

    }
    print(){
            let node = this.head;
            while(node != null){
                console.log(`Valor ${node.value} | Next: ${node.next?.value || null}`)
                node =node.next
            }
    }

    
}


const mezclarListas = (lista1, lista2) => {
    const nuevaLista = new LinkedList();

    let current1 = lista1.head;
    let current2 = lista2.head;

    while (current1 !== null && current2 !== null) {
        if (current1.value < current2.value) {
            nuevaLista.append(current1.value);
            current1 = current1.next;
        } else {
            nuevaLista.append(current2.value);
            current2 = current2.next;
        }
    }

    while (current1 !== null) {
        nuevaLista.append(current1.value);
        current1 = current1.next;
    }

    while (current2 !== null) {
        nuevaLista.append(current2.value);
        current2 = current2.next;
    }

    return nuevaLista;
};
const miLista = new LinkedList();
miLista.append(1)
miLista.append(2)
miLista.append(3)
miLista.append(7)

const miLista2 = new LinkedList();
miLista2.append(4)
miLista2.append(5)
miLista2.append(6)


console.log(mezclarListas(miLista, miLista2))

