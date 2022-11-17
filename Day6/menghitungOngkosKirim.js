// menghitung ongkos kriim

//1. ongkos kirim barang perkilo
//2. jika jarak tempuh dibawah 2kg => flat 8000
//3. jika jarak tempuh di atas 2km kilo meter selanjutnya 5000
//4. ada biaya layanan dihitung 4.5% dari total ongkir
//5. pake api nodejs readline
//6. perhatikan formatting uang
//7. gunakan while untuk looping

//ekspektasi output 
//jika jarak total ongkir 8000 biaya layanan 360  
// jika jarak total di atas 12km total ongkir rp 58000 biaya layanan 2610

const readlineSync = require('readline-sync')

const formatRupiah = (money) => {
    return new Intl.NumberFormat('id-ID',
        { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
    ).format(money);
 }
var isContinue = true


while(isContinue) {
    
    const input = readlineSync.question("berapa km? ", ans =>{
        input = ans
        rl.close()
    })

    if(input < 2) {
        biaya = 8000
    } else {
        biaya = 8000 + (5000 * (input - 2))
    }
        
    biayaLayanan = biaya * 4.5 / 100
        
    console.log(`biaya ${formatRupiah(biaya)} biayaLayanan ${formatRupiah(biayaLayanan)} total ${formatRupiah(biaya+biayaLayanan)}`)

    const temp = readlineSync.question("lanjut? (y/n)")

    console.log(temp)
    if(temp === 'y'){
        isContinue = true
    } else {
        isContinue = false
    }
    
}




  

