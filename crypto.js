const crypto=require('crypto')
const fs=require('fs')

const key=crypto.randomBytes(16).toString('hex')
const algoritm='aes256'

const message='Привет как дела Адиляшка моя сабачка!'

function encrypt(string){
    const iv=crypto.randomBytes(8).toString('hex')
    const cipher=crypto.createCipheriv(algoritm,key, iv)
    let encrypted=cipher.update(string, 'utf8', 'hex')
    encrypted+=cipher.final('hex')
    return {encrypted,iv}
}

function decrypt(string){
    const encrypted=string.encrypted
    const iv=string.iv
    const decipher=crypto.createDecipheriv(algoritm,key,iv)

    let decrypted=decipher.update(encrypted, 'hex', 'utf8')
    decrypted+=decipher.final('utf8')
    return decrypted
}

//console.log(encrypt(message))
//console.log(decrypt({encrypted:'8514cbbc6c222ee6c9dd34d8c59786fac857db70ba839e63de4d6d84097e2151b0bf046fb3e7e7f6800cee1eef21f35d6269184da02bf8c1ff6ccb8357f83d04dbed7893d49bcbdde6eafac137194419', iv:'a292e18974b5e074'}))
console.log(decrypt(encrypt(message)))

console.log(crypto.getCiphers())