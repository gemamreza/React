export const hitungKata = (str) => {
    str = str.trim()
    var arr = str.split(' ')
    var jumlahKata = arr.length
    return{
        type : "HITUNG_KATA",
        payload : jumlahKata
    }
}