export const invertText = (text) => {
    const splitText = text.split(""); 
    // ["h", "o", "l", "a"]
    const reverseArray = splitText.reverse(); 
    // ["a", "l", "o", "h"]
    const joinArraytoString = reverseArray.join(""); 
    // "aloh"
    return joinArraytoString; 
}

