var checkInclusion = function(s1,s2) {
       
    function getIndex(char) {
        let charCodeA = 'a'.charCodeAt(0);
        return char.charCodeAt(0) - charCodeA;
    }
    
    
    let arr = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);
    let len = s2.length;

	// add s1 to an array - map chars to indexes starting from 0
	// create a frequency array
    for (let char of s1) {
       arr[getIndex(char)]++;
    }
    
    let arrStr = arr.toString();

    for (let i = 0; i < len; i++) {
        let char = s2.charAt(i);
        arr2[getIndex(char)]++
        
        // reset changes
        if ( i >= s1.length) {
            let outOfRangeChar = s2.charAt(i - s1.length); 
            arr2[getIndex(outOfRangeChar)]--
        }
            
        if (arrStr === arr2.toString()) {
            return true;
        }
    }
    
    return false;
};  

const s1 = ["a","a","b","j"];
const s2 = ["c","f","j","b","j","b","a","a","k"];
checkInclusion(s1,s2);