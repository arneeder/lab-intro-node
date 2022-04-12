class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a,b) {
      return a-b
    })
    this.length++
  }

  get(pos) {
    if (pos < this.length) return this.items[pos]
    else throw new Error('OutOfBounds')
  }

  max() {
    if (this.length !== 0) return this.items[this.length - 1]
    else throw new Error('EmptySortedList');
  }

  min() {
    if (this.length !== 0) return this.items[0]
    else throw new Error('EmptySortedList');
  }

  sum() {
    const sum = this.items.reduce(function(acc, val) {
      return acc += val
    },0)
    return sum
  }

  avg() {
    if (this.length !== 0) return this.sum() / this.length
    else throw new Error('EmptySortedList'); 
  }
}

module.exports = SortedList;
