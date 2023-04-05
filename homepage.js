var articles = $('#articles');
var questions = $('#questions');
var subscribed = $('#subscribed');
var learn = $('#learn');
var account = $('#account');

articles.hide();
questions.hide();
subscribed.hide();
learn.hide();
account.hide();

var now = null;
var articlesBtn = $('#articlesBtn');
var questionsBtn = $('#questionsBtn');
var subscribedBtn = $('#subscribedBtn');
var learnBtn = $('#learnBtn');
var accountBtn = $('#accountBtn');

articlesBtn.on('click', ()=>{
    if (now) now.hide();
    articles.show();
    now = articles;

    //refresh(articles);
    now.children().remove();
    date = new Date;
    time = date.getTime();
    now.append("<div>"+time+"</div>");
});

questionsBtn.on('click', ()=>{
    if (now) now.hide();
    questions.show();
    now = questions;
});

subscribedBtn.on('click', ()=>{
    if (now) now.hide();
    subscribed.show();
    now = subscribed;
});

learnBtn.on('click', ()=>{
    if (now) now.hide();
    learn.show();
    now = learn;
});

accountBtn.on('click', ()=>{
    if (now) now.hide();
    account.show();
    now = account;
});