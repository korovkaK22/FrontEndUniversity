import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import Home from '../components/Home/Home.vue'

import ViewFAQ from '../components/FAQ/FAQ.vue'
import SeeFAQ from '../components/FAQ/SeeFAQ.vue'
import CreateFAQ from '../components/FAQ/CreateFAQ.vue'
import ChangeFAQ from '../components/FAQ/ChangeFAQ.vue'

import ViewFaculties from "@/components/Faculties/ViewFaculties";
import ChangeFaculties from "@/components/Faculties/ChangeFaculties";
import CreateFaculties from "@/components/Faculties/CreateFaculties";
import SeeFaculties from "@/components/Faculties/SeeFaculties";

import CreateGroups from "@/components/Groups/CreateGroups";
import SeeGroups from "@/components/Groups/SeeGroups";
import ViewGroups from "@/components/Groups/ViewGroups";
import ChangeGroups from "@/components/Groups/ChangeGroups";

import ViewDisciplines from "@/components/Disciplines/ViewDisciplines";
import ChangeDisciplines from "@/components/Disciplines/ChangeDisciplines";
import CreateDisciplines from "@/components/Disciplines/CreateDisciplines";
import SeeDisciplines from "@/components/Disciplines/SeeDisciplines";

import ViewDepartments from "@/components/Departments/ViewDepartments";
import ChangeDepartments from "@/components/Departments/ChangeDepartments";
import CreateDepartments from "@/components/Departments/CreateDepartments";
import SeeDepartments from "@/components/Departments/SeeDepartments";

import ViewSchedules from "@/components/Schedules/ViewSchedules";
import ChangeSchedules from "@/components/Schedules/ChangeSchedules";

import ViewTeachers from "@/components/Teachers/ViewTeachers";
import ChangeTeachers from "@/components/Teachers/ChangeTeachers";
import SeeTeachers from "@/components/Teachers/SeeTeachers";
import CreateTeachers from "@/components/Teachers/CreateTeachers";

import ViewStudents from "@/components/Students/ViewStudents";
import ChangeStudents from "@/components/Students/ChangeStudents";


const routes = [
    {path: '/', component: Home},
    {path: '/home', component: Home},

    {path: '/viewFaq', component: ViewFAQ},
    {path: '/seeFaq', component: SeeFAQ},
    {path: '/changeFaq', component: ChangeFAQ},
    {path: '/createFaq', component: CreateFAQ},

    {path: '/viewFaculties', component: ViewFaculties},
    {path: '/changeFaculties', component: ChangeFaculties},
    {path: '/createFaculties', component: CreateFaculties},
    {path: '/seeFaculties', component: SeeFaculties},

    {path: '/viewGroups', component: ViewGroups},
    {path: '/changeGroups', component: ChangeGroups},
    {path: '/createGroups', component: CreateGroups},
    {path: '/seeGroups', component: SeeGroups},

    {path: '/viewDisciplines', component: ViewDisciplines},
    {path: '/changeDisciplines', component: ChangeDisciplines},
    {path: '/createDisciplines', component: CreateDisciplines},
    {path: '/seeDisciplines', component: SeeDisciplines},

    {path: '/viewDepartments', component: ViewDepartments},
    {path: '/changeDepartments', component: ChangeDepartments},
    {path: '/seeDepartments', component: SeeDepartments},
    {path: '/createDepartments', component: CreateDepartments},

    {path: '/viewSchedules', component: ViewSchedules},
    {path: '/changeSchedules', component: ChangeSchedules},

    {path: '/viewStudents', component: ViewStudents},
    {path: '/changeStudents', component: ChangeStudents},

    {path: '/viewTeachers', component: ViewTeachers},
    {path: '/changeTeachers', component: ChangeTeachers},
    {path: '/createTeachers', component: CreateTeachers},
    {path: '/seeTeachers', component: SeeTeachers},

]

export default () => createRouter({
    history: createWebHistory(),
    routes: routes
})