

for (let i = 0; i < 7; i++){
    for (let j = 0; j<4; j++ ){
        if( j==0 || i==(3-j) || i==(3+j)){
            document.write("X")
        } else {
            document.write(" &nbsp; ")
        }
    }
    document.write("<br/>")
}