//import axios from 'axios'

export class InputValidation {

    static checkQnA(name){
        return !(name.length<3 || name.length>=254)
    }

    static checkName(name){
        return !(name.length<3 || name.length>=32)
    }

    static checkSurname(name){
        return !(name.length<3 || name.length>=32)
    }

    static checkShortName(name){
        return !(name.length<3 || name.length>=32)
    }

    static checkCourse(name){
        return !(name<1 || name>4)
    }

    static checkPhone(name){
        return !(name.length<5 || name.length>=20)
    }

    static checkEmail(name){
        return new RegExp(/^[a-z|0-9.]+@{1}[a-z|0-9]+\.{1}[a-z|0-9.]+$/).test(name);
    }

    static checkTime(name){
        return !(name.length<5 || name.length>=20)
    }

    static checkClassroom(name){
        return !(name.length<2 || name.length>=20)
    }






}
