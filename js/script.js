let swipeElem = document.querySelectorAll(".swipe"),
 plusesItem=document.querySelectorAll(".pluses__item")
, plusesText=document.querySelectorAll(".pluses__text"),
mainItem=document.querySelector(".main"),
headerItem=document.querySelector(".header"),
calcItem=document.querySelector(".resultPrice"),
burgerOrder=document.querySelector(".order__burger"),
orderItem=document.querySelector(".order"),
btnMain = document.getElementsByClassName("main__btn")[0];

let quantityBlocks=+document.getElementById("quantityBlocks").value,
  responsive=document.getElementById("responsive") ,
  sliders=+document.getElementById("sliders").value,
  addFunctional=document.getElementById("addFunctional"),
  moreAnimation=document.getElementById("moreAnimation"),
  sale=document.getElementById("sale"),
  sum=0,res=document.querySelector(".order__cost")  ;


burgerOrder.addEventListener("click",hideOrder)
function hideOrder(){
    orderItem.style.display="none"
}
for(let i  =0;i<plusesItem.length;i++){
   
            plusesItem[i].addEventListener("click",function(){
                plusesItem[i].classList.toggle("active");
                if(plusesItem[i].classList.contains("active")){
                   
                        plusesText[i].style.fontSize="15px";
                    
                
                    swipeElem[i].style.transform="rotate(-90deg)";
                }
               
                else {
                plusesText[i].style.fontSize="0px";
                swipeElem[i].style.transform="rotate(90deg)";
                }
                    });
}

mainItem.addEventListener("mouseover", function(){
    headerItem.style.transform="scale(1.01)";
});
mainItem.addEventListener("mouseout", function(){
    headerItem.style.transform="scale(1)";
});

// Функция расчета итоговой стоимости
// calcItem.addEventListener("click",resultPrice);
// function resultPrice(){
  

//   if(responsive.checked) sum+=(quantityBlocks*500);
//   if(addFunctional.checked) sum+=600;
//   if(moreAnimation.checked) sum+=400;

//   sum=sum+sliders*600+quantityBlocks*400;
//   if(sale.checked) sum*=0.9;
//   res.innerHTML="";
//   res.insertAdjacentHTML("beforeend",`Приблизительная стоимость ${sum} рублей`);
//   orderItem.style.display="flex"
// }


slides();
function slides(){
    let leftSlide = document.querySelectorAll('.contacts__elem')[0],
        rightSlide = document.querySelectorAll('.contacts__elem')[1],
        itemSlider = document.getElementsByClassName("contacts__slide"),
        quantitySlides = itemSlider.length,
        sliderTrack = document.getElementsByClassName("contacts__track")[0], 
        currentElem=0;

        leftSlide.addEventListener("click",function(){
        currentElem--;
        checkItem("left");
        });
        
        rightSlide.addEventListener("click",function(){
        currentElem++;
        checkItem("right");
        });
        
        function checkItem(side){
        if(currentElem<0){
        currentElem = quantitySlides-1;
        sliderTrack.style.transform="translateX("+currentElem*-itemSlider[0].offsetWidth+"px)";
        return;
        } 
        if(currentElem > quantitySlides-1){
        currentElem=0;
        } 
        
        if(side=="left"){
        sliderTrack.style.transform="translateX("+currentElem*-itemSlider[0].offsetWidth+"px)";
        }
        else{
        sliderTrack.style.transform="translateX("+currentElem*-itemSlider[0].offsetWidth+"px)";
        }
        }
}


let headerBurger1 = document.getElementsByClassName("nav__burger")[0],
headerBurger2 = document.getElementsByClassName("module__burger")[0],
burgerMenu=document.getElementsByClassName("module")[0];

headerBurger1.addEventListener("click",showMenu);
headerBurger2.addEventListener("click",hideMenu);
function showMenu(){
    burgerMenu.style.visibility="visible";
    burgerMenu.style.transform="translateX(0px)";
}
function hideMenu(){
    burgerMenu.style.visibility="hidden";
    burgerMenu.style.transform="translateX(1000px)";
}


// Координация по сайту

const anchors = document.querySelectorAll("a[href*='#'");

for(let anchor of anchors){
    anchor.addEventListener("click",function(e){
    e.preventDefault();
    hideMenu();
    hideOrder();
    const blockID = anchor.getAttribute('href');
    if(blockID!="#plus"){
        document.querySelector(""+blockID).scrollIntoView({
            block: "center",
            behavior: "smooth"
        });
       

    }
    else{
        document.querySelector(""+blockID).scrollIntoView({ 
            behavior: "smooth"
        });
    }
  
    });
}