# vim:set ts=4 fenc=utf-8:
#
ifdef eth
	INET = $(shell $ ip -f inet -o addr show ${eth} |cut -d\  -f 7 | cut -d/ -f 1)
else
	INET = $(shell $ ip -f inet -o addr show eth1 |cut -d\  -f 7 | cut -d/ -f 1)
endif

init:
	cd src/ && npm install

local:
	cd src && ../../node_modules/@angular/cli/bin/ng serve --host $(INET)
