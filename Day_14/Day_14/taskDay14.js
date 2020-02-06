

const domainName = (domain) => {

var arrDomain = domain.split('//')

var arrDomain2= arrDomain[1].split('.')

var output = ''

    if(arrDomain2.length > 2){
        output += arrDomain2[1]

    }else{
        output += arrDomain2[0]

    }

return output

}


// console.log(domainName("http://github.com/carbonFive/raygun")) //"github"
// console.log(domainName("http://www.zombie-bites.com")) //"zombie-bites"
// console.log(domainName("http://cnet.com")) //"cnet"











// ==============================================================================================================================



const moveZeros = (input = []) => {

var output = []
var outputNol = []

    for(var i = 0; i < input.length; i++){
        if(input[i] !== 0){
            output.push(input[i])

        }else{
            outputNol.push(input[i])

        }
    }

var final = output.concat(outputNol)

return final

}

// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
// console.log(moveZeros([1,3,4,2,4,0,1,2,0,3]))
// console.log(moveZeros(["budi",0,"fikri","andi"]))

// ===============================================================================================================












// ==============================================================================================================================
const decoder = (input = '') => {

var arrString = input.split('WUB')

var output =  arrString.join(' ')

return output

}

console.log(decoder('WUBWEWUBAREWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'))
console.log(decoder('WUBMYWUBNAMEWUBISWUBFIKRIWUB'))
// ===============================================================================================================================