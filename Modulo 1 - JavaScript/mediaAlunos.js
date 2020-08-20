const classA = [
    {
        name: 'Mayk',
        grade: 9.8
    },
    {
        name: 'Diego',
        grade: 10
    },
    {
        name: 'Aleu',
        grade: 2
    }
]

const classB = [
    {
        name: 'Fulano',
        grade: 9.8
    },
    {
        name: 'Ciclano',
        grade: 6
    },
    {
        name: 'Beltrano',
        grade: 2
    }
]

function calculateAverage(students) {
    let sum = 0
    
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length
    
    return average
}



function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congrats!`)
    } else {
        console.log(`${turma} average: ${average}. Is not good.`)
    }
}

function markAsFlunked(student) {
    student.flunked = false
    
    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`${student.name} flunked!`)
    }
}

function studentsReprovado(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'classA')
sendMessage(average2, 'classB')

studentsReprovado(classA)
studentsReprovado(classB)