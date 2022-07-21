//abstract class, no instance instantiate
abstract class Department {
    //static property
    static fiscalYear = 2022;

    protected employees: string[] = [];
    constructor(protected readonly id: string, public name: string) {
    }

    static createEmployee(name: string) {
        return { name: name }
    }

    //abstract method, no implemention
    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    describeEmployee() {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }

    //having implementation details in child class, based on the abstract method
    describe() {
        console.log("Department ID: " + this.id)
    }
}

const employee1 = Department.createEmployee("Max Manu");
console.log(employee1, Department.fiscalYear)

const it = new ITDepartment("d1", ["helpDesk", "Data"])
it.describe();
it.addEmployee("Jerry")
it.addEmployee("tom")

it.describeEmployee();

console.log(it)

class AccountingDepartment extends Department {
    private lastReport: string;
    //private (Only within class), static (access only through class)
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport
        }
        throw new Error("NO REPORTS FOUND")
    }

    describe() {
        console.log("Department ID: " + this.id);
    }

    set mostRecentReport(value: string) {
        if (!value) {
            return
        }
        this.addReport(value);
    }
    //private constructor for singleton, instance cannot access it, only class can access
    private constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
        this.lastReport = reports[0];
    }

    //static allows us to access class based method and properties
    static getInstance() {
        if (this.instance) {
            return this.instance
        }
        this.instance = new AccountingDepartment("D2", [])
        return this.instance;
    }



    addEmployee(name: string) {
        this.employees.push(name)
    }

    addReport(reportName: string) {
        this.reports.push(reportName)
        this.lastReport = reportName;
    }

    printReports() {
        console.log(this.reports)
    }
}

const accounting = AccountingDepartment.getInstance();
console.log(accounting)
//calling setter function without ()
accounting.mostRecentReport = "salary wrong...";
accounting.addReport("bonus wrong...")
//calling getter function without ()
console.log(accounting.mostRecentReport)
accounting.printReports();
accounting.addEmployee("Manu");
accounting.describeEmployee();

