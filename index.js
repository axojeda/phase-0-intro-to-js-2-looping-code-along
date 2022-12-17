    const name = ["Guadalupe", "Ollie", "Aki"]

    function writeCards(name, event) {
        const thanksMsg = []
        for(let i = 0; i < name.length; i++) {
            thanksMsg.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
        }
        return thanksMsg  
      }
    
      function countDown(num) {
        while (num >= 0) {
        console.log(num--
        )
        }
      }