const post=[
    {id:1,title:"introduction"},
    {id:2,title:"chapter"}
]
     
const getpost=()=>{
     let lis='';                                       
     setTimeout(()=>{
        post.forEach(post=>{
            lis+=`<li> ${post.id}-${post.title} </li>`
    })
    document.getElementById("postlist").innerHTML=lis
    
    },1000);
    }

//here we add promise method instead of call back
const addpost=(posts)=>{                                            
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        post.push(posts);
        
            let err=true;
            if(err){
                reject()
            }else{
                resolve()
            }
    },2000)
        
    })
    
}

addpost({id:3,title:"chapter 2"})
        .then(getpost)
        .catch(()=>{
            console.log("eroor occured")
        })
        

//let p1=new Promise((resolve,reject)=>{
//            reject();
//})
//p1.then(()=>{
//    console.log("promise sucess")
//}).catch(()=>{
//         console.log("promise rejected")
//         })

