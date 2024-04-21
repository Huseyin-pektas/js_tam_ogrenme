/*

// Nesneler
let word = "javascript"

console.log(word[0], " hangi harf var") 
// çıktı şöyle = j  hangi harf var

let numOne = 3;
let numTwo = 3;

console.log(numOne==numTwo)
//  çıktı şu şekilde =true

let js = "javaScript";
let py = "Python"

console.log(js == py);   false

let nums = [1,2,3]
nums[0]=10 ;
console.log(nums)  

    // çıktı   (3) [10, 2, 3] 

    // DİZİ BİRLEŞTİRME
    let firsName = "hüseyin";
    let lastName = " pektaş"
    let country = "diyarabakır"
    let age = 31
    let job = "teacher"
    let quote = "The saying,'Seeing is Believing' is not correct in 2020.";
    let quotewWithBackTick =`The saying,'Seeing is Believing' is not correct in 2020.`;


    let fullName = firsName+lastName;
    console.log(fullName)
    // çıktı = hüseyin pektaş

    let bilgi ="benim adım "+ fullName +"." +"ben " + age + " yaşındayım. "+ country+ " yaşıyorum."
     console.log(bilgi)

    //  çıktı=benim adım hüseyin pektaş.ben 31 yaşındayım. diyarabakır yaşıyorum.

    // eğer paragrafta alt satıra geçmek istersek \ kullanırız.
    const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
    I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
    Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
    In the end of 2019, I was thinking to expand my teaching and to reach \
    to global audience and I started a Python challenge from November 20 - December 19.\
    It was one of the most rewarding and inspiring experience.\
    Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
    I hope you are enjoying too."
    
    console.log(paragraph)

/**
 *      JavaScript'te ve diğer programlama dillerinde \ ardından bazı karakterlerin gelmesi bir kaçış dizisidir. En yaygın kaçış karakterlerini görelim:

  \n: yeni satır
\t: Sekme, 8 boşluk anlamına gelir
\\: Ters eğik çizgi
\': Tek alıntı (')
\": Çift tırnak (")   */
/*
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')


// BACK TİCK İŞARETİ KULLANIMI

let isim ="ahmet";
let soyIsim =  "pektaş"

console.log(`benim adım ${isim} soyadım ise ${soyIsim} tır.`)
//  çıktı = benim adım ahmet soyadım ise pektaş tır.

//  dizide uzunluk

let java = "Javascript"
console.log(java.length)     
//  çıktı =10 
console.log(java[0], java.toUpperCase(),java.toLowerCase() ) 
//  çıktı =j,JAVASCRIPT,javascript
let string = "30 günde java öğreneceğim."
console.log(string.split(' '),string.split('')[7] )

// çıktı =['30', 'günde', 'java', 'öğreneceğim.'] split kelimeleri veya harfleri böler.
/**  
 çıktı =(26) ['3', '0', ' ', 'g', 'ü', 'n', 
 'd', 'e', ' ', 'j', 'a', 'v', 'a', ' ', 'ö',
 'ğ', 'r', 'e', 'n', 'e', 'c',
  'e', 'ğ', 'i', 'm', '.'] ,, 'e'
   */ 


/*
  let aylikKazanc = 5000;
  let yillikIkramiye =10000
  let aylikKursParasi = 1500

  console.log((aylikKazanc*12) +( yillikIkramiye) + (aylikKursParasi*12))
//   çıktı =88000


// TENRNARY OPERATÖRÜ
let isRaining = true;

isRaining ? document.write("israining doğruise: sana yağmurluk ceket lazım "): document.write("sana yağmurluk lazım değil ")

// alert,confirm ve promp

// let uyari = alert("bana tıklar mısın")
// let mesaj = prompt("bir sayı sec")
// let onayla  = confirm("sana bunu gönderiyorum. onaylar mısın ")
// document.write("cevap: " + onayla)

const yil = new Date().getFullYear()
document.write("cevap: " + yil)

const ay = new Date().getMonth()
document.write("cevap: " + ay)

let bütün =  Date.now()
console.log("cevap: " + bütün)

// if else

let weather = "sunny";

if (weather === "rainy") {
  console.log("senin bir cekete ihtiyacın var.")
  
}else if (weather ==="sunny") {
  console.log("rahat bir şekilde dışarı çıkabilirsiniz")
}else if (weather === "cloudy") {
  console.log("dışarıda hava soğuk")
} else {
  console.log("yagmur için bir seye ihtiyacın yok")
}
//  switch case

switch (weather) {
  case "rainy":
    console.log("hava yağmurlu")
    break;
    case "sunny":
      console.log("hava güneşli")
      break;
      case "cloudy":
    console.log("hava bulutlu")
    break;
  default:
    console.log("havanın durumu yok")
    break;
}

// let dayUserInput = prompt('What day is today ?')
// let day = dayUserInput.toLowerCase()

// switch (day) {
//   case 'monday':
//     console.log('Today is Monday')
//     break
//   case 'tuesday':
//     console.log('Today is Tuesday')
//     break
//   case 'wednesday':
//     console.log('Today is Wednesday')
//     break
//   case 'thursday':
//     console.log('Today is Thursday')
//     break
//   case 'friday':
//     console.log('Today is Friday')
//     break
//   case 'saturday':
//     console.log('Today is Saturday')
//     break
//   case 'sunday':
//     console.log('Today is Sunday')
//     break
//   default:
//     console.log('It is not a week day.')
// }


//  örnekler
let a = 4
let b = 3
if (a>b) {
  console.log( " a , b den büyüktür.")
}else {
  console.log("a b den küçüktür.")
}
// tenary operatörü
a>b ? console.log("a büyüktür b"): console.log("a küçüktür b")

let puan = a
a = 65
switch (true) {
  case (a > 79 && a < 101):
      console.log('PUANINIZ A');
      break;
  case (a > 69 && a <= 79):
      console.log('PUANINIZ B');
      break;
  case (a > 59 && a <= 69):
      console.log('PUANINIZ C');
      break;
  case (a > 49 && a <= 59):
      console.log('PUANINIZ D');
      break;
  case (a >= 0 && a <= 49):
      console.log('PUANINIZ F');
      break;
  default:
      console.log('Geçersiz puan');
}

let january = 31
let JANUARY = 31
let February = 28
let FEBruary = 28


if (january == 30) {
  console.log(" January has 31 days.")
  
}else if (JANUARY == 31) {
  console.log(" Enter a month: JANUARY, January has 31 day ")
}else if (February == 12) {
  console.log("February has 28 days.")
} else {
  console.log("Enter a month: FEbruary")
}


// DİZİLER

const arr = new Array("ahmet", "emin","sadettin")
console.log(arr)

const dizi = [1,2,3,4,5,6,7]

console.log(dizi)


const numaraDizisi = [0,1,2,3,5,6,8,,9,12,87.3,122];
const meyveler =['muz','kivi',"üzüm",'mango',"limon"]

console.log(numaraDizisi.length)
console.log(numaraDizisi[3])
console.log(meyveler[3])

let txt = "benim adım hüseyin ya senin adın nedir diye sorsam cevap?"

const words = txt.split(" ")
console.log(words)
// çıktı = (10) ['benim', 'adım', 'hüseyin', 'ya', 'senin', 
// 'adın', 'nedir', 'diye', 'sorsam', 'cevap?']

const webTech = [
  'Asabeneh', 'Mathias', 'Elias', 'Brook'
  
]
// join katmak katılmak
console.log(webTech.join())
console.log(webTech.join(""))
console.log(webTech.slice(" "))
console.log(webTech.splice(0,1))

const fruit =[1,2,3,4,5]
fruit.push(8)    //en sona ekler
console.log(fruit)
fruit.pop(2)    //en sondakini siler
console.log(fruit)
fruit.shift()  //en baştan siler
console.log(fruit)
fruit.unshift(8) //en başa ekler
console.log(fruit)
fruit.reverse()   // tesine çevirir.
console.log(fruit)
//  dizi içinde dizi dizme
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
// DÖNGÜLER

for (let i = 0; i <=6 ; i++) {
  console.log(`${i}*${i} = ${i*i}` )
  
}
for (let i = 0; i <=10 ; i++) {
  console.log(`${i}  ${i*i}  ${i**3}` )
  
}

//  sadece çif göster
for (let a = 0; a <100 ; a += 2) {
 console.log(a)
  
}
//  for each la da yapabiliriz
let ciftSayilar = []
for (let s = 0; s < 20; s += 2) {
  ciftSayilar.push(s)
  
}
ciftSayilar.forEach(function(x){
  console.log(x);
});

// sadece tek sayıları göster
let c = 1;
while (c <= 10) {
  console.log(c);
  c += 2;
}


for (let i = 0; i < 7; i++) {
  let row = "";
  for (let j = 0; j <=i; j++) {
    row +="#";
    
  }
  console.log(row)
}  */

//  fonksiyonlar ve fonksiyon kullanma yöntemleri

function fonksiyonAdi() {
  console.log("buarada fonksiyon oluşturdum")
}

fonksiyonAdi()

function kare() {
  let a = 5
  let b = a*a
  console.log(b, " kare alan bulduö")
}

//  değer döndürme
kare();
function tamAdı() {
  let adı = "Hüseyin";
  let soyadı="Pektaş ";
  let bosluk = " "
  let tamAd = adı + bosluk +soyadı
  // console.log(tamAd)
  return tamAd
  // console.log(tamAd)
}
console.log(tamAdı())

//  fonksiyon parametre alabilir

function yeniAd(params) {
  let alan = Math.PI*params*params;
  return alan 
}
console.log(yeniAd(10));

function kareniKaresi(nums) {
  return nums*nums
}
console.log(kareniKaresi(10))

function birlestir(adı , soyadı) {
  return `${adı} ${soyadı}`
}
console.log(birlestir("Hüseyin", "Pektaş"))

function arrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum  += arr[i];
  }
  return sum;
   
}
const numbers = [1,2,3,4,5,6]
console.log(arrayValues(numbers))


// arrowfonksiyonu

const greeting = (adi ="peter ")=>{
 
  let message = adi + "30 günlük javascript derslerine hoş geldin"
  return message
}
console.log(greeting())
console.log(greeting("hüseyin "))

// scope - kapsam
 let adım = "hüseyin";
 let soyadım = "Pektaş"

 function tamAdım(){
  console.log(adım, soyadım)
  if(true){
    let adım ="mehmet"
    let soyadım = "seyhan"
    console.log(adım, soyadım)
  }
  console.log(adım, soyadım)
 }
 tamAdım()
 console.log(adım, soyadım)


 let a = "javascript"
 let b = "10"

 function letsLearnScope(){
  console.log(a,b ,"a ile b değerleri")
  let value = false
  if(true){
    let a = "python"
    let b = 20
    let c = 40
    let d = "servis"
    value =  !value
    console.log(a,b,c,d,value, "if değerleri bunlara fonksiyon dışından erişilemez")

  }
  console.log(a,b, value," bakalım ne yazacak")

 }
 console.log(a,b, " içinde ne var")
letsLearnScope()


//  var ile tanımlarsak kapsam içinden veya dışından da ulaşırız.

function letsLearnScope(){
var grafity = 9.81
console.log(grafity , "garifity kaç")
}

//  objeler - Nesneler
//  nesneler iki süslü parantez arasında tanımlanır

let kisi = {
  adı:"hüseyin",
  soyAdı:"pektaş",
  yas: 31,
  ülke:"türkiye",
  beceriler:["html","css","javacript","react","nodels"],
  evliMi: true

}
 console.log(kisi) 
//çıktı {adı:'hüseyin', soyAdı: 'pektaş', yas: 31,ülke:'türkiye',beceriler: Array(5), …}
 console.log(kisi.beceriler) //(5) ['html', 'css', 'javacript', 'react', 'nodels']
 console.log(kisi.beceriler[0]) // html

// Nesnenin değerlerine iki yöntem kullanarak erişebiliriz:
// kullanarak. Anahtar adı tek kelimeden oluşuyorsa ardından anahtar adı gelir
// köşeli parantez ve alıntı kullanma

 const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  // buraya fonksiyonda tanımlayabiliriz. örneğin;
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  },

  'phone number': '+3584545454545'
}

// nokta kullanarak değere erişme
console.log("firstName:" ,person.firstName)
console.log("lastName:",person.lastName)
console.log("age:",person.age)
console.log("getfullNme:", person.getFullName())
console.log(person.location) // undefined

// değere köşeli parantez ve anahtar adı kullanılarak erişilebilir
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// örneğin telefon numarasına erişmek için yalnızca
//  köşeli parantez yöntemini kullanıyoruz
console.log(person['phone number'])




const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}


const toplamUserSayisi = Object.keys(users).length

console.log("toplam kullanıcı sayısı :", toplamUserSayisi)

// toplam kullanıcı sayısı : 7
const toplamUserSayis = Object.keys(users)
console.log("kullanıcı adları :", toplamUserSayis)
// kullanıcı adları : (7) ['Alex', 'Asab', 'Brook', 'Daniel', 'John', 'Thomas', 'Paul']

// point 50 ye eşit olanlar bulnma

for (const username in users) {
  if (users.hasOwnProperty(username)) {
    const user = users[username];
    if (user.points === 50) {
      console.log(`${username} kullanıcısının points değeri 50'ye eşit.`);
    }
  }
}


// Asab kullanıcısının points değeri 50'ye eşit.
//  Brook kullanıcısının points değeri 50'ye eşit.
//  John kullanıcısının points değeri 50'ye eşit.


const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const yeniDizi = countries.map((country)=>country.toUpperCase().slice(2,5))
console.log(yeniDizi)

// const countriesFirstThreeLetters = countries.map((country) =>
//   country.toUpperCase().slice(0, 3)
// )
// console.log(countriesFirstThreeLetters)

const icindeVarmi = countries.filter((country)=> country.includes("land"))
console.log(icindeVarmi)

const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const skorBüyük = scores.filter((skor)=> skor.score >= 80)
console.log(skorBüyük)

const isimUzunluk = scores.filter((x)=> x.name.length === 6)
console.log(isimUzunluk)
