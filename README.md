selectManager
=============

Manage and Sort items between 2 select boxes


How to use
----------

The js code :

        #js
	    var sm = new selectManager({
	        src: $('All'),
	        dst: $('Featured'),
	        max: 4,
	        
	        addBtn: $('add'),
	        removeBtn: $('remove'),
	        upBtn: $('up'),
	        downBtn: $('down')
		    });

The html code :

        #html
		<div style="float: left; clear: none;">
			All<br>
			<select name="All" id="All" size="8" multiple="multiple">
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
				<option value="3">Option 3</option>
				<option value="4">Option 4</option>
			</select>
		</div>
	
		<div style="float: left; clear: none; margin-top: 21px;">
	        <input type="button" id="add" value="Add" />
			<br>
			<input type="button" id="remove" value="Remove" />
		</div>
				
		<div style="float: left; clear: none;">
			Selected<br>
			<select name="Featured" id="Featured" size="8" multiple="multiple">
				<option value="5">Option 5</option>
				<option value="6">Option 6</option>
			</select>
		</div>
	
		<div style="float: left; clear: none; margin-top: 21px;">
	        <input type="button" id="up" value="Move Up" />
			<br>
	        <input type="button" id="down" value="Move Down" />
		</div>
