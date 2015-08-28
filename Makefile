make:
	grunt

view:
	jade -o ./ -w views/*.jade

view-pretty:
	jade -o ./ -w views/*.jade --pretty

style:
	stylus -u nib -c -w -o css/ styls/*.styl

info:
	@echo make view
	@echo make style
	@echo make
