var num = 10;
num = 20;

console.log(num);


var price = 10000;
console.log(price);

var myname = "테킷"
console.log(myname)
var myname2 = '멋사'
console.log(myname2)

var myname5=""사자"";
console.log(myname5);

var isTrue = true;
console.log(isTrue);
var isFalse = false;
console.log(isFalse);

var a;
console.log(a);

var student = { grade:1 school:"lion school"}; 
console.log(student);
;console.log(typeof(student));

var gradeinfo = student.grade ;
console.log(gradeinfo);

var key=object.keys(student)[0];
console.log(key;)

student.class=3;
console.log(student);

console.log(student['class'])
console.log(student.class);

var teacher=new object();
var teacher={  };

var name1 = "김멋사";
var name2 = "김멋사2";

var name3 = symbol("이테킷");
var name4 = symbol("이테킷";)
console.log(name3 == name4);

var myclass ={ [symbol("이테킷")] :1
[symbol("이테킷")] :2
};

var a =10;
var b =3;

console.log(a+b);
console.log(a-b);

console.log(4>2);
console.log(4<2);


console.log(true && true);
console.log(true && false && false);

console.log(!true);
console.log(!(5>4));
console.log(typeof 1);
console.log(typeof "1");
console.log(typeof undefined)
console.log(type of true)
console.log(typeof true)
console.log(typeof null)

var greeting = "hello!"
var farewell = "bye!"
var myname "김테킷"

var sentence = greeting + /n + myname;
console.log(sentence0);

var a ="안녕하세요 여러분"
console.log(a);

var price = 1000;
var b ="이 물건은 $(price)원입니다"
console.log(b)

var  c = "이 물건은" + price + "원 입니다"
console.log(c)
 
var d = '이 물건은 $(200+450)원 입니다'

console.log(d)

var mbti = [ 'infp', 'entp', 'infj'];
console.log(mbti[0]);
console.log(mbti[length]);

mbti[ 3]= 'entp';
console.log(mbti[3])
console.log(mbti.length)

push()
console.log(mbti.push('entp'))

console.log(mbti.pop());
console.log(mbti);

unshift()
console.log(mbti.unshift("entp"));
console.log(mbti);

var newMBTI = [ 'infp', 'entp' .charAt.apply.mbti];
console.log(mbti);
console.log(NEWmbti);

var mbti = [ 'infp', 'entp', 'infj'];
console.log(mbti.slice(0,2));

console.log(mbti.join());

console.log(mbti.sort().reverse());

var mbti = "entp";
var val ;

switch mbti{ 
case "entp":
    val = "infp"
    break;

    default
    val = "유효한 값이 아닙니다" 
}

for (var i=0;  i<10; i++)
{ for (var j=0; j<10; j++){  console.log('${i}-${j}')}}

var flag = 10;

do {  console.log(flag);
flag--;} while(flag>10)


try {  new error("에러")
} catch (error){  console.log("에러 발생")
console.log(error);}

finally
{console.log("무조건 실행")
}

var multiply = fuction calc (a, b ){ return a*b;};
console.log(MULTIPLY(10,5));
CONSOLE.LOG(CALC(10,5));

CONST STUDENT = { GRADE:1, CLASS:3};

STUDENT = { NUM:20123, GRADE:2}
CONSOLE.LOG(STUDENT);

LET MYFUNC = () =>  {RETURN 1;}

CONSOLE.LOG(MYFUNC());

VAR EL = DOCUMENT.GETELEMENTBYID9('BRAND-TITLE');
CONSOLE.LOG(EL);

CONSOLE.LOG(EL.INNERHTMLA);
CONSOLE.LOGA(EL.INNERTEXT);

EL.INNERTEXT = "안녕하세요 ㅋ"

VAR EL = DOCUMENT.GETELEMENTBYCLASSNAME()

CONSOLE.LOG(EL);

VAR EL = DOCUMENT.GETELEMENTBYID('BRAND-TITLE')

VAR MYFUNC = FUNCTION(){alert('ADDEVENTLISINER');};

EL.DAAEVENTLISTINER('CLICK', MYFUNC)



LET EL = DOCUMENT.GETELEMENTBYID('BIRTHDAY')
LET ELRESULT = DOCUMENT.GETELEMENTBYID('RESULT')
LET ELSUDMIT.GETELEMENTBYID('SUBMIT')

CONST TODAY = NEW Date();

FUNCTION CALCULATEAGE();
LET BITHDATE = NEW DATE(EL.VALUE);
LET AGE;
IF (TODAY.GETMONTH() > BIRTHDAYDATE.GETMONTH()&&
(TODAY.GETDATE() >= BITHDATE.GETDATABASE()))
{aGE = TODAY.GETFULLYEAR() - BIRTHDAYDAT.GETFULLYEAR;}
ELSE{aGE = TODAY.GETFULLYEAR() - BIRTHDAYDAT.GETFULLYEAR -1;}



ELRESULT.INNERTEXT = '귀하의 만 나이는 ${AGE}입니다.'
RETURN AGE;

ELSUBMIT.ADDEVENTLISTINER("CLICK, CALCULATEAGE")


