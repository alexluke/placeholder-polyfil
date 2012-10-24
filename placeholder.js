/*
 * jQuery placeholder polyfil
 * https://github.com/banduin/placeholder-polyfil
 *
 * Copyright (c) 2012 Alex Luke
 * MIT Licensed
 */
;(function($) {
	$(function() {
		$('input[placeholder]').each(function() {
			var $this = $(this);
			var ph = $this.prop('placeholder');
			if (ph != '' && $this.val() == '') {
				$this.val(ph);
				$this.addClass('placeholder');
				$this.focus(function() {
					if ($(this).val() == ph) {
						$(this).val('');
						$(this).removeClass('placeholder');
					}
				});
				$this.blur(function() {
					if ($(this).val() == '') {
						$(this).val(ph);
						$(this).addClass('placeholder');
					}
				});
			}
		});
		// Clear out placeholder values before submission
		$('form:has(input[placeholder])').submit(function() {
			$('input[placeholder]', this).each(function() {
				var $this = $(this);
				var ph = $this.prop('placeholder');
				if (ph != '' && $this.val() == ph)
					$this.val('');
			});
		});
	});
})(jQuery);
