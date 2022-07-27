export const invertText = (text) => {
    const splitText = text.split(""); 
    const reverseArray = splitText.reverse(); 
    const joinArraytoString = reverseArray.join(""); 
    return joinArraytoString; 
}

export const isPalindrome = (text) => {
    const strReversed = text.split("").reverse().join("");
    return strReversed === text ? "true" : "false";
}

