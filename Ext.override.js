/**
 * A template/pattern to use as a base for writing an override.
 * 
 * The override method allows us to overwrite existing methods in the library
 * with our own code. 
 * 
 * @author Shea Frederick
 * @param class {Object} the class were working with
 * @param methods {Object} an object with the method(s) in the class were overriding 
 */
Ext.override(/*CLASS*/, /*METHODS OBJECT*/{
    /*METHOD NAME*/:function(){
        /*DO IT!*/
    },
    /*ANOTHER METHOD NAME*/:function(){
        /*DO IT MORE!*/
    }
});

// Working Example #1
Ext.override(Ext.Window, {
    beforeShow : function(){
	    delete this.el.lastXY;
	    delete this.el.lastLT;
	    if(this.x === undefined || this.y === undefined){
    		var xy = this.el.getAlignToXY(this.container, 'c-c'),
    		    pos = this.el.translatePoints(xy[0], xy[1]);
	    	if(this.position === 'cascade'){
	    		this.x = Ext.winPosx = (Ext.winPosx)? Ext.winPosx+20 : pos.left;
	    		this.y = Ext.winPosy = (Ext.winPosy)? Ext.winPosy+20 : pos.top;	    		
	    	}else{
	    		this.x = this.x === undefined? pos.left : this.x;
	    		this.y = this.y === undefined? pos.top : this.y;
	    	}
	    }
	    this.el.setLeftTop(this.x, this.y);
	
	    if(this.expandOnShow){
	        this.expand(false);
	    }
	
	    if(this.modal){
	        Ext.getBody().addClass('x-body-masked');
	        this.mask.setSize(Ext.lib.Dom.getViewWidth(true), Ext.lib.Dom.getViewHeight(true));
	        this.mask.show();
	    }
	}
});