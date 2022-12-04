// export const getFAQTitles=(a, b) => a+b;

let article1 = {
     artQuestion: '1Питання?',
     artAnswer: '1Відповідь',
};

let article2 = {
    artQuestion: '2Питання?',
    artAnswer: '2Відповідь',
};

let ArrayArticle = [];
ArrayArticle[0] = article1;
ArrayArticle[1] = article2;

export const getArticlesFromDB =() => {return ArrayArticle};