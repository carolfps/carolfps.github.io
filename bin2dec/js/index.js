let binInput = document.getElementById('bin-input')

binInput.addEventListener('keyup', event => {
    let decOutput = document.getElementById('dec-output')
    
    if(binInput.value.length==0){

        decOutput.value = 0

    } else if(binInput.value.length>0){

        var binArray = binInput.value.split('')

        for(var index=0; index<binArray.length; index++){

            if(binArray[index] !=0 && binArray[index] !=1){

                binInput.value = ""
                decOutput.value = 0
                alert("Input number must be a binary 😒")
                return

            }            
        }
        decOutput.value = convertbin(binInput.value)
        
    }
})
