class Node {
   constructor(data, next) {
      this.data = data;
      this.next = next;
   }
}

// let node = new Node(100);
// console.log(node);

class LinkList {
   constructor() {
      this.head = null;
      this.size = 0;
   }

   //Insert the first node
   insertFirst(data) {
      this.head = new Node(data, this.head);
   }

   //Insert the last node
   insertLast(data) {
      let node = new Node(data);
      let current;

      // if empty, make  head
      if(!this.head) {
         this.head = node;
      } else {

         current = this.head;

         while(current.next) {
            current = current.next;
         }

         current.next = node;
      }

      this.size++;
   }


   //Insert at Index
   insertAt(data, index) {
      // If index is out of range
      if(index > 0 && index > this.size)
      {
         return;
      }


      // If first index
      if(index === 0) {
         this.head = new Node(data, this.head);
         return;
      }

      const node = new Node(data);
      let current, pervious;

      // Set current to first
      current = this.head;
      let count = 0;

      while(count < index) {
         pervious = current; //Node before index
         count++;
         current = current.next; //Node a
      }

      node.next = current;
      pervious.next = node;

      this.size++;
   }


   // Get at Index
   getAt(index) {
      let current = this.head;
      let count = 0;

      while(current) {
         if(count == index) {
            console.log(current.data)
         }

         count++;
         current = current.next;
      }

      return null;
   }

   //Remove at index
   removeAt(index) {
      if(index > 0 && index > this.size) {
         return;
      }

      let current = this.head;
      let pervious;
      let count = 0;

      // Remove first
      if(index === 0)
      {
         this.head = current.next;
      }
      else{
         while(count < index) {
            count++;
            pervious = current;
            current =  current.next;
         }

         pervious.next = current.next;
      }

      this.size--;
   }


   //Clear List
   clearList() {
      this.head = null;
      this.size = 0;
   }


   //Print List
   printListDate() {
      let current = this.head;

      while(current) {
         console.log(current.data);
         current = current.next;
      }
   }
}


const ll = new LinkList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 1);

//ll.removeAt(2);

//ll.clearList();

//ll.printListDate();
//ll.getAt(2);
console.log(ll)