//import axios from 'axios'

export class InputValidation {

    static checkName(name){
        let result=true;
        if (name.length<=3 || name.length>=253){
            result= false;
        }
        return result;
    }




}
