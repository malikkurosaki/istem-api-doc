#!/usr/bin/env node

let env = process.argv.splice(2)

if(env[0] == null){
    console.log("contoh : perhitungan 1+2 ");
    return;
}

try {
    console.log(eval(`${env[0]}`))
} catch (error) {
    console.log("gunakan angka yang benar contoh : 1+2")
}