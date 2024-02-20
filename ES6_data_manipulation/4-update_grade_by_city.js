export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents
    .filter((value) => value.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      return { ...student, grade };
    });
}
