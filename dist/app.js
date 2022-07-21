"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//abstract class, no instance instantiate
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.describeEmployee = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    //static property
    Department.fiscalYear = 2022;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    //having implementation details in child class, based on the abstract method
    ITDepartment.prototype.describe = function () {
        console.log("Department ID: " + this.id);
    };
    return ITDepartment;
}(Department));
var employee1 = Department.createEmployee("Max Manu");
console.log(employee1, Department.fiscalYear);
var it = new ITDepartment("d1", ["helpDesk", "Data"]);
it.describe();
it.addEmployee("Jerry");
it.addEmployee("tom");
it.describeEmployee();
console.log(it);
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    //private constructor for singleton, instance cannot access it, only class can access
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("NO REPORTS FOUND");
        },
        set: function (value) {
            if (!value) {
                return;
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.describe = function () {
        console.log("Department ID: " + this.id);
    };
    //static allows us to access class based method and properties
    AccountingDepartment.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("D2", []);
        return this.instance;
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReport = function (reportName) {
        this.reports.push(reportName);
        this.lastReport = reportName;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var accounting = AccountingDepartment.getInstance();
console.log(accounting);
//calling setter function without ()
accounting.mostRecentReport = "salary wrong...";
accounting.addReport("bonus wrong...");
//calling getter function without ()
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee("Manu");
accounting.describeEmployee();
