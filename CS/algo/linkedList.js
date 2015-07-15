var createNode = function(value) {
  return {
    value: value,
    next: null
  }
}

var linkedList = function() {
  this.storage = [];

  return this;
}

linkedList.prototype.addToHead = function(value) {
  var node = createNode(value);
  if(this.head) {
    node.next = temp;
  }
  this.head = node;
}

linkedList.prototype.deleteNode = function(value) {
  var node = this.head;
  if(this.head.value === value) {
    this.head = this.head.next;
  }

  while(node.next) {
    if(node.next === value) {
      node.next = node.next.next;
      if(!node.next.next) {
        this.tail = node.next;
      }
      return;
    }
    node = node.next;
  }
}
