import axios from 'axios'

export class CheckExist {

    static async checkConnection(){
        try {
            let result = (await (axios.get('http://localhost:8080/other/checkConnection'))).data;
            return result !== '';
        } catch (error){
            return false;
        }
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

    static async checkStudentsById(id){
        let result=  (await (axios.get('http://localhost:8080/students/view/'+id))).data;
        return result!=='';
    }

    static async checkSchedulesById(id){
        let result=  (await (axios.get('http://localhost:8080/schedules/view/'+id))).data;
        return result!=='';
    }




}
