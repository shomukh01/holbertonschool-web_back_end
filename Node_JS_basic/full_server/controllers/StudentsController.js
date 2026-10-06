import readDatabase from '../utils.js';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((students) => {
        const fields = Object.keys(students).sort((first, second) => (
          first.toLowerCase().localeCompare(second.toLowerCase())
        ));
        const totalStudents = fields.reduce(
          (total, field) => total + students[field].length,
          0,
        );
        const output = [
          'This is the list of our students',
          `Number of students: ${totalStudents}`,
          ...fields.map(
            (field) => `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`,
          ),
        ];

        response.status(200).send(output.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((students) => {
        if (!students[major]) {
          response.status(500).send('Major parameter must be CS or SWE');
          return;
        }

        response.status(200).send(`List: ${students[major].join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
