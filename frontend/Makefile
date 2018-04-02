# vim:set ts=4 fenc=utf-8:
#

INET = $(shell $ ip -f inet -o addr show eth1|cut -d\  -f 7 | cut -d/ -f 1)

init:
	cd src/ && npm install
	sed -i -e "s/ionicons\/dist\/css\/ionicons\.css/ionicons\/css\/ionicons\.css/" src/.angular-cli.json

local:
	cd src && ../../node_modules/@angular/cli/bin/ng serve --host $(INET)
