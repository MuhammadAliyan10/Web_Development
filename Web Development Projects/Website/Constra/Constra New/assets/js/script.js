const buisness = document.getElementById('btn-1')
buisness.addEventListener('click', ()=>{
    if(document.getElementById('img-1').style.display === 'block'){
        document.getElementById('img-1').style.display = 'none';
        document.getElementById('img-2').style.display = 'block';
    }
    else{
        document.getElementById('img-1').style.display = 'block'
    }
})

const property = document.getElementById('btn-2')
property.addEventListener('click', ()=>{
    if(document.getElementById('img-2').style.display === 'block'){
        document.getElementById('img-2').style.display = 'none';
    }
    else{
        document.getElementById('img-2').style.display = 'block'
    }
})

const building = document.getElementById('btn-3')
building.addEventListener('click', ()=>{
    if(document.getElementById('img-3').style.display === 'block'){
        document.getElementById('img-3').style.display = 'none';
    }
    else{
        document.getElementById('img-3').style.display = 'block'
    }
})
const housing = document.getElementById('btn-4')
housing.addEventListener('click', ()=>{
    if(document.getElementById('img-4').style.display === 'block'){
        document.getElementById('img-4').style.display = 'none';
    }
    else{
        document.getElementById('img-4').style.display = 'block'
    }
})
