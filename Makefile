make:
	grunt

view:
	jade -o ./ -w views/*.jade

style:
	stylus -u nib -c -w -o css/ styls/*.styl

info:
	@echo make view
	@echo make style
	@echo make