const form=document.querySelector('form');
form.addEventListener('click',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#result');
    if(height==='' || height <0 || isNaN(height)){
        result.innerHTML=`Please enter your proper height`;
    }else if(weight=== '' || weight <0 || isNaN(weight)){
        result.innerHTML=`Please enetr your proper weight`;
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(3);
        result.innerHTML=`<span> Your BMI IS : ${bmi} </span>`;
    }
});