//Complete the function in the editor below by returning a RegExp object, , 
//that matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.

function regexVar() {
    let re;
    re = /^([aeiou]).*\1$/i;
    return re;
    };
