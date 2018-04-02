# vim:set ts=4 fenc=utf-8:

init: init-subdir
	npm install
	if [ -f .python-version ]; then \
		pip install -r requirements.txt; \
	fi

init-subdir:
	cd frontend && make init
