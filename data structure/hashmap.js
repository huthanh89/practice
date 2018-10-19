//----------------------------------------------------------------------//
// Hash Map
//
// Note - JavaScript has a build in hash map object (MAP).
//----------------------------------------------------------------------//

class HashMap {
    constructor(){
        this.dictionary = {};
    }

    add(key, value){
        this.dictionary[key] = value;
    }

    remove(key){
        delete this.dictionary[key];
    }

    get(key){
        return this.dictionary[key];
    }
}

//----------------------------------------------------------------------//


var hashMap = new HashMap();

hashMap.add('one', 'two');
hashMap.add('three', 'four');
hashMap.add('five', 'six');

console.log(hashMap.get('three'));