export default function createIteratorObject(report) {
  return (function* iterator() {
    for (const employees of Object.values(report.allEmployees)) {
      yield* employees;
    }
  }());
}

