//import axios from 'axios'

export class InputValidation {

    static checkQnA(name){
        return !(name.length<3 || name.length>=254)
    }

    static checkName(name){
        return !(name.length<3 || name.length>=32)
    }

    static checkShortName(name){
        return !(name.length<3 || name.length>=32)
    }






}
