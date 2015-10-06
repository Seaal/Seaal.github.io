(function() {
	'use strict';
	
	angular
		.module("seaal")
		.factory("validationService", validationService);

	function validationService() {

		var inputData;
		var fieldName;
		var errorMessages = [];
		
	    return {
	        input: input,
			result: result,
			required: required,
			maxLength: maxLength
		};
		
		function input(data, name) {
			inputData = data;
			fieldName = name;
			errorMessages = [];
			
			return this;
		}
		
		function required() {
			if(!inputData) {
				errorMessages.push("Your " + fieldName + " cannot be empty!");
			}
			
			return this;
		}
		
		function maxLength(length, type) {
			if(inputData.length < length) {
				errorMessages.push("Your " + fieldName + " cannot be exceed " + length + " " + type + "!");
			}
			
			return this;
		}
		
		function result() {
			return {
				valid: errorMessages.length > 0,
				errorMessages: errorMessages
			}
		}
		
	}
})();