export const invertText = (text) => {
    const splitText = text.split(""); 
    const reverseArray = splitText.reverse(); 
    const joinArraytoString = reverseArray.join(""); 
    return joinArraytoString; 
}

