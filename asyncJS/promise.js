// Nhiều hành động phụ thuộc vào nhau => viết nhiều callbacks => callback hell => promise
const xinSoDt = () => {
    let soDt;

    console.log('Goi dien cho thang ban: Cho tao xin so thang Nam');

    console.log('Dang tim...');

    const thaoTacTimKiem = new Promise((resolve, reject) => {
        let daTimThay;

        setTimeout(() => {
            daTimThay = true;

            if (daTimThay) {
                soDt = 123;
                console.log('Da tim thay so thang Nam');
                resolve(soDt);
            } else {
                reject('Tao khong co so');
            }
        }, 1000);
    });
    return thaoTacTimKiem;
};

xinSoDt()
    .then((soDt) => console.log(`Da xin duoc so thang nam: ${soDt}`))
    .catch((err) => console.log(err));
