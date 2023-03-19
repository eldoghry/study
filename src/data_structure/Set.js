function MySet() {
    this.collection = []
    this.count = 0;

    // check if element existence
    this.has = function(element){
      return this.collection.indexOf(element) !== -1 
    }
  
    // add element to set
    this.add = function(element) {
      if(this.has(element)) return this.collection
  
      this.collection.push(element)
      this.count ++;
  
      return element
    }
  
    // add many element and return entire set
    this.addMany = function(arr) {
      
      if(!Array.isArray(arr)) return null
  
      arr.forEach(element => this.add(element));
  
      return this
    }
    
  
    // remove element from the set
    this.remove = function (element){
      
      if(!this.has(element)) return null
  
      this.collection = this.collection.filter(x => x !== element)
      this.count --;
      
      return element
    }
  
    // clear set
    this.clear = function(){
      this.collection = []
      this.count = 0
      return this.collection
    }
  
    this.size = function () { 
      return this.count
    }
  
    this.print = function(){
      console.log(this.collection) 
    }
  
    // return set values
    this.values = function(){
      return this.collection 
    }
  
    // get element by index
    this.get = function(index) {
      return this.collection[index]
    }
  
    // return intersection elements between other and current set
    this.intersectSet = function(otherSet){
      const intersect = []
      const otherSetLength = otherSet.size() ?? 0
    
      if(!otherSetLength) return []
  
      for (let index = 0; index < otherSetLength; index++) {
          const el = otherSet.get(index)
          this.has(el) ? intersect.push(el) : ''
      }
  
      return intersect
    }
  
    
    // join to set
    this.unionSet = function(otherSet){
      const otherSetLength = otherSet.size() ?? 0
    
      if(!otherSetLength) return []
  
      for (let index = 0; index < otherSetLength; index++) {
          const el = otherSet.get(index)
          !this.has(el) ? this.add(el) : ''
      }
  
      return this.collection
    }
  
    // check if otherSet is subset of this set
    this.subSet = function(otherSet){
      const otherSetLength = otherSet.size() ?? 0
    
      if(!otherSetLength) return false
  
      for (let index = 0; index < otherSetLength; index++) {
          const el = otherSet.get(index)
          if(!this.has(el)){
            return false
          }
      }
  
      return true
    }
  }
  
  const set = new MySet()
  set.add(10)
  set.add(1)
  set.add(2)
  set.add(3)
  set.add(1)
  set.add(4)
  // console.log(set.size()) //4
  // set.print()
  
  // set.remove(5) //null
  // set.remove(3)  
  // set.print()
  
  // set.clear()
  // set.print()
  
  // console.log(set.size())
  // set.print()
  // console.log(set.collection)
  
  set.print()
  
  // const otherSet = new MySet()
  // otherSet.add(4)
  // otherSet.add(0)
  // otherSet.print()
  
  // console.log(set.intersectSet(otherSet))
  // console.log(set.unionSet(otherSet))
  // console.log(set.subSet(new MySet().addMany([1,3])))
  // console.log(set.subSet(new MySet().addMany([1,10,3,2,5,4])))