const isAvailable = true;

const getSomething = new Promise(
    (resolve, reject) => {
        if(isAvailable){
            let info = {
                message: `Login successfully`
            };
            resolve(info);
        }else{
            let reason = new Error('Something wrong!');
            reject(reason);
        }
    }
)

const greeting = info => {
    let greeting = `${info.message}, Welcome!`;
    return Promise.resolve(greeting);
}


const go = () => {
    console.log('start');
    getSomething
        .then(greeting)
        .then(fulfilled => console.log(fulfilled))
        .catch(error => console.log(error.message));
    console.log('end');
}

go();