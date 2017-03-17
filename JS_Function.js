
function Name() {
    var Name = "Esmat";
    console.log(Name +" "+ "is awesome");

}
    Name()

var x = function(){
    console.log("This is the output")
}

 x()

function sayName(name, age){
    console.log(name + " "+"is awesome and he is "+" " + age)
}

     sayName('Esmat', 19)


function student(name, age, clas) {
    if (age <= 6 ){
        console.log(name + " you are not eligable to come to school ")

    }else {
        console.log(name + " Welcome to first class you are above six year old your age is "+ age)
    }

}
    student("Esmat", 3, "first")

    console.log("===============================")

    function CreateCat(name, age) {
        var cat={
            name:name,
            age:age
        }
        return cat
    }
    var myCat1 = CreateCat('fred', 10);
    var myCat2 = CreateCat('bill', 17);
    var myCat3 = CreateCat('someone', 11)
    console.log(myCat2, myCat1, myCat3)
    console.log("===============================")


    function CreateCat(name, age) {
        this.name = name;
        this.age = age;
        }
    var myCat1 = new CreateCat('fred', 18);
    myCat1.size = 200;
    console.log(myCat1)



    console.log("end")
