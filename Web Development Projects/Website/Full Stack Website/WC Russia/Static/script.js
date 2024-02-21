// const show_more = document.getElementById('view_more')
// show_more.addEventListener("click",()=>{
//     document.getElementById('demo').innerHTML = "We strive to give you an unbiased, trustworthy and in-depth view of the world's most prestigious football tournament. If you think that’s worth something, then you can support The Guardian from as little as £1 – and it only takes a minute. Support The Guardian’s World Cup coverage,We strive to give you an unbiased, trustworthy and in-depth view of the world's most prestigious football tournament. If you think that’s worth something, then you can support The Guardian from as little as £1 – and it only takes a minute. Support The Guardian’s World Cup coverage,We strive to give you an unbiased, trustworthy and in-depth view of the world's most prestigious football tournament. If you think that’s worth something, then you can support The Guardian from as little as £1 – and it only takes a minute. Support The Guardian’s World Cup coverage"
// })

// function myFunction(){
//     document.getElementById("demo").innerHTML = "We strive to give you an unbiased, trustworthy and in-depth view of the world's most prestigious football tournament. If you think that’s worth something, then you can support The Guardian from as little as £1 – and it only takes a minute. Support The Guardian’s World Cup coverage,We strive to give you an unbiased, trustworthy and in-depth view of the world's most prestigious football tournament. If you think that’s worth something, then you can support The Guardian from as little as £1 – and it only takes a minute. Support The Guardian’s World Cup coverage,We strive to give you an unbiased, trustworthy and in-depth view of the world's most prestigious football tournament. If you think that’s worth something, then you can support The Guardian from as little as £1 – and it only takes a minute. Support The Guardian’s World Cup coverage"
// }


// const show_more = document.getElementById('view_more')
// const para = document.getElementById('demo')
// const dots = document.getElementById('dots')
// show_more.addEventListener('click',()=>{
//     if(dots.style.display === "none"){
//         dots.style.display = 'inline'
//         para.style.display = "none"
//         show_more.innerHTML = "View More"

//     }
//     else{
//         dots.style.display = 'none'
//         para.style.display = 'inline'
//         show_more.innerHTML = 'View Less'
//     }
// })

const dots = document.getElementById('dots')
const para = document.getElementById('demo')
const view_more = document.getElementById('view_more')

view_more.addEventListener('click',()=>{
    if(dots.style.display === "none"){
        dots.style.display = 'inline'
        para.style.display = 'none'
        view_more.innerHTML = 'View More'

    }
    else{
        dots.style.display = 'none'
        para.style.display= 'inline'
        view_more.innerHTML = 'Show Less'
    }
})