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

    static async checkFAQById(id){
        let result=  (await (axios.get('http://localhost:8080/faq/view/'+id))).data;
        return result!=='';
    }

    static async checkDepartmentById(id){
        let result=  (await (axios.get('http://localhost:8080/departments/view/'+id))).data;
        return result!=='';
    }

    static async checkGroupsById(id){
        let result=  (await (axios.get('http://localhost:8080/groups/view/'+id))).data;
        return result!=='';
    }

    static async checkDisciplinesById(id){
        let result=  (await (axios.get('http://localhost:8080/disciplines/view/'+id))).data;
        return result!=='';
    }

    static async checkTeachersById(id){
        let result=  (await (axios.get('http://localhost:8080/teachers/view/'+id))).data;
        return result!=='';
    }




}
