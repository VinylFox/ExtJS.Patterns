/**
 * A template/pattern to use as a base for writing a method sequence.
 * 
 * The sequence method allows us to append a function to run after the specified 
 * method. The function we provide is executed in the same scope as the method
 * we are attaching it to. 
 * 
 * @author Shea Frederick
 * @param prototype {Object} the prototype of the class were working with
 * @param method {String} the method in the class were sequencing
 * @param fn {Function} the function to execute. Any arguments passed to the sequenced 
 * method can be defined and accessed in this function as well.
 */
Ext.sequence(/*CLASS*/.prototype, /*METHOD*/, function(/*ARGUMENTS*/) {
	/*DO IT!*/
});

// Working Example #1
Ext.sequence(Ext.form.Field.prototype, 'initComponent', function() {
	if (this.allowBlank === false && this.fieldLabel) {
		this.fieldLabel = '<span style="color:red;">*</span> '+this.fieldLabel;
	} else if (this.allowBlank === true && this.fieldLabel) {
		this.fieldLabel = '&nbsp; '+this.fieldLabel;
	}
});