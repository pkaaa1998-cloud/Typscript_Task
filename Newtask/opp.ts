//----------------------------task 1---------------------------------------//

class Employe{
  work():void{console.log("Empioye working");
 }
 }
class Developer extends Employe{
  work():void{
    console.log("Developer write code");
  }
}
class Tester extends Employe{
  work(): void {console.log("Tester testing code");
  }
}
class Manager extends Employe{
  work(): void {
    console.log("Manager accepted the code");
  }
}
let developer1=new Developer();
let tester1=new Tester();
let manager1=new Manager();
developer1.work();
tester1.work();
manager1.work(); 

//-----------------------task 2------------------------------//

class Employes {
  empName:string="praveen";
  display():void{
    console.log(this.empName);
  }
  }
  class Developer1 extends Employes{
    writecode():void{
      console.log("developer write code");
    }
  }
  class Tester1 extends Employes{
    testcode():void{
      console.log("tester test the code");
    }
  }
  class Manager1 extends Employes{
    approvalcode():void{
      console.log("manager approval the code");
    }
  }

let developer=new Developer1();
let tester=new Tester1();
let manager=new Manager1();
developer.display();
developer.writecode();
tester.testcode();
manager.approvalcode(); 