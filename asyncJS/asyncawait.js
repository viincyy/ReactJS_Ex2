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

// Sac pin
const sacPin = () => {
    console.log('Dang sac pin...');
    let chayPin;

    const thaoTacSacPin = new Promise((resolve, reject) => {
        setTimeout(() => {
            chayPin = false;

            if (!chayPin) {
                console.log('Sac pin day, bat dau goi cho Nam');
                resolve();
            } else {
                reject('Pin chay');
            }
        }, 1500);
    });

    return thaoTacSacPin;
};

// Goi cho Nam
const goiChoNam = (soDt) =>
    console.log(`Dang noi chuyen voi Nam tai so ${soDt}`);

// Hanh dong
const hanhDong = async () => {
    try {
        const soDt = await xinSoDt();

        try {
            await sacPin();
            goiChoNam(soDt);
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
};

hanhDong();
