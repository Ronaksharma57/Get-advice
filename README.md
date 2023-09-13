# Get-advice
## HTML FILE 
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Get Advice</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="container">
      <h1 id="h1">To Get Advice Click On Generate Button</h1>
      <button id="btn">Generate Advice</button>
      <p>You are Generated <span>0</span> Advices</p>
    </div>
    <script src="index.js"></script>
  </body>
</html>
```

## CSS FILE 
```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
#h1 {
  background-color: aquamarine;
  border: 1px solid transparent;
  padding: 10px;
  border-radius: 10px;
  font-family: SamsungOne, arial, sans-serif;
}

#btn {
  margin-top: 50px;
  border: 1px solid transparent;
  padding: 20px;
  font-size: 40px;
  cursor: pointer;
  font-weight: 900;
  background-color: blueviolet;
  border-radius: 10px;
  color: white;
  font-family: SamsungOne, arial, sans-serif;
}
p {
  margin-top: 70px;
  border: 1px solid transparent;
  background-color: chartreuse;
  font-weight: 900;
  padding: 20px;
  font-size: 40px;
  border-radius: 10px;
  font-family: SamsungOne, arial, sans-serif;
}
```
## JS FILE

```
const h1 = document.getElementById("h1");
const btn = document.getElementById("btn");
const span = document.querySelector("span");
let count = 0;

btn.addEventListener("click", async function getAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    h1.innerText = data.slip.advice;
    count++;
    span.innerText = count;
  } catch {
    console.error();
  }
});

```
