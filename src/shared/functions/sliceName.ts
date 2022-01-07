
import { Nullable } from "../interfaces";
interface Data {
    
}
export const firstChar=(str: Nullable<string>)=>{
    if(str){
        return str.slice(0,1).toUpperCase();
    }
    else return ''
}