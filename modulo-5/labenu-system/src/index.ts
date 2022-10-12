import { app } from "./app";
import ClassController from "./endpoints/ClassController";
import { StudentController } from "./endpoints/StudentController";
import { TeacherController } from "./endpoints/TeacherController";


const classController = new ClassController()

// Criar turma
app.post(`/class`, classController.createClass)

// Buscar turmas ativas
app.get(`/class`, classController.getClass)

// Mudar turma de módulo
app.put(`/class/:id`, classController.changeModule)



const studentController = new StudentController()

// Criar estudante
app.post(`/student`, studentController.createStudent)

// Buscar estudante pelo nome
app.get(`/student/:name`, studentController.getStudentByName)

// Mudar estudante de turma
app.put(`/student/:id`, studentController.changeStudentClass)



const teacherController = new TeacherController()

// Criar docente
app.post(`/teacher`, teacherController.createTeacher)

// Buscar todos os docentes
app.get(`/teacher`, teacherController.getTeacher)

// Mudar docente de turma
app.put(`/teacher/:id`, teacherController.changeTeacherClass)