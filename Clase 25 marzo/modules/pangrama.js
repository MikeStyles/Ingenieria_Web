const alfabeto="a b c d e f g h i j k l m r n ñ o p q r s t u v w x y z"
const alfabetoArray= alfabeto.split(" ")
export function pangrama( word){
    let pangrama= true;
    for(let i=0; i< alfabetoArray.length; i++){
        if (!(word.includes(alfabetoArray[i]))){
            pangrama=false;
            break;
        }
    }
    return pangrama;
}