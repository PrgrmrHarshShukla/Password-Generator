let capi = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let small = "abcdefghijklmnopqrstuvwxyz"
let nums = "0123456789"
let spec = "!@#$%&_"

let c1 = Math.floor(Math.random()*capi.length)
let c2 = Math.floor(Math.random()*small.length)
let c3 = Math.floor(Math.random()*nums.length)
let c4 = Math.floor(Math.random()*spec.length)

class Password {
   constructor () {
      this.pass = ""
   }

   generateStrongPassword(len) {
      if(len<4) {
         console.log("Your password should be at least 4 characters long");
         return
      }
      else{
         let i = 0;
         while(i<len){
            this.pass += capi[c1]
            this.pass += small[c2]
            this.pass += nums[c3]
            this.pass += spec[c4]

            i+=4
         }
      }
      this.pass = this.pass.slice(0, len)
      return this.pass
   }
}

let a = new Password()

let passLength

document.getElementById("generate").addEventListener('click', () => {
   
   passLength = input.value
   let password = a.generateStrongPassword(passLength)
   console.log(password)

   let passes = []
   if(localStorage.getItem("passwords")){
      passes = JSON.parse(localStorage.getItem("passwords"))
   }

   localStorage.setItem('passwords', JSON.stringify([...passes, password]))

   console.log(typeof passes);
   console.log( passes);

   document.getElementById("dc").innerHTML = JSON.parse(localStorage.getItem("passwords"))[JSON.parse(localStorage.getItem("passwords")).length - 1]
   location.reload()
})


   document.getElementById("copy").addEventListener('click', () => {
      let text = JSON.parse(localStorage.getItem("passwords"))[JSON.parse(localStorage.getItem("passwords")).length - 1]
      navigator.clipboard.writeText(text)
      alert("Password copied to clipboard.")
   })

   window.onload = function() { 
      document.getElementById("dc").innerHTML = JSON.parse(localStorage.getItem("passwords"))[JSON.parse(localStorage.getItem("passwords")).length - 1]
   }
   

   document.getElementById("clear").addEventListener('click', () => {
      localStorage.removeItem("passwords")
      location.reload()
   })
   