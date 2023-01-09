function createIncrement() {
    let count = 0;

    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    console.log(count);

    function log() {
        console.log(message);
    }
    return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log();

/* 
When we run the createIncrement() function for the first time on line 16, the value of count is 0 at the initial on line 2 and therefore the message will be displayed as Count is 0 from line 7 since we have not run the log() function and the count value stays 0 and is not incremented since we have not run the increment() function as well. When we first run the createIncrement() function it will take the initial value of count as 0 from line2 and the message will be displayed as Count is 0 from line 7. The increment() function is run 3 times from line 18 and the count will be incremented 3 times but while running the createIncrement() function it is not incremented since it is run after createFunction() has been executed.

*/