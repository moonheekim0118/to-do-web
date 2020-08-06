async function addTodo(dom){
    const contents = document.querySelector('input[name="task"]').value;
    if(contents.length <=0){ // contents 입력 안하고 submit 할 시
        return alert('please type contents of your todo!');
    }
    let importance=document.querySelector('input[name="importance"]:checked');
    if(importance===null){ // importance check 안할시 not 으로 자동 설정 
        importance='not';
    }else{
        importance=importance.id;
    }
    const sendingData = {contents: contents, importance: importance};
    const csrf=dom.parentNode.querySelector('[name=_csrf]').value;
    const method ="POST"; // post request 보낸다. 
    try{
        const result=await fetch('/add-todo',
        {
            method:method,
            body:JSON.stringify(sendingData),
            headers:{
                'Accept': 'application/json',
                'csrf-token':csrf,
                'Content-Type':'application/json;charset=utf-8'
            }
        });
        const data= await result.json(); 
        if(data.message === 'succeed'){ // dom 에다가 추가 
            const container= document.querySelector('.todo-container')
            const post = data.post;
            const ul = container.querySelector('.todo-list'); 
            const li = document.createElement('li'); 
            const clearBtn= document.querySelector('#clear');
            if(ul.classList.contains('hidden')){ // 첫번째 todo로 등록될 경우 
                ul.classList.remove('hidden'); // 숨겨졌던 ul visible하게 바꾸기 
            }
            if(clearBtn.classList.contains('removed')){ // 첫번째 todo 로 등록될 경우
                clearBtn.classList.remove('removed'); //숨겨졌던 clear all visible하게 바꾸기 
            } 
            li.classList.add('todo');
            li.innerHTML=
            `<input type="checkbox" id="doneToggle" onClick="DoneCheck(this)">
            <input type="hidden" name="postId" id="postId" value="${post._id}"">
            ${post.contents}
            <div class="dropdown">
                <button class="dropbtn">
                    <i class="fas fa-ellipsis-v"></i>
                  </button>
                  <div class="dropdown-content">
                  <button onclick="removeOne(this)">delete</button>
                    <a href="#">edit</a>
                  </div>
            </div>
            `
            ul.appendChild(li);
            document.querySelector('input[name="task"]').value='';
        }
    }catch(err){
        console.log(err);
    }
}

// check status 저장 -> html에서 해결해줌 
// checkbox onclick 함수
async function DoneCheck(dom){
    const li = dom.parentNode;
    const checked =dom.checked;
    const id = li.querySelector('input[name="postId"]').value;
    const csrf=document.querySelector('[name=_csrf]').value;
    if(checked===true){ // 체크 되었다면 
        li.classList.add('done'); // done 클래스 추가 
    }
    else{ // uncheck 되었다면 
        li.classList.remove('done'); //done class 삭제 
    }
    method='PUT';
    sendingData ={done:checked, id:id };
    const result = await fetch('/done-check',{  // 데이터베이스에 변경 사항 저장 
        method:method,
        body:JSON.stringify(sendingData),
        headers:{
            'Accept': 'application/json',
            'csrf-token':csrf,
            'Content-Type':'application/json;charset=utf-8'
        }
    })
    const data = await result.json();
    console.log(data);
}


async function clearAll(dom){
    const ul = document.querySelector('.todo-list');
    const method = "DELETE"
    const csrf=document.querySelector('[name=_csrf]').value;
   try{
    const result = await fetch('/delete-all', 
    {
        method:method,
        headers:{
            'Accept': 'application/json',
            'csrf-token':csrf
        }
    });
    const  data = await result.json();
    console.log(data);
    ul.innerHTML='';
    ul.classList.add('hidden'); // ul 안보이게 바꾸기 
    dom.classList.add('removed'); // clear all button 안보이게 바꾸기 
    }catch(err){console.log(err)}
}

async function removeOne(dom){
    const dropdown = dom.parentNode;
    const li =dropdown.parentNode.parentNode;
    const id = li.querySelector('#postId').value;
    const ul = document.querySelector('.todo-list');
    const clearBtn= document.querySelector('#clear');
    const csrf=document.querySelector('[name=_csrf]').value;
    const method = 'DELETE';
    try{
        const result =await fetch('/delete-one/'+id,
        {
            method:method,
            headers:{
                'Accept': 'application/json',
                'csrf-token':csrf
            }
        })
        const data = await result.json();
        ul.removeChild(li); // 삭제되었으니 해당 li 삭제 
        if(data.length === 0){ // 전달받은 남은 post 개수가 0이라면 ul과 button도 삭제해줘야함 
            ul.classList.add('hidden');
            clearBtn.classList.add('removed');
        }
    }catch(err){
        console.log(err);
    }
    
}