// loading modules 
const express = require('express');
const bodyParser = require('body-parser');
const { stringify } = require('querystring');


// declare app 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


const skins = [
    { 
       make:'bmw',
       body_type:'sedan',
       model:'x2',
       color:'green',
       year: 2009,

        
    },
    { 
        name:" BLUE SKIN",
        createdBy:"Junaid Iqbal",
        photo:"https://i.pinimg.com/originals/fd/3b/d6/fd3bd6960ca61e53440eb232dde91b30.png",
        id: 1
        
    },
    { 
        name:" GREEN SKIN",
        createdBy:"Junaid Iqbal",
        photo:"https://imgix.bustle.com/inverse/60/46/fb/25/8adb/4a4a/a46c/d29b4ca86d72/venturion-fortnite-skin.png",
        id: 2
        
    },
]




/* 
FORTNITE- SKINS 

GET  /  => FETCH ALL SKINS 
POST /  ==> ADD A SKIN
*/




//  GET ALL FORTNITE SKINS 
app.get('/', (req,res)=>{
    res.json({
        msg:'fuck you',
        skins:skins
    })
})





// CREATE FORTNITE SKIN 
app.post('/', (req,res)=>{
    const body = req.body;
    console.log('data', body);
// save it in database
body.id = skins[skins.length-1].id +1;

skins.push(body);



   res.json({
       skins: skins, 
       success: true
   })

})



// UPDATE FORNTIE SKIN 
app.put('/:id', (req,res)=>{

const arr = [4, 6, 3, 29, 199, 50 ];
console.log('arr', arr);
const length = arr.length;
console.log('length', length);

for(let i = 0; i<arr.length;i++){
    console.log('index ' + i, arr[i])

}


})



// DELETE FORNITE SKIN 
app.delete('/:id', (req,res)=>{})




// running server
app.listen(3000, ()=> console.log(`Running on 3000`))