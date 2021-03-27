// "html" is default dictinary loaded from html code
// in this example "html" language equals to english.
// If there is no active language dictionary then "html"
// language will be used

languative.modifyDictionary("html", {
    githubLink: "Fork me on GitHub"
});

// You dont have to modify "en" dictionary - it is loaded directly from html code.
// Thre is only "pl" and "de" dictionary. All other languages will use default "html" dictionary

languative.modifyDictionary("en", {
    english: "English",
    arabic: "Arabic",
    Language: "language",

});
languative.modifyDictionary("ar", {
    About: " عني",
    Skills: "المهارات",
    studied: "درسة في",
    selectLanguage: "Możesz wybrać język przez kliknięcie linków poniżej",
    english: "English",
    polish: "Polski",
    arabic: "عربي",
    Language: "اللغة",
    Programmer: "مبرمج",
    Language_detail: "لدي اكثر من ثلاث سنين في تصميم واقع الويب",
    ex: "مثال",
    Language_detail1: " لدي الخبرة في  laravel framework وايضاً bootstrap frameworks , css , html , sass , and javascript   ",
    Experience: "الخبرة",
    Web_Developer_detail: " لقد صممة عدة مواقع اخبارية و مدونات ",
    Web_Developer_date: " مارس 2019  _الان",
    Web_full_Stack: " لقد عملة كمطور في الويب بإستخدام PHP , laravel framework for PHP , css , sass,bootstrap , java script , Mysql  ",
    Web_full_Stack_date: " ديسمبر 2018  _ الان ",
    detail1: " لدي ايضاً بعض الخبرة في  Photoshop , Illustrator , and adobe XD . ",
    PROGRAMMING_detail: "  لقد درسة البرمجة في جامعة تعز ,,, اليمن   ",
    Graphics_detail: "لقد استخدمة مع بعض البرامج مثل photoshop , Illustrator ,adobe XD   ",
    contect_us: "تواصل معنا ",
    contect_detail: " يمكنك التوصال معي باستخدام هذة الاستمارة وتاكد من ان لديك اتصال جيد في الانترنت  ",
    area1: " السلخانة ",
    area2: " تعز  اليمن ",





});

function loadHtmlDictionary() {
    document.getElementById("htmlDictionary").innerText = JSON.stringify(languative.dictonaries.html, null, "  ");
}

function loadActiveDictionary() {
    document.getElementById("activeDictionary").innerText = JSON.stringify(languative.getDictionaryFromHtml(), null, "  ");
}

