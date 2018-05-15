# vim:set ts=4 fenc=utf-8:
#

REPO = /etc/yum.repos.d/epel-apache-maven.repo
SUGET = sudo wget
SUYUM = sudo yum

SWAGGERDIR = ./tools/swagger-codegen
SWCODEGEN  = $(SWAGGERDIR)/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar
APACHEMVN  = /usr/bin/mvn
OPENJDKDIR = /usr/lib/jvm/jre-1.8.0-openjdk.x86_64
OPENJDK    = java-1.8.0-openjdk
JAVA_HOME  = /usr/share/java/default

ifdef eth
	INET = $(shell $ ip -f inet -o addr show ${eth} |cut -d\  -f 7 | cut -d/ -f 1)
else
	INET = $(shell $ ip -f inet -o addr show eth1 |cut -d\  -f 7 | cut -d/ -f 1)
endif

init: init-env init-app

init-app:
	cd src/ && npm install

init-env:
	npm install

local:
	cd src && ../../node_modules/@angular/cli/bin/ng serve --host $(INET)

$(APACHEMVN):
	echo "$(APACHEMVN) checked..."
	@if $(SUYUM) list installed | grep apache-maven > /dev/null; then echo :; else \
		$(SUGET) http://repos.fedorapeople.org/repos/dchen/apache-maven/epel-apache-maven.repo -O $(REPO); \
		$(SUGET) -i s/\$releasever/6/g $(REPO); \
		$(SUYUM) install -y apache-maven; \
	fi

OPENJDK:
	echo "$(OPENJDK) checked..."
	@if $(SUYUM) list installed | grep "$(OPENJDK)" > /dev/null; then :; else \
		$(SUYUM) install -y $(OPENJDK) $(OPENJDK)-devel; \
	fi

MAKE_APACHEMVN_ENV:
	echo "Building apache maven environment...."
	@if [ ! -d $(JAVA_HOME) ]; then sudo ln -s $(OPENJDKDIR) $(JAVA_HOME); fi
	@if cat ~/.bash_profile | grep 'JAVA_HOME=$(JAVA_HOME)' > /dev/null; \
	then :; else echo 'export JAVA_HOME=$(JAVA_HOME)' >> ~/.bash_profile; fi
	@if cat ~/.bash_profile | grep '/opt/apache-maven/bin' > /dev/null; \
	then :; else echo 'export PATH=$$PATH:/opt/apache-maven/bin' >> ~/.bash_profile; fi
	@source ~/.bash_profile

$(SWCODEGEN): OPENJDK MAKE_APACHEMVN_ENV $(APACHEMVN)
	if [ ! -d $(SWAGGERDIR) ]; then git clone https://github.com/swagger-api/swagger-codegen $(SWAGGERDIR); fi
	cd $(SWAGGERDIR) && mvn clean package

install-swagger-codegen: $(SWCODEGEN)

swagger:
	cd $(SWAGGERDIR); \
	java -jar modules/swagger-codegen-cli/target/swagger-cli.jar generate -i hoge.yml \
	-l nodejs-server -o ../.mock-server/nodejs/
