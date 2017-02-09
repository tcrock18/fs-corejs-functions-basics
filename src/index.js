

export const shout = message => {
    return (message.toUpperCase() + '!!!');
};

export const johnnyFive = {


    greet(name) {

        if(!name)
            return `Johnny Five is Alive`;
        return `Hello, ${name}. I am Johnny 5.  I am alive!`;
    },

    shout() {
       return this.greet();

    }
};

console.log(shout('tanner'));

console.log(johnnyFive.greet('Tanner'));