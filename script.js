const questionDOM = document.querySelector("#question")
const answerDOM = document.querySelector("#answer")

answerDOM.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    botStart()
  }
})

const botSay = (dataUser) => {
  return [
    `Halo, perkenalkan nama aku MarBot, siapa nama kamu?`,
    `Ohh nama kamu ${dataUser?.nama}, ${dataUser?.nama} umurnya berapa tahun?`,
    `Umur kamu masih ${dataUser?.umur} tahun. Kalo boleh tau hobi kamu ngapain aja?`,
    `Wih hobi kamu ${dataUser?.hobi}, keren juga ya. Btw kamu udh punya pacar belum?`,
    `Kamu ${dataUser?.pacar} punya pacar ya`
  ]
}

questionDOM.innerHTML = botSay()[0]

let counter = 0
let answers = []

function botStart() {
  counter++
  switch(counter) {
    case 1 :
      botQuestion({nama: answerDOM.value})
      answers.push(answerDOM.value)
      break;
    case 2 :
      let umur = parseInt(answerDOM.value)
      answers.push(umur)
      console.log(umur)
      if (answers[1] < 19) {
        setTimeout(() => {
          questionDOM.innerHTML = `Umur kamu baru ${umur} tahun, kamu lebih muda dari yang buat aku!`
        }, 1000)
      } else if (answers[1] === 19) {
        setTimeout(() => {
          questionDOM.innerHTML = `Umur kamu ${umur} tahun, kamu sepantaran sama yang buat aku!`
        }, 1000)
      } else {
        setTimeout(() => {
          questionDOM.innerHTML = `Umur kamu ${umur} tahun, kamu lebih tua dari yang buat aku!`
        }, 1000)
      }

      setTimeout(() => {
        questionDOM.innerHTML = `Btw hobi kamu ngapain aja?`
      }, 4000)

      answerDOM.value = ""
      break;
    case 3 :
      botQuestion({hobi: answerDOM.value})
      break;
    case 4 :
      botQuestion({pacar: answerDOM.value})
      setTimeout(() => {
        botFinish()
      }, 3000)
      break;
    default:
      botEnd()
      break;
  }
  answerDOM.value = ""
}

function botQuestion(userAnswer) {
  setTimeout(() => {
    questionDOM.innerHTML = botSay(userAnswer)[counter]
  }, 1000)
}

function botFinish() {
  questionDOM.innerHTML = `Terima kasih ${answers[0]} sudah bermain!`
}

function botEnd() {
  window.location.reload()
}