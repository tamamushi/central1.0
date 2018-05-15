# vim:set ts=4 fenc=utf-8:
#

REPO = /etc/yum.repos.d/epel-apache-maven.repo
SUGET = sudo wget
SUYUM = sudo yum

SWAGGERDIR = ./tools/swagger-codegen
SWCODEGEN  = $(SWAGGERDIR)/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar
APACHEMVN  = /usr/bin/mvn

ifdef eth
	INET = $(shell $ ip -f inet -o addr show ${eth} |cut -d\  -f 7 | cut -d/ -f 1)
else
	INET = $(shell $ ip -f inet -o addr show eth1 |cut -d\  -f 7 | cut -d/ -f 1)
endif

init:
	cd src/ && npm install

local:
	cd src && ../../node_modules/@angular/cli/bin/ng serve --host $(INET)

$(APACHEMVN):
	if $(SUYUM) list installed | grep apache-maven > /dev/null; then echo ""; else \
		$(SUGET) http://repos.fedorapeople.org/repos/dchen/apache-maven/epel-apache-maven.repo -O $(REPO); \
		$(SUGET) -i s/\$releasever/6/g $(REPO); \
		$(SUYUM) install -y apache-maven; \
	fi

$(SWCODEGEN): $(APACHEMVN)
	if [ ! -d $(SWAGGERDIR) ]; then git clone https://github.com/swagger-api/swagger-codegen $(SWAGGERDIR); fi
	cd $(SWAGGERDIR) && mvn clean package

install-swagger-codegen: $(SWCODEGEN)

