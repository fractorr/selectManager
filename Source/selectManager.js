/*
---
description: Manage and Sort items between 2 select boxes

license: MIT-style

authors:
- Trevor Orr

provides: [selectManager]

...
*/

var selectManager = new Class({
    Implements: [Options],	
    
    options: {
        src: null,
        dst: null,
        max: 0,
        
        addBtn: null,
        removeBtn: null,
        upBtn: null,
        downBtn: null
    },
    
    initialize: function(options) {
        var self = this;
        
        this.setOptions(options);
        
        self.options.addBtn.addEvent('click', function() {
            self.options.src.getSelected().each(function(el) {
                if (!self.options.max || self.options.dst.length < self.options.max) {
                    el.inject(self.options.dst);
                }
            });
        }); 

        self.options.removeBtn.addEvent('click', function() {             
            self.options.dst.getSelected().each(function(el) {         
                el.inject(self.options.src);                       
            });                                                        
        });                                                            

        self.options.upBtn.addEvent('click', function() {
            self.options.dst.getSelected().each(function(el) {
                self.moveOptionUp(el);
            });
        });                                                            

        self.options.downBtn.addEvent('click', function() {
            self.options.dst.getSelected().reverse().each(function(el) {
                self.moveOptionDown(el);
            });
        });                                                            
    },

    moveOptionDown: function(opt) {
        var el = $(opt).clone();
        el.set('id', $(opt).get('id'));
        
        if ($(opt).getNext()) {
            var swap = $(opt).getNext().clone();
            swap.set('id', $(opt).getNext().get('id'));
            
            el.replaces($(opt).getNext());
            swap.replaces($(opt));
        }
    },
    
    moveOptionUp: function(opt) {
        var el = $(opt).clone();
        el.set('id', $(opt).get('id'));
        
        if ($(opt).getPrevious()) {
            var swap = $(opt).getPrevious().clone();
            swap.set('id', $(opt).getPrevious().get('id'));
            
            el.replaces($(opt).getPrevious());
            swap.replaces($(opt));
        }
    }    
});	