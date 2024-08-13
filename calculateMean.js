export const calculateMean = (students) => {
    let mean = 0;

    students.forEach(student => {
        mean += student.grade;
    });

    mean /= students.length;
    return mean;
};