// var first_Name = 'john';
// console.log(first_Name);
// var lastName= 'smoith';
// var age= 28;
// var fullage= true;
// console.log(fullage);
// var job;
// console.log(job);

// var job= 'teacher';
// console.log(age);
// // var function= 23


// var first_Name= 'john';
// var age= 23;
// console.log(first_Name +" "+ age);
// var job,married;
// job='teacher';
// married= false;
// console.log(first_Name +' is '+age+ 
// 	' year of old an he is a '+ job+' , is married?'+married);

// age='twenty eight';
// job='driver';
// // alert(first_Name +' is '+age+ 
// // 	' year of old an he is a '+ job+' , is married?'+ married);
// var lastName = prompt("what is your lastName");
// console.log(first_Name+' '+lastName);
// var now= 2018;
// var yearjohn=1989;
// var fullage=18;

// var final= now- yearjohn>=fullage;
// console.log(final);

// var x,y;
// x=y=(3+5)*4-6;
// console.log(x, y);

// var mmass,jmass,mheight,jheight,BMImark,BMIjohn;
// mmask=78;
// mheight=1.69;
// jmass= 92;
// jheight=1.92;
// BMImark= mmask/(mheight*mheight);
// BMIjohn=jmass/(jheight*jheight);
// console.log("mark bmi is"+BMImark+' '+'john bmi is'+' '+ BMIjohn);
// var markheighrBMI= BMImark>BMIjohn;
// console.log("is mark\'s BMi > john\'s ?: "+markheighrBMI)
// var firstNmae='john';
// var status='single';
// if(status==='married'){
// 	console.log(firstNmae+" is married");
// }
// else{
// 	console.log(firstNmae+" is hopefully married soon")
// }

// var ismarried =true;
// if(ismarried){
// 	console.log(firstNmae+" is married");
// }
// else{
// 	console.log(firstNmae+" is hopefully married soon")
// }

// var mmass,jmass,mheight,jheight,BMImark,BMIjohn;
// mmask=78;
// mheight=1.69;
// jmass= 92;
// jheight=1.92;
// BMImark= mmask/(mheight*mheight);
// console.log("mark\'s bmi "+ BMImark)
// BMIjohn=jmass/(jheight*jheight);
// console.log("john\'s bmi "+BMIjohn)
// if (BMImark>BMIjohn){
// 	console.log("marks\'s is heigher than jhon")
// }else{
// 	console.log("john\'s is hiegher")
//
// console.log("mark bmi is"+BMImark+' '+'john bmi is'+' '+ BMIjohn);
// var markheighrBMI= BMImark>BMIjohn;
// console.log("is mark\'s BMi > john\'s ?: "+markheighrBMI)

// var firstNmae="vishak";
// var age=prompt("age");
// if(age<13)
// {
// 	console.log(firstNmae +" is a boy");

// }
// else if(age>=13 && age<20)
// {
// 	console.log(firstNmae+ " is a tenager");
// }
// else if(age>=20  && age<30){
// 	console.log(firstNmae+" is a young man")
// }
// else
// {
// 	console.log(firstNmae+" is a man");
// }
// var  firstNmae="john";
// var age=25;
// age>=18? console.log("he can drink beer"):console.log("he can\'t drink beer")
// var drink= age>=18? 'ber': 'juice'
// console.log(drink)

// var job =prompt("enter u r job");
// switch(job){
// 	case 'teacher':
// 	case 'kili':
// 		console.log(firstNmae+" teaches kid how to code");
// 		break;
// 		case 'driver':
// 		console.log(firstNmae+" teaches kid how to drive");
// 		break;
// 		case 'designer':
// 		console.log(firstNmae+ " teaches kid how to design");
// 		break;
// 		default:
// 		console.log(firstNmae+" does something else");

	// }

// var height = 23;
// if(height=='23'){
// 	console.log("true");
// // // }
// var dob= function (birthyear){
// 	return 2020-birthyear;
// }
// var age1= dob(1995);
// var age2= dob(2000);
// var age3= dob(1990);
// console.log(dob(1998));


// function yearsuntillretire(vayass,first_Name,lastName)
// {
// 	var age= dob(vayass);
// 	console.log(age);
// 	var retirement=65-age;
// 	console.log(retirement)
// 	if (retirement>0){
// 		console.log(first_Name+' ' +lastName+' retires in '+retirement+'years')
// 	}else{
// 			console.log(first_Name+' ' +lastName+' already retires')

// 	}

// }
// yearsuntillretire(1990,'john','honnauy');
// yearsuntillretire(1930,'mary','honnauy');

// yearsuntillretire(1970,'mathew','honnauy');

// var whatjob = function(job,first_Name){
// 	switch(job){
// 		case 'teacher':
// 		return first_Name+ " teaches to code";

// 		case 'driver':
// 		return first_Name+ " teaches to drive";

// 		case 'designer':
// 		return first_Name+ " teaches to design";
// 		default:
// 		return first_Name+ " try something else";

// 	}
// }

// console.log(whatjob("teacher","john"))
// console.log(typeof 23)


// var names = ["john",'mark','jane'];
// var years = new Array(1990,1969,1948);
// console.log(names[2]);
// console.log(names.length);
// names[1]='vishak';
// names[5]='vishak';
// console.log(names);


// var john=['john','smith',1999,'teacher',false];
// john.unshift('Mr')
// console.log(john)
// john.pop()
// john.pop()
// console.log(john);
// john.shift()
// console.log(john)

// console.log(john.indexOf(false));
// var design =john.indexOf('designer')===-1? 'john is not a designer': 'john is a designer';
// console.log(design)

// var tipcalculator= function (bill){
// 	var pecentage;
// 	if (bill<50){
// 		pecentage=.2;
// 	}else if (bill>=50 && bill<200) {
// 		pecentage=.15;
// 	}else{
// 		pecentage=.1
// 	}
// 	return pecentage * bill;
// }
// // console.log(tipcalculator(40));
// var bills=[124,48,268];
// var tips=[tipcalculator(bills[0]),tipcalculator(bills[1]),tipcalculator(bills[2])];
// var final=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
// console.log(tips,final);
// // console.log(tipcalculator(124))

// var john={ firstname: 'john',
// 			lastname:'smith',
// 			birthyear: 1990,
// 			family:('jane','mark','bob','emily'),
// 			job:'teacher',
// 			status: false
// 		};

// console.log(john.firstname);
// console.log(john['lastname']);
// var x='job';
// console.log(john[x])
// john.job='designer';
// john['status']= true;
// console.log(john.job)
// console.log(john.status)
// console.log(john)

// var jane = new Object();
// jane.firstname ='jane';
// jane.birthyear=1969;
// jane.lastname='smith';
// console.log(jane);

// var john={ firstname: 'john',
// 			lastname:'smith',
// 			birthyear: 1998,
// 			family:('jane','mark','bob','emily'),
// 			job:'teacher',
// 			status: false,
// 			calcage: function(){
// 				this.age= 2020-this.birthyear;
// 				return this.age;
// 			}
// 		};

// john.calcage();
// console.log(john);


// var john={ 
// 	fullname:"john smith",
// 	mass:92,
// 	height:1.95,
// 	calbmi: function(){
// 		this.bmi=this.mass/(this.height* this.height);
// 		return this.bmi;
// 	}
// }

// var mark={ 
// 	fullname:"mark miller",
// 	mass:78,
// 	height:1.69,
// 	calbmi:function(){
// 		this.bmi=this.mass/(this.height* this.height);
// 		return this.bmi;
// 	}
// }

// john.calbmi();
// mark.calbmi();
// console.log(john,mark);

// if (john.bmi> mark.bmi){
// 	console.log(john.fullname+ " has a higher bmi of " +john.bmi);}
// 	else if (mark.bmi> john.bmi){
// 	console.log(mark.fullname+ " has a higher bmi of " +mark.bmi);
// 	}else{
// 	console.log("they have the same bmi")
// }
// var i;
// for(i=0;i<=10;i+=2){
// console.log(i)
// }
//  var john=['john','smith',1999,'teacher',false];
//  for(var i=0; i<john.length; i++){
//  	console.log(john[i])
//  // }
//  var i=0;
//  while(i < john.length){
//  	console.log(john[i]);
//  	i++;
// }
 // var john=['john','smith',1999,'teacher',false];
 // for(var i=0; i<john.length; i++)
 // {
 // 	if(typeof john[i]!== "string")
 // 	{
 // 		break;
 // 	}
 // 	console.log(john[i])
 // }

// var john = {
//     fullName: 'John Smith',
//     bills: [124, 48, 268, 180, 42],
//     calcTips: function() {
//         this.tips = [];
//         this.finalValues = [];
                
//         for (var i = 0; i < this.bills.length; i++) {
//             // Determine percentage based on tipping rules
//             var percentage;
//             var bill = this.bills[i];
            
//             if (bill < 50) {
//                 percentage = .2;
//             } else if (bill >= 50 && bill < 200) {
//                 percentage = .15;
//             } else {
//                 percentage = .1;
//             }
            
//             // Add results to the corresponing arrays
//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;
//         }
//     }
// }

// var mark = {
//     fullName: 'Mark Miller',
//     bills: [77, 475, 110, 45],
//     calcTips: function() {
//         this.tips = [];
//         this.finalValues = [];
                
//         for (var i = 0; i < this.bills.length; i++) {
//             // Determine percentage based on tipping rules
//             var percentage;
//             var bill = this.bills[i];
            
//             if (bill < 100) {
//                 percentage = .2;
//             } else if (bill >= 100 && bill < 300) {
//                 percentage = .1;
//             } else {
//                 percentage = .25;
//             }
            
//             // Add results to the corresponing arrays
//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;
//         }
//     }
// }

// function calcAverage(tips) {
//     var sum = 0;
//     for (var i = 0; i < tips.length; i++) {
//         sum = sum + tips[i];
//     }
//     return sum / tips.length;
// }

// // Do the calculations
// john.calcTips();
// mark.calcTips();

// john.average = calcAverage(john.tips);
// mark.average = calcAverage(mark.tips);
// console.log(john,mark);
// if (john.average>mark.average){
// 	console.log(john.fullName+" \'s family pays higher tips with an average of "+ john.average);
// }else if (mark.average>john.average){
// 	console.log(mark.fullName+" \'s family pays higher tips with an average of "+mark.average);
// }
retirement(1990)

var retirement = function(year){
	console.log(65-(2016-year))
}


















































































































