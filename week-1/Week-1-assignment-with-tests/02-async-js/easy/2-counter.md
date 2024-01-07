## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



```javascript
    
    let counter = 1;
    function print(){
        console.clear();
        console.log(counter++);
        setTimeout(print,1000); // using recursion
    }
    setTimeout(print,1000);
```



































































(Hint: setTimeout)