function addOne(pos) {
    const item= document.getElementById(`item${pos}`)
    const btn=document.getElementById(`minbtn${pos}`)
    btn.removeAttribute('disabled');
    let former = item.innerHTML
    former++
    item.innerHTML=former
    updateTotal()
}
function subOne(pos) {
    const item= document.getElementById(`item${pos}`)
    let former = item.innerHTML
    former--
    item.innerHTML=former
    if(item.innerHTML<2){
        const btn=document.getElementById(`minbtn${pos}`)
        btn.setAttribute('disabled', '');    
    }
    updateTotal()
}
    
function updateTotal() {
        const item1= document.getElementById(`item1`)
        const item2= document.getElementById(`item2`)
        const item3= document.getElementById(`item3`)
        const tots= document.getElementById(`total`)
        let total=0
        alert
        if(item1){
            total+= (item1.innerHTML*10090)
        }
        if(item2){
            total+= (item2.innerHTML*6490)
        }
        if(item3){
            total+= (item3.innerHTML*7890)
        }
        tots.innerHTML= total
        
        
    }
    
    function deleteitem(pos) {
        const toDelete= document.getElementById(`fullitem${pos}`);
        toDelete.remove();
        updateTotal();
    }
    updateTotal()