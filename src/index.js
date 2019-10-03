module.exports = function check(str, bracketsConfig) {

  if (str.length%2==1) return false;
  
  let stack = [];
    
  for (let i = 0; i < str.length; i++) {
    for(let j = 0; j < bracketsConfig.length; j++){

        let lastElem = stack[stack.length - 1];
        let openBracket = bracketsConfig[j][0];
        let closeBracket = bracketsConfig[j][1];

        
        if (str[i] == closeBracket && lastElem == openBracket && stack.length != 0 ){
            stack.pop(); 
        } else if (str[i] == openBracket) {
            stack.push(str[i]);
        }
    }
  } 

  if (stack.length%2==1) return false;

  return true;
  
}
