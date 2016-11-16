process.stdin.resume();


let questions = {
    name:'',
    color:'',
    foo:'',
};


function ask_questions(questions,cb) {

    let keys = Object.keys(questions);

    let next = function (data) {

        if(data){
            questions[keys[0]]=data;
            keys.shift();
        }

        if(keys.length==0)
            return cb(questions);
    };

    next(null, true);

    process.stdin.on('data', next);


}

ask_questions(Object.keys(questions));