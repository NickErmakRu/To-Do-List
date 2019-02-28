let input = $('#input');
let submitBtn = $('#submitBtn');
let todos = $('#todos');

todos.on('click', 'li', function(){
   $(this).toggleClass('active'); 
});

todos.on('click', '.delSpan', function(){
    $(this).parent().remove();
})

submitBtn.on('click', function(event) {
    event.preventDefault();
    
    let text = input.val();
    
    if (text !== '') {
        todos.append(
            '<li class="list-group-item"><span>'+text+'</span><span class="delSpan">X</span>'
        );

        input.val('');
    }
});
