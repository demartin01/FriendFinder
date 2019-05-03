
var newFriend;
var possibleOne;
var possibleTwo = {};
var compare = 0;


$("#submit").on("click", function () {
    newFriend = {
        name: $("input[name='name']").val(),
        photo: $("input[name='photo']").val(),
        scores: []
    };

    var answers = $('input:checked');

    if (answers.length === 10) {    

        for (let i = 0; i < answers.length; i++) {
            newFriend.scores.push(answers[i].value);
        }
        console.log("New Friend: ", newFriend);

        for (let f = 0; f < friends.length; f++) {
            console.log("Friends index: ", f);

            if (possibleOne === undefined) {
                possibleOne = {};
                possibleOne.name = f;
                for (let i = 0; i < newFriend.scores.length; i++) {
                    compare += Math.abs(parseInt(friends[f].scores[i]) - parseInt(newFriend.scores[i]));

                };
                possibleOne.value = compare;

                console.log("possibleOne Value: ", possibleOne.value);
                console.log("possibleOne", friends[possibleOne.name])
                compare = 0;

                f++;

            };

            possibleTwo.name = f;
            console.log("Friends index2: ", f);

            for (let i = 0; i < newFriend.scores.length; i++) {
                compare += Math.abs(parseInt(friends[f].scores[i]) - parseInt(newFriend.scores[i]));
            }
            possibleTwo.value = compare;
            compare = 0;
            console.log("possibleTwo Value: ", possibleTwo.value);
            console.log("possibleTwo", friends[possibleTwo.name])
            if (possibleOne.value < possibleTwo.value) {
                possibleTwo = {};
            } else {
                possibleOne = possibleTwo;
                possibleTwo = {};
            };
        };

        const yourFriend = $("<img>", {"src": friends[possibleOne.name].image})

        $(".modal-body").html(yourFriend);
        $(".modal-footer").prepend(`<h2 style={"margin-left": "5px"}>${friends[possibleOne.name].name}</h2>`);

        console.log(friends[possibleOne.name]);

    } else { alert("Please answer all the questions.") }

})


