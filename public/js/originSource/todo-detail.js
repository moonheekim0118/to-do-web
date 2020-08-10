const NotDoneUl = document.querySelector('.NotDone-list');
const DoneUl = document.querySelector('.Done-list');
const NotDoneLogo=document.querySelector('.NotDone-logo');
const DoneLogo =document.querySelector('.Done-logo');
const csrf=document.querySelector('[name=_csrf]').value;
const date = document.querySelector('[name=date]').value;

window.createli=function(contents,id,checked){  // li 생성해주는 함수 
    const li = document.createElement('li');
    li.className='post';
    li.innerHTML = `
    <li class="post">
        <input type="hidden"  name="_csrf"  value="${csrf}"  >
        <input type="hidden"  name="date"  value="${date}"  >
        <input type="checkbox" id="doneToggle" onClick="doneCheck(this)" ${checked}>
        <input type="hidden" name="postId" id="postId" value="${id}">
        ${contents}
    </li>
    `;
    return li;
}

window.toNotDone=function(contents, id){  // 아직 완료 안되었음 으로 바꿔주는 함수 
    const li = createli(contents,id,'');
    NotDoneUl.appendChild(li);
       // ul과 logo가 hidden 되어있다면 --> 첫번째 요소라면 
    if(NotDoneUl.classList.contains('hidden')){ 
        NotDoneUl.classList.remove('hidden');
        NotDoneLogo.classList.remove('hidden');
    }
}

window.toDone=function(contents,id){ // 완료되었음 으로 바꿔주는 함수 
    const li = createli(contents,id,'checked');
    DoneUl.appendChild(li);
    if(DoneUl.classList.contains('hidden')){
        DoneUl.classList.remove('hidden');
        DoneLogo .classList.remove('hidden');
    }
}

window.doneCheck=async function(dom){ // 체크박스 onclick 이벤트 
    const li = dom.parentNode;
    const ParentUl= li.parentNode;
    const checked = dom.checked;
    const contents = li.innerText;
    const id = li.querySelector('input[name="postId"]').value;
    const method= 'PUT';
    const sendingData = {'id':id, 'isDone':checked, 'date':date};
    try{ // put fetch 
        const result = await fetch('/done-check-detail', 
        {
            method:method,
            headers:{
                'Accept': 'application/json',
                'csrf-token':csrf,
                'Content-Type':'application/json;charset=utf-8'
            },
            body: JSON.stringify(sendingData)
        });
        const data = await result.json();
        const DoneLength=data.DoneLength; // 완료된 포스트 개수
        const NotDoneLength=data.NotDoneLength; // 미완료된 포스트 개수 
        if(checked === true){ // Not Done-> done
            ParentUl.removeChild(li);
            toDone(contents,id);
            // 해당 li를 현재 Not Done에서 빼주고,
            // li를 Done으로 옮겨주기 
            if(NotDoneLength===0){
                NotDoneUl.classList.add('hidden');
                NotDoneLogo.classList.add('hidden');
            }
        }
        else{ // done -> Not done
            ParentUl.removeChild(li);
            toNotDone(contents,id);
            if(DoneLength===0){
                DoneUl.classList.add('hidden');
                DoneLogo.classList.add('hidden');
            }
        }
    }catch(err) 
    {
        console.log(err);
    }
}