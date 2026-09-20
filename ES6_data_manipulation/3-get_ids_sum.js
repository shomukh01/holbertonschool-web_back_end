export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((sum, student) => sum + student.id, 0);
}

