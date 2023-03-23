/* 

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

let students = [
  {
    name: "Joao",
    gradOne: 3.5,
    gradTwo: 7.5,
  },
  {
    name: "Maria",
    gradOne: 10,
    gradTwo: 5.5,
  },
  {
    name: "Gabriela",
    gradOne: 2,
    gradTwo: 8.5,
  }
]

function gradCalculate(student){
  return (student.gradOne + student.gradTwo) / 2
}

function passed(student){
  if(gradCalculate(student) >= 7){
    alert(`A média do aluno(a) ${student.name} é: ${gradCalculate(student)} 
  Parabens ${student.name}! Você passou `)
  }else{
    alert(`A média do aluno(a) ${student.name} é: ${gradCalculate(student)} 
  Não foi dessa vez ${student.name}! Continue se esforçando `)
  }
}

for(student of students){
  passed(student)
}
