
export class GetListForTable {

    static getSchedulesForGroup(schedules, id) {
        let result = [];
        for (const element of schedules) {
            if (element.group_id === id) {
                result.push(element);
            }
        }
        return result;
    }

    static getStudentsForGroup(students, id) {
        let result = [];
        for (const element of students) {
            if (element.group_id === id) {
                result.push(element);
            }
        }
        return result;
    }

    static getSchedulesForTeachers(schedules, id) {
        let result = [];
        for (const element of schedules) {
            if (element.teacher_id === id) {
                result.push(element);
            }
        }
        return result;
    }

    static getDepartmentsForFaculties(departments, id) {
        let result = [];
        for (const element of departments) {
            if (element.faculty_id === id) {
                result.push(element);
            }
        }
        return result;
    }






}