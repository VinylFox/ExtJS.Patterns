/**
 * A template/pattern to use as a base for writing a method interceptor.
 * 
 * The intercept method allows us to append a function to run before the specified 
 * method. The function we provide is executed in the same scope as the method
 * we are attaching it to. 
 * 
 * @author Shea Frederick
 * @param prototype {Object} the prototype of the class were working with
 * @param method {String} the method in the class were intercepting
 * @param fn {Function} the function to execute. Any arguments passed to the intercepted 
 * method can be defined and accessed in this function as well.
 */
Ext.intercept(/*CLASS*/.prototype, /*'METHOD'*/, function(/*ARGUMENTS*/) {
	/*DO IT!*/
});

// Working Example #1
Ext.intercept(Ext.form.Field.prototype, 'initComponent', function() {
	var fl = this.fieldLabel, ab = this.allowBlank;
	if (ab === false && fl) {
		this.fieldLabel = '<span style="color:red;">*</span> '+fl;
	} else if (ab === true && fl) {
		this.fieldLabel = '&nbsp; '+fl;
	}
});