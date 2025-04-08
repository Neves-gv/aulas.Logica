let listF = ['Transformers', 'Transformers: Revenge of the Fallen','Transformers: Dark of the Moon', ' Transformers: Era da Extinção ', 'Transformers: O Último Cavaleiro', 'Bumblebee', 'Transformers: O Despertar das Feras']
console.log(listF[0])
console.log(listF[3])

listF.pop()
console.log(listF)
listF = [...listF, 'Transformers: O Início']
console.log(listF)

listF = [...listF, 'Transformers: O Despertar das Feras ']
console.log(listF)

listF.splice(5, 0, 'gato de botas')
console.log(listF)

listF.shift()
console.log(listF)

listF.pop()
console.log(listF)

console.log(listF[0,3])

console.log(listF[4,7])

console.log(listF.length)

console.log(listF.slice[-1])

