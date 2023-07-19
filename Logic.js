var numberofkeys = document.querySelectorAll(".cursor-pointer").length;
var count = 1;
var equation = "";
var equation2 = "";
var num = 0;
var num2 = 0;
var sign = "";
var psign = "";
var q = 0;
var audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
for (var i = 0;i<numberofkeys;i++)
{
    document.querySelectorAll(".cursor-pointer")[i].addEventListener("click",function(){
            var t = this.innerHTML;
            document.querySelector(".try").classList.add("stylescreen2");
            document.querySelector(".try").classList.remove("stylescreen1");
            switch(t)
            {
                case "0":
                    audio.play();
                    if (equation.length < 50)
                    {
                        equation = equation + t;
                        equation2 = equation2 + t;
                    }
                    document.querySelector(".try").innerHTML = equation;
                    break;
                case "00":
                    audio.play();
                    if (equation.length < 50)
                    {
                        equation = equation + t;
                        equation2 = equation2 + t;
                    }
                    document.querySelector(".try").innerHTML = equation;
                    break;
                case "1":
                    audio.play();
                    if (equation.length < 50)
                    {
                        equation = equation + t;
                        equation2 = equation2 + t;
                    }
                    document.querySelector(".try").innerHTML = equation;
                    break;
                case "2":
                    audio.play();
                    if (equation.length < 50)
                    {
                        equation = equation + t;
                        equation2 = equation2 + t;
                    }
                    document.querySelector(".try").innerHTML = equation;
                    break;
                case "3":
                    audio.play();
                    if (equation.length < 50)
                    {
                        equation = equation + t;
                        equation2 = equation2 + t;
                    }
                    document.querySelector(".try").innerHTML = equation;
                    break;
                case "4":
                    audio.play();
                    if (equation.length < 50)
                    {
                        equation = equation + t;
                        equation2 = equation2 + t;
                    }
                    document.querySelector(".try").innerHTML = equation;
                    break;
                case "5":
                    audio.play();
                    if (equation.length < 50)
                    {
                        equation = equation + t;
                        equation2 = equation2 + t;
                    }
                    document.querySelector(".try").innerHTML = equation;
                    break;
                case "6":
                    audio.play();
                    if (equation.length < 50)
                    {
                        equation = equation + t;
                        equation2 = equation2 + t;
                    }
                    document.querySelector(".try").innerHTML = equation;
                    break;
                case "7":
                    audio.play();
                    if (equation.length < 50)
                    {
                        equation = equation + t;
                        equation2 = equation2 + t;
                    }
                    document.querySelector(".try").innerHTML = equation;
                    break;
                case "8":
                    audio.play();
                    if (equation.length < 50)
                    {
                        equation = equation + t;
                        equation2 = equation2 + t;
                    }
                    document.querySelector(".try").innerHTML = equation;
                    break;
                case "9":
                    audio.play();
                    if (equation.length < 50)
                    {
                        equation = equation + t;
                        equation2 = equation2 + t;
                    }
                    document.querySelector(".try").innerHTML = equation;
                    break;
                case ".":
                    audio.play();
                    if (equation.length < 50)
                    {
                        equation = equation + t;
                        equation2 = equation2 + t;
                    }
                    q = 1;
                    document.querySelector(".try").innerHTML = equation;
                    break;
                case "+":
                    audio.play();
                    if (equation.length < 50)
                    {
                        equation = equation + t;
                    }
                    if(sign.length != 1)
                    {
                        if (q == 1)
                        {
                            num = parseFloat(equation2);
                            q = 0;
                        }
                        else
                        {
                            num = parseInt(equation2);
                        }
                        equation2 = "";
                        sign = t;
                    }
                    else
                    {
                        psign = sign; 
                        if (sign == "+")
                        {
                            if (q == 1)
                            {
                                num2 = parseFloat(equation2);
                                q = 0;
                            }
                            else
                            {
                                num2 = parseInt(equation2);
                            }
                            num = num + num2;
                        }
                        if (sign == "-")
                        {
                            if (q == 1)
                            {
                                num2 = parseFloat(equation2);
                                q = 0;
                            }
                            else
                            {
                                num2 = parseInt(equation2);
                            }
                            num = num - num2;
                        }
                        if (sign == "/")
                        {
                            if (q == 1)
                            {
                                num2 = parseFloat(equation2);
                                q = 0;
                            }
                            else
                            {
                                num2 = parseInt(equation2);
                            }
                            num = num/num2;
                        }
                        if (sign == "X")
                        {
                            if (q == 1)
                            {
                                num2 = parseFloat(equation2);
                                q = 0;
                            }
                            else
                            {
                                num2 = parseInt(equation2);
                            }
                            num = num*num2;
                        }
                        sign = t;
                        equation2 = "";
                    }
                    document.querySelector(".try").innerHTML = equation;
                    break;
                case "-":
                    audio.play();
                    if (equation.length < 50)
                    {
                        equation = equation + t;
                    }
                    if(sign.length != 1)
                    {
                        if (q == 1)
                        {
                            num = parseFloat(equation2);
                            q = 0;
                        }
                        else
                        {
                            num = parseInt(equation2);
                        }
                        equation2 = "";
                        sign = t;
                    }
                    else
                    {
                        psign = sign; 
                        if (sign == "+")
                        {
                            if (q == 1)
                            {
                                num2 = parseFloat(equation2);
                                q = 0;
                            }
                            else
                            {
                                num2 = parseInt(equation2);
                            }
                            num = num + num2;
                        }
                        if (sign == "-")
                        {
                            if (q == 1)
                            {
                                num2 = parseFloat(equation2);
                                q = 0;
                            }
                            else
                            {
                                num2 = parseInt(equation2);
                            }
                            num = num - num2;
                        }
                        if (sign == "/")
                        {
                            if (q == 1)
                            {
                                num2 = parseFloat(equation2);
                                q = 0;
                            }
                            else
                            {
                                num2 = parseInt(equation2);
                            }
                            num = num/num2;
                        }
                        if (sign == "X")
                        {
                            if (q == 1)
                            {
                                num2 = parseFloat(equation2);
                                q = 0;
                            }
                            else
                            {
                                num2 = parseInt(equation2);
                            }
                            num = num*num2;
                        }
                        sign = t;
                        equation2 = "";
                    }
                    document.querySelector(".try").innerHTML = equation;
                    break;
                case "X":
                    audio.play();
                    if (equation.length < 50)
                    {
                        equation = equation + t;
                    }
                    if(sign.length != 1)
                    {
                        if (q == 1)
                        {
                            num = parseFloat(equation2);
                            q = 0;
                        }
                        else
                        {
                            num = parseInt(equation2);
                        }
                        equation2 = "";
                        sign = t;
                    }
                    else
                    {
                        psign = sign; 
                        if (sign == "+")
                        {
                            if (q == 1)
                            {
                                num2 = parseFloat(equation2);
                                q = 0;
                            }
                            else
                            {
                                num2 = parseInt(equation2);
                            }
                            num = num + num2;
                        }
                        if (sign == "-")
                        {
                            if (q == 1)
                            {
                                num2 = parseFloat(equation2);
                                q = 0;
                            }
                            else
                            {
                                num2 = parseInt(equation2);
                            }
                            num = num - num2;
                        }
                        if (sign == "/")
                        {
                            if (q == 1)
                            {
                                num2 = parseFloat(equation2);
                                q = 0;
                            }
                            else
                            {
                                num2 = parseInt(equation2);
                            }
                            num = num/num2;
                        }
                        if (sign == "X")
                        {
                            if (q == 1)
                            {
                                num2 = parseFloat(equation2);
                                q = 0;
                            }
                            else
                            {
                                num2 = parseInt(equation2);
                            }
                            num = num*num2;
                        }
                        sign = t;
                        equation2 = "";
                    }
                    document.querySelector(".try").innerHTML = equation;
                    break;
                case "/":
                    audio.play();
                    if (equation.length < 50)
                    {
                        equation = equation + t;
                    }
                    if(sign.length != 1)
                    {
                        if (q == 1)
                        {
                            num = parseFloat(equation2);
                            q = 0;
                        }
                        else
                        {
                            num = parseInt(equation2);
                        }
                        equation2 = "";
                        sign = t;
                    }
                    else
                    {
                        psign = sign; 
                        if (sign == "+")
                        {
                            if (q == 1)
                            {
                                num2 = parseFloat(equation2);
                                q = 0;
                            }
                            else
                            {
                                num2 = parseInt(equation2);
                            }
                            num = num + num2;
                        }
                        if (sign == "-")
                        {
                            if (q == 1)
                            {
                                num2 = parseFloat(equation2);
                                q = 0;
                            }
                            else
                            {
                                num2 = parseInt(equation2);
                            }
                            num = num - num2;
                        }
                        if (sign == "/")
                        {
                            if (q == 1)
                            {
                                num2 = parseFloat(equation2);
                                q = 0;
                            }
                            else
                            {
                                num2 = parseInt(equation2);
                            }
                            num = num/num2;
                        }
                        if (sign == "X")
                        {
                            if (q == 1)
                            {
                                num2 = parseFloat(equation2);
                                q = 0;
                            }
                            else
                            {
                                num2 = parseInt(equation2);
                            }
                            num = num*num2;
                        }
                        sign = t;
                        equation2 = "";
                    }
                    document.querySelector(".try").innerHTML = equation;
                    break;
                case "=":
                    audio.play();
                    if (sign == "+")
                    {
                        if (q == 1)
                        {
                            num2 = parseFloat(equation2);
                            q = 0;
                        }
                        else
                        {
                            num2 = parseInt(equation2);
                        }
                        num = num + num2;
                    }
                    if (sign == "-")
                    {
                        if (q == 1)
                        {
                            num2 = parseFloat(equation2);
                            q = 0;
                        }
                        else
                        {
                            num2 = parseInt(equation2);
                        }
                        num = num - num2;
                    }
                    if (sign == "/")
                    {
                        if (q == 1)
                        {
                            num2 = parseFloat(equation2);
                            q = 0;
                        }
                        else
                        {
                            num2 = parseInt(equation2);
                        }
                        num = num/num2;
                    }
                    if (sign == "X")
                    {
                        if (q == 1)
                        {
                            num2 = parseFloat(equation2);
                            q = 0;
                        }
                        else
                        {
                            num2 = parseInt(equation2);
                        }
                        num = num*num2;
                    }
                    document.querySelector(".try").innerHTML = num;
                    equation = equation + "=" + num.toString();
                    localStorage.setItem(count, equation);
                    count = count + 1;
                    num = 0;
                    num2 = 0;
                    equation = "";
                    equation2 = "";
                    sign = "";
                    psign = "";
                    q = 0;
                    break;
                case "Del":
                    audio.play();
                    if (equation.length == 1)
                    {
                        equation = "";
                        equation2 = "";
                        document.querySelector(".try").classList.remove("stylescreen2");
                        document.querySelector(".try").classList.add("stylescreen1");
                        document.querySelector(".try").innerHTML = "Screen";
                    }
                    else
                    {
                        if (equation[equation.length - 1] == '+' || equation[equation.length - 1] == '-' || equation[equation.length - 1] == 'X' || equation[equation.length - 1] == '/')
                        {
                            if (psign.length != 1)
                            {
                                equation = equation.slice(0,equation.length - 1);
                                sign = "";
                                equation2 = num.toString();
                                num = 0;
                            }
                            else
                            {
                                equation = equation.slice(0,equation.length - 1);
                                sign = psign;
                                psign = "";
                                if (sign == "+")
                                {
                                    num = num - num2;
                                    equation2 = num2.toString();
                                }
                                if (sign == "-")
                                {
                                    num = num + num2;
                                    equation2 = num2.toString();
                                }
                                if (sign == "X")
                                {
                                    num = num/num2;
                                    equation2 = num2.toString();
                                }
                                if (sign == "/")
                                {
                                    num = num*num2;
                                    equation2 = num2.toString();
                                }
                            }
                        }
                        else
                        {
                            if (equation2.length == 1)
                            {
                                equation2 = "";
                                equation = equation.slice(0,equation.length - 1);
                            }
                            else
                            {
                                if (equation2[-1] == ".")
                                {
                                    equation2 = equation2.slice(0,equation2.length - 1);
                                    equation = equation.slice(0,equation.length - 1);
                                    q = 0;
                                }
                                else
                                {
                                    equation2 = equation2.slice(0,equation2.length - 1); 
                                    equation = equation.slice(0,equation.length - 1);
                                }
                            }
                        }
                        document.querySelector(".try").innerHTML = equation;
                    }
                    break;
                case "AC":
                    audio.play();
                    equation = "";
                    equation2 = "";
                    sign = "";
                    psign = "";
                    num = 0;
                    num2 = 0;
                    q = 0;
                    document.querySelector(".try").classList.remove("stylescreen2");
                    document.querySelector(".try").classList.add("stylescreen1");
                    document.querySelector(".try").innerHTML = "Screen";
                    document.querySelector(".tt").innerHTML = "Press Old to Show History";
                    document.querySelector(".tt").classList.remove("stylescreen3");
                    document.querySelector(".tt").classList.add("stylescreen1");
                    break;
                case "Old":
                    audio.play();
                    document.querySelector(".tt").innerHTML = "";
                    document.querySelector(".tt").classList.remove("stylescreen1");
                    document.querySelector(".tt").classList.add("stylescreen3");
                    for (var k = 1;k<count;k++)
                    {
                        //document.querySelector(".tt").innerHTML += k + ")" + " ";
                        document.querySelector(".tt").innerHTML += "<li>" + k + ")" + " " + localStorage.getItem(k) + "</li>";
                    }
                    break;
                default:
                    console.log("Invalid");
            }
    });
}