
var newFriend = {};
var possibleOne = {};
var possibleTwo = {};
var compare = 0;

$("#submit").on("click", function () {
    newFriend = {
        name: $("input[name='name']").val(),
        photo: $("input[name='photo']").val(),
        scores: []
    }

    var answers = $('input:checked');
    for (let i = 0; i < answers.length; i++) {
        newFriend.scores.push(answers[i].value);
    }

    for (let f = 0; f < friends.length; f++) {

        if(possibleTwo) {
            possibleOne.name = f;
            
            for (let i = 0; i < newFriend.scores.length; i++) {
                compare =+ Math.abs (parseInt(friends[f].scores[i]) - parseInt(newFriend.scores[i]));
            }
            possibleOne.value = compare;

            if(possibleOne.value < possibleTwo.value) {
                possibleTwo = {};
            } else {
                possibleOne = possibleTwo;
                possibleTwo = {};
            }
            
        } else { 
            possibleTwo.name = f;
            for (let i = 0; i < newFriend.scores.length; i++) {
                compare =+ Math.abs (parseInt(friends[f].scores[i]) - parseInt(newFriend.scores[i]));
        };
        possibleTwo.value = compare;
    }
}

})


