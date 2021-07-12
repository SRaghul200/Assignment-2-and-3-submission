s = "madam love his mom and dad"
s = s + " "
word = "" 
revword = ""
for(t of s) {
    if(t != " "){
       word = word+t 
       revword = t + revword 
    }
    else{
        if(word == revword){
            console.log(word)
        }
        word = ""
        revword = ""
    }
}