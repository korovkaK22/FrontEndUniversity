import axios from 'axios'

export class CheckExist {

    static async checkUserById(id){
        let result=  (await (axios.get('http://localhost:8080/api/user/'+id))).data;
        return result!=='';
    }

   static async checkFacultyById(id){
        let result=  (await (axios.get('http://localhost:8080/faculties/view/'+id))).data;
        return result!=='';
    }




}
