  const gamename = new String('hitesh-hc')
  console.log(gamename[1])
  console.log(gamename.length)
  console.log(gamename.toUpperCase())
  console.log(gamename.charAt(2))
  console.log(gamename.indexOf('i'))
  const newString = gamename.substring(0, 3)
  console.log(newString)
  const anotherString = gamename.slice(-8, 3)
  //slice means we give negative value
  console.log(anotherString)
  //mean length+negative index then we evaluate value
  const oneString='   love  '
  console.log(oneString)
  console.log(oneString.trim())
  const no="vanish.com"
  console.log(no)
  console.log(no.replace('i','a'))
  console.log(gamename.split('-'))
  console.log(gamename.split(','))
  //it means when we use  .split method then we first check in given string and find that symbol exist or not thenn we perform our split method