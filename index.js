let env = process.argv.splice(2)

if(env[0] == null || env[1] == null || env[2] == null){
    console.log("contoh : perhitungan 1 + 2");
    return;
}

try {
    console.log(eval(`${env[0]}${env[1]}${env[2]}`))
} catch (error) {
    console.log("gunakan angka yang benar contoh : 1 + 2")
}