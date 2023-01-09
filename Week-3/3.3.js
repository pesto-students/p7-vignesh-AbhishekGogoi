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
When we run the function in line 16, the createIncrement() function runs, first the count is initialized as 0 as given in line number 2. Then after that line number 7 executes which stores the count as a String and thats why in line number 8 the count value is 0. When line 18,19 & 20 executes the count value increments but since the count value is stored as a String beforehand in line 7 the message log is printed as "Count is 0", because it is stored as a String and the incremented value is not stored.

*/
