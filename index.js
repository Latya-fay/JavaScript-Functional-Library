// myEach
function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else if (typeof collection === "object") {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key], key, collection);
      }
    }
  }
  return collection;
}

// myMap
function myMap(collection, callback) {
  let result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i, collection));
    }
  } else if (typeof collection === "object") {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(callback(collection[key], key, collection));
      }
    }
  }
  return result;
}

// myReduce
function myReduce(collection, callback, acc) {
  // Check if the collection is an array
  if (Array.isArray(collection)) {
    // If no accumulator is passed, initialize it with the first element
    if (acc === undefined) {
      acc = collection[0];
      collection = collection.slice(1); // Skip the first element for the next iteration
    }
    for (let i = 0; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
  }
  // Check if the collection is an object
  else if (typeof collection === "object" && collection !== null) {
    // Get the keys of the object
    const keys = Object.keys(collection);

    // If no accumulator is passed, initialize it with the first value
    if (acc === undefined) {
      acc = collection[keys[0]];
      keys.shift(); // Skip the first key for the next iteration
    }

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      acc = callback(acc, collection[key], collection);
    }
  }

  return acc;
}

// myFind
function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        return collection[i];
      }
    }
  } else if (typeof collection === "object") {
    for (let key in collection) {
      if (
        collection.hasOwnProperty(key) &&
        predicate(collection[key], key, collection)
      ) {
        return collection[key];
      }
    }
  }
  return undefined;
}

// myFilter
function myFilter(collection, predicate) {
  let result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i], i, collection)) {
        result.push(collection[i]);
      }
    }
  } else if (typeof collection === "object") {
    for (let key in collection) {
      if (
        collection.hasOwnProperty(key) &&
        predicate(collection[key], key, collection)
      ) {
        result.push(collection[key]);
      }
    }
  }
  return result;
}

// mySize
function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else if (typeof collection === "object") {
    return Object.keys(collection).length;
  }
}

// myFirst
function myFirst(array, n = 1) {
  return n === 1 ? array[0] : array.slice(0, n);
}

// myLast
function myLast(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(array.length - n);
}

// BONUS: mySortBy
function mySortBy(array, callback) {
  return array.slice().sort((a, b) => {
    const valueA = callback(a);
    const valueB = callback(b);
    if (valueA < valueB) {
      return -1;
    } else if (valueA > valueB) {
      return 1;
    } else {
      return 0;
    }
  });
}

// BONUS: myFlatten
function myFlatten(array, shallow = false, newArr = []) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && (!shallow || Array.isArray(array[i]))) {
      myFlatten(array[i], shallow, newArr);
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

// Object Functions
function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}
