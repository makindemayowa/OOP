(function(){
	'use strict'	
	var oop = require("../app/oop.js")
	var Car = oop.Car;
	var SmartCar = oop.SmartCar;  	
	var Truck = oop.Truck; 

	describe ("Car class: create a car, make it drive and ", function(){
		it("The car should be an instance of the 'Car' class and of 'object' type ", function(){
			var spider = new Car("Toyota", "Spider","Silver",2015);
			expect(typeof spider).toEqual(typeof []);
			expect(spider instanceof Car).toBeTruthy();
		});
		it("The car should return a cocatenation of its make and model as its name", function(){
			var spider = new Car("Toyota", "Spider","Silver",2015);
			expect(spider.getName()).toEqual("Toyota Spider");
		});
		it("A Truck should have 10 wheels ", function(){
			var myTruck = new Truck("Mack", "Tipper","Ash",2010);
			expect(myTruck.getWheels()).toEqual(10);
		});
		it("A SmartCar should have 4 wheels ", function(){
			var myvar = new SmartCar("Mack", "Tipper","Ash",2017);
			expect(myvar.getWheels()).toEqual(4);
		});
		it("The car's make, model, color and year should all be members of its property", function(){
			var spider = new Car("Toyota", "Spider","Silver",2015);
			expect(spider.make).toBe("Toyota");
			expect(spider.model).toBe("Spider");
			expect(spider.color).toBe("Silver");
			expect(spider.year).toBe(2015);
		});
		it("The car's color property should change if resprayed to a different color", function(){
			var spider = new Car("Toyota", "Spider","Silver",2015);
			spider.respray("Black")
			expect(spider.color).toBe("Black");
		});
	});
	describe("Test the speed functionality", function() {
		it("The car should not move unless the engine is first started", function(){
			var spider = new Car ("Toyota", "Avalon", "Silver",2015);
			expect(spider.accelerate()).toBe("Start engine before driving");
		});
		it("The car should tell if the driver is too fast or slow if the speedCheck function is called ", function(){
			var venza = new SmartCar ("Toyota", "Venza", "White", 2016);
			expect(venza.speedCheck()).toBe("Too Fast!!!");
		});		

	});
})();