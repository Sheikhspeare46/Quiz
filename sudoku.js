@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body{
    background: #001e4d;
}

.app{
    background: #fff;
    width: 90%;
    max-width: 600px;
    margin: 100px auto 0;
    border-radius: 10px;
    padding: 30px;
}

.app h1{
    font-size: 25px;
    color: #001e4d;
    font-weight: 600;
    border-bottom: 1px solid #333;
    padding-bottom: 30px;
}

.quiz{
    padding: 20px 90;
}

.quiz h2{
    font-size: 18px;
    color: #001e4d;
    font-weight: 600;
}

.btn{
    background: #fff;
    color: #222;
    font-weight: 500;
    width: 100%;
    border: 1px solid #222;
    padding: 10px;
    margin: 10px 0;
    text-align: left;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s;
}

.btn:hover:not([disabled]){
    background: #222;
    color: #fff;
}

.btn:disabled{
    cursor: no-drop;
}

#next-btn{
    background: #001e4d;
    color: #fff;
    font-weight: 500;
    width: 150px;
    border: 0;
    padding: 10px;
    margin: 20px auto 0;
    border-radius: 4px;
    cursor: pointer;
    display: none;
}

.correct{
    background: #9aeabc;
}

.incorrect{
    background: #ff9393;
}
/* Add this CSS for the animated background */
body {
    background: linear-gradient(45deg, #2980B9, #6DD5FA, #ffffff, #6DD5FA, #2980B9);
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
}

@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

/* Add this CSS for the selected answer animation */
.btn.correct,
.btn.incorrect {
    animation: pulse 0.5s ease-in-out;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}
/* Add this CSS for the introductory animation */
.intro-animation {
    text-align: center;
    margin-top: 50px;
    display: none;
}

.intro-animation h2 {
    font-size: 24px;
    color:black;
    animation: introAnimation 2s ease-out forwards;
}

@keyframes introAnimation {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Add this CSS for the animated box around "Created By Sheikhspeare" */
.intro-animation {
    text-align: center;
    margin-top: 50px;
    display: none;
}

.intro-animation h2 {
    font-size: 24px;
    color: #fff;
    padding: 10px;
    background-color: #db1f12;
    border-radius: 5px;
    display: inline-block;
    animation: introAnimation 2s ease-out forwards, boxAnimation 2s ease-out forwards;
}

@keyframes introAnimation {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes boxAnimation {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
/* Add this CSS for the exit animation of the box */
@keyframes exitAnimation {
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-20px);
    }
}





