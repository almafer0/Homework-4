import Student from './student.mjs'

// список моделей студентов
const students = [
    new Student('John', 20, 10),
    new Student('Bill', 25, 11.5),
    new Student('Mary', 22, 10.5)
]
// заполнение представления списка данными моделей
students.forEach(s => {
    const student = document.createElement('div')

    const studentFirstDiv = document.createElement('div')
    const studentNameTitle = document.createElement('strong')
    studentNameTitle.innerText = 'Name: '
    studentFirstDiv.append(studentNameTitle)
    studentFirstDiv.append(s.name)

    const studentTwoDiv = document.createElement('div')
    const studentAgeStrong = document.createElement('strong')
    const studentAgeSpan = document.createElement('span')
    studentAgeStrong.innerText = 'Age: '
    studentAgeSpan.innerText = ('{{ ' + s.age + ' }}')
    studentTwoDiv.append(studentAgeStrong)
    studentTwoDiv.append(studentAgeSpan)

    const studentScoreStrong = document.createElement('strong')
    const studentScoreSpan = document.createElement('span')
    studentScoreStrong.innerText = 'Score: '
    studentScoreSpan.innerText = ('{{ ' + s.avgScore + ' }}')
    studentTwoDiv.append(studentScoreStrong)
    studentTwoDiv.append(studentScoreSpan)

    student.append(studentFirstDiv)
    student.append(studentTwoDiv)

    document.getElementById('root').append(student)
})