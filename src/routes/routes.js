import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import Home from '../components/Home/Home.vue'
import FAQ from '../components/FAQ/FAQ.vue'

import ViewFaculties from "@/components/Faculties/ViewFaculties";
import ChangeFaculties from "@/components/Faculties/ChangeFaculties";
import CreateFaculties from "@/components/Faculties/CreateFaculties";
import SeeFaculties from "@/components/Faculties/SeeFaculties";

import ViewGroups from "@/components/Groups/ViewGroups";
import ChangeGroups from "@/components/Groups/ChangeGroups";

import ViewDisciplines from "@/components/Disciplines/ViewDisciplines";
import ChangeDisciplines from "@/components/Disciplines/ChangeDisciplines";

import ViewDepartments from "@/components/Departments/ViewDepartments";
import ChangeDepartments from "@/components/Departments/ChangeDepartments";

import ViewSchedules from "@/components/Schedules/ViewSchedules";
import ChangeSchedules from "@/components/Schedules/ChangeSchedules";

import ViewTeachers from "@/components/Teachers/ViewTeachers";
import ChangeTeachers from "@/components/Teachers/ChangeTeachers";

import ViewStudents from "@/components/Students/ViewStudents";
import ChangeStudents from "@/components/Students/ChangeStudents";


const routes = [
    {path: '/', component: Home},
    {path: '/home', component: Home},

    {path: '/faq', component: FAQ},

    {path: '/viewFaculties', component: ViewFaculties},
    {path: '/changeFaculties', component: ChangeFaculties},
    {path: '/createFaculties', component: CreateFaculties},
    {path: '/seeFaculties', component: SeeFaculties},

    {path: '/viewGroups', component: ViewGroups},
    {path: '/changeGroups', component: ChangeGroups},

    {path: '/viewDisciplines', component: ViewDisciplines},
    {path: '/changeDisciplines', component: ChangeDisciplines},

    {path: '/viewDepartments', component: ViewDepartments},
    {path: '/changeDepartments', component: ChangeDepartments},

    {path: '/viewSchedules', component: ViewSchedules},
    {path: '/changeSchedules', component: ChangeSchedules},

    {path: '/viewStudents', component: ViewStudents},
    {path: '/changeStudents', component: ChangeStudents},

    {path: '/viewTeachers', component: ViewTeachers},
    {path: '/changeTeachers', component: ChangeTeachers},

]

export default () => createRouter({
    history: createWebHistory(),
    routes: routes
})