*{
    scroll-behavior: smooth;
}

body{
    background-color: rgb(7, 0, 0);
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    padding: 0 5%;
}

#title{
    align-self: center;
    width: 80%;
    text-align: center;
    font-style: italic;
    margin: 50px;
    margin-bottom: 150px;
    font-family: 'Times New Roman', Times, serif;
    letter-spacing: 3px;
    font-size: 1.5rem;
    border-bottom: solid 3px white;
    border-top: solid 3px white;
}

#footer{
    margin: 10px;
    text-align: center;
    border-top: solid 3px white;
}

#theme{
    display: flex;
}

.texts{
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.resume{
    margin: 20px;
    border-top: solid 1px white;
    border-bottom: solid 1px white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.Res{
    display: flex;
    margin-top: 100px;
    margin-bottom: 50px;
    border-top: 1px solid white ;
    border-bottom: 1px solid white;
    justify-content: space-between;
    border-radius: 10px;
    transition: .5s;
    color:rgb(155, 155, 155);
    height: auto;
    
}

.Res div:nth-of-type(1){
    display: flex;
    object-fit: cover;
    width: 50%;
}

.code{
    display: flex;
    margin: 20px;
    transition: .5s;
    width: 100%;
    border-radius: 20px;
    color:#03d4a4;
    background-color: rgb(32, 32, 32);
    padding: 5px;
}

.code:hover{
    transition: .5s;
    box-shadow: 0px 0px 10px rgb(255, 255, 255);
}

.button{
    align-items: center;
    background-color: #003025;
    color: rgb(155, 155, 155);
    border-radius: 5px;
    border: #001f18;
    height: 40px;
    width: 120px;
    margin: 30px;
}

.button:hover{
    border-radius: 10px;
    color: white;
    transition: .2s;
    background-color: #005e48;
    cursor: pointer;
}

.text{
    margin: 20px;
    font-weight: 900;
}

.resume h1{
    font-size: 200%;
}

.resume p{
    
    font-size: 150%;
}

.logo{
    background-color: rgb(7, 0, 0);
    justify-content: flex-end;
    align-items: end;
    margin: 10px;
}

.logo:hover{
    cursor: pointer;
}

.Res:hover{
    background-color: rgb(15, 15, 15);
    transition: .5s;
    box-shadow: 0px 0px 30px rgb(255, 255, 255);
    color: white;
}

.buttons{
    align-self: center;
}

.code textarea{
    background-color: rgb(32, 32, 32);
    border: 0px;
    color: #03d4a4;
    font-size: 150%;
}
