describe('Boxer JS modal', function() {
	beforeEach(function() {
		$.fx.off = true;		
		loadFixtures('boxer.html')
	})
	
	it('should init modal', function() {
		var bjs = new Boxer;
		bjs.setBackground('.my-background')
		bjs.setContent('.my-content');
		expect(bjs.getBackground().isVisible()).toBe(false);				
		expect(bjs.getBackground().el()).not.toBe(false);
	})
	
	it('should open modal by direct call', function() {
		var bjs = new Boxer;
		bjs.setBackground('.my-background');
		bjs.setContent('.my-content');
		bjs.show()
		expect(bjs.getBackground().isVisible()).toBe(true);		
		expect(bjs.isVisible()).toBe(true);
	})
	
	it('should close modal by direct call', function() {
		var bjs = new Boxer;
		bjs.setBackground('.my-background');
		bjs.setContent('.my-content')
		expect(bjs.getBackground().isVisible()).toBe(false);		
		bjs.show()
		bjs.hide();
		expect(bjs.isVisible()).toBe(false);
	})
	
	it('should open modal by click event bidding', function() {
		var bjs = new Boxer;
		bjs.setBackground('.my-background');
		bjs.setContent('.my-content');
		expect(bjs.getBackground().isVisible()).toBe(false);	
		bjs.enableClickEvents();
		$('.my-modal-link').trigger('click');
		expect(bjs.isVisible()).toBe(true);
	})
	
	it('should close modal by click event bidding', function() {
		var bjs = new Boxer;
		bjs.setBackground('.my-background');
		bjs.setContent('.my-content');
		bjs.show()
		expect(bjs.isVisible()).toBe(true);
		bjs.enableClickEvents();		
		$('.my-modal-link-close').trigger('click');
		expect(bjs.isVisible()).toBe(false);	
	});
	
	it('should hide modal with click when closeable is true', function()  {
		var bjs = new Boxer;		
		bjs.setBackground('.my-background')
		bjs.setContent('.my-content')
		bjs.getBackground().closeable();		
		expect($('.my-background')).not.toBeVisible();
		expect($('.my-content')).not.toBeVisible();		
		bjs.show()
		expect($('.my-background')).toBeVisible();
		expect($('.my-content')).toBeVisible();
		$('.my-background').trigger('click');
		expect($('.my-background')).not.toBeVisible();
		expect($('.my-content')).not.toBeVisible();
	})
	
	it('should not hide modal when closeable is true and user click at the content area', function() {
		var bjs = new Boxer;
		bjs.setBackground('.my-background');
		bjs.setContent('.my-content')
		bjs.show();
		expect(bjs.isVisible()).toBe(true);
		bjs.getBackground().closeable();
		$('.my-content').trigger('click');
		expect(bjs.isVisible()).toBe(true);
	});
	
	it('should allow callback for when boxer finishes hiding event', function() {
		var bjs = new Boxer;
		bjs.setBackground('.my-background');
		bjs.setContent('.my-content')
		bjs.show();
		
		callback_called = 0;
		var cb = function() {
			callback_called = 1;
		}
		bjs.hide(cb);
		
		expect(callback_called).toBe(1)
	})
	
	it('should allow callback for when boxer finishes show event', function() {
		var bjs = new Boxer;
		bjs.setBackground('.my-background');
		bjs.setContent('.my-content')
		
		callback_called = 0;
		var cb = function() {
			callback_called = 1;
		}
		bjs.show(cb);
		
		expect(callback_called).toBe(1)
	})	
})