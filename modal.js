console.log('modal connected');
// alert('kire hala kahini koros');

const showAlert = () => {
    const num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        alert('kire hala');
    }
}

const askSomething = () => {
    const decision = confirm('Are you going to picnic ?');
    console.log(decision);
    if (decision === true) {
        alert('Give me 500 tk on Bkash');
    }
    else {
        console.log('Fuck off');
    }
}

const getUserInfo = () => {
    const name = prompt('Give me your name please');
    // console.log(name);
    if (!!name) {
        console.log(`Welocome here ${name}`);
    }
}