(function() {

	var BoxerBackground = function(element, mapping) {
		var _element = element;
		var _mapping = mapping;
		
		var init = function(el) {
			_element = $(el);
		}
		
		var el = function() {
			if(_element) {
				return _element;
			}

			return false;
		}	
		
		var isVisible = function() {
			return _element.is(':visible');
		}
		
		var closeable = function() {
			var _el = _element;
			
			_element.bind('click', function(e) {
				_mapping.hide();	
			})
		}
		
		init(element, mapping);
		
		return {
			el:el,
			isVisible:isVisible,
			closeable:closeable
		}
	}
	
	var BoxerContent = function(element, mapping)  {
		var _element;		
		
		var init = function(el) {
			_element = $(el);
		}
		
		var el = function() {
			if(_element) {
				return _element;
			}

			return false;
		}	
		
		var isVisible = function() {
			return _element.is(':visible');
		}
		
		init(element, mapping);
		
		return {
			el:el,
			isVisible:isVisible
		}
	}

	var Boxer = function(el_background) {
		var _boxer_background;
		var _boxer_content;
		
		var setBackground = function(el_background) {
			_boxer_background = new BoxerBackground(el_background, this);
			return _boxer_background;
		}
		
		var getBackground = function() {
			if(_boxer_background) {
				return _boxer_background;
			}
			
			return false;
		}
		
		var init = function() {
			
		}
		
		var setContent = function(el_content) {
			_boxer_content = new BoxerContent(el_content, this);
			return _boxer_content;
		}
		
		var getContent = function() {
			if(_boxer_content) {
				return _boxer_content;
			}
			
			return false;
		}	
		
		var show = function(callback) {
			var cb = callback || function(){};
			_boxer_background.el().fadeIn();
			_boxer_content.el().fadeIn(400, cb);
		}
		
		var hide = function(callback) {		
			var cb = callback || function(){};
			_boxer_background.el().fadeOut();
			_boxer_content.el().fadeOut(400, cb);			
		} 
		
		var isVisible = function() {
			if(_boxer_background.isVisible() && _boxer_content.isVisible()) {
				return true;
			}
			if(!_boxer_background.isVisible() && !_boxer_content.isVisible()) {
				return false;
			}
		
			// something wrong happened
			return null;
		}
		
		var enableClickEvents = function() {
			var self = this;
			
			$('*[data-boxer-show]').bind('click', function(e) {
				var el_content = $(this).data('boxer-show')
				show(el_content);
			});
			
			$('*[data-boxer-hide]').bind('click', function(e) {
				self.hide();
			});
		}	
		
		init();
		
		return {
			init:init,
			show:show,
			hide:hide,			
			isVisible:isVisible,
			enableClickEvents:enableClickEvents,
			getBackground:getBackground,
			getContent:getContent,
			setBackground:setBackground,
			setContent:setContent
		}
	}
	
	window.Boxer = Boxer;
	
}).call(this)