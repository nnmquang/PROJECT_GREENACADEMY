let arrSV = [
    {ma:1, ten:'khai'}
]

function * themSinhVien (sv) {
    yield [...arrSV,sv];

    yield 'Them sinh vien thanh cong';

    return 'Thanh cong'
};

function main() {
    let sinhVien = {ma:2, ten:'Nguyen Van A'};

    const iterator = themSinhVien(sinhVien)

    console.log('iterator', iterator.next().value);

    console.log('iterator', iterator.next());

    console.log('iterator', iterator.next());
}

main();

//con la false, xong la true(thuong o return)

// var mq = ['jv','pho']
// for(var value of mq) {
//     console.log(value)
// }
