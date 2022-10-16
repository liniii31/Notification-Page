let readAll = document.getElementsByClassName('mark-as-read')[0];
let notRead = document.getElementsByClassName('not-read');
let count = parseInt(document.getElementsByClassName('notification-count')[0].innerHTML);
readAll.addEventListener('click',function(){
    for(ele of notRead){
        ele.style.backgroundColor = 'white';
        count--;        
    } 
    if(count<0){
        count=0;
    } 
    document.getElementsByClassName('notification-count')[0].innerHTML = count;  
})
for(ele of notRead){
    ele.addEventListener('click',function(){
        this.style.backgroundColor = 'white';
        count--;
        if(count<0){
            count=0;
        } 
        ele.style.cursor='inherit';
        document.getElementsByClassName('notification-count')[0].innerHTML = count; 
    })
}