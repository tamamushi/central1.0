# vim:set ts=4 fenc=utf-8:

SUGET	= sudo wget
SUYUM	= sudo yum
TOOLS	= ./tools
TAPE	= tape

APACHEMVN		= /usr/bin/mvn
MVN_REPO		= /etc/yum.repos.d/epel-apache-maven.repo
MVN_REPO_URL	= http://repos.fedorapeople.org/repos/dchen/apache-maven/epel-apache-maven.repo 
OPENJDKDIR		= /usr/lib/jvm/jre-1.8.0-openjdk.x86_64
OPENJDK			= java-1.8.0-openjdk
OPENJDKDIR		= /usr/lib/jvm/java-1.8.0-openjdk.x86_64/jre
JAVA_HOME		= /usr/share/java/default

SWAGGERDIR		= $(TOOLS)/.swagger-codegen
SWCODEGEN		= $(SWAGGERDIR)/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar
MOCKSERVDIR		= $(TOOLS)/.mock-server/nodejs
MOCKSERVER		= $(MOCKSERVDIR)/index.js

ifdef eth
	INET = $(shell $ ip -f inet -o addr show ${eth} |cut -d\  -f 7 | cut -d/ -f 1)
else
	INET = $(shell $ ip -f inet -o addr show eth1 |cut -d\  -f 7 | cut -d/ -f 1)
endif

ifdef env
	ENV = ${env}
else
	ENV = dev
endif

init: init-env init-app

init-app: 
	cd src/ && npm install

angular2-logger-adjust:
	## angular ver5 以上でangular2-loggerを使う際、app/core内のtsファイルを削除
	## しないと、コンパイルが通らない問題に対する応急処置のタスク
	@if [ $(shell cd src/ &&  \
		../node_modules/\@angular/cli/bin/ng --version | \
		grep 'Angular:' | \
		awk '{print substr($$0, index($$0, " "), 2)}' | tr -d ' ') -ge 5 ]; then \
		rm -rf src/node_modules/angular2-logger/app/core/*.ts; \
	fi

init-env:
	npm install
	cd src/ && npm link ../$(TOOLS)/ngdoc-style

api-server:
	@if [ -f /tmp/.mockserver.pid ];then \
		kill $(shell cat /tmp/.mockserver.pid); \
	fi
	@if [ -f /tmp/.tape.pid ]; then \
		kill $(shell cat /tmp/.tape.pid); \
	fi
	@node $(MOCKSERVER)	& echo "$$!" > /tmp/.mockserver.pid
	@$(TAPE) -c ../backend/taperc & echo "$$!" > /tmp/.tape.pid

local: 
	cd src && ../../node_modules/@angular/cli/bin/ng serve --host $(INET) -e ${ENV}

install-swagger-codegen: $(SWCODEGEN)
install-mock: $(MOCKSERVER)

$(OPENJDKDIR):
	@echo "$(OPENJDK) checked..."
	@if $(SUYUM) list installed | grep "$(OPENJDK)-devel" > /dev/null; then :; else \
		$(SUYUM) install -y $(OPENJDK)-devel; \
	fi
	@if $(SUYUM) list installed | grep "$(OPENJDK)" > /dev/null; then :; else \
		$(SUYUM) install -y $(OPENJDK); \
	fi
	@if [ ! -d $(JAVA_HOME) ]; then sudo ln -s $(OPENJDKDIR) $(JAVA_HOME); fi
	@if cat ~/.bash_profile | grep 'JAVA_HOME=$(JAVA_HOME)' > /dev/null; \
	then :; else echo 'export JAVA_HOME=$(JAVA_HOME)' >> ~/.bash_profile; fi
	@if cat ~/.bash_profile | grep '/opt/apache-maven/bin' > /dev/null; \
	then :; else echo 'export PATH=$$PATH:/opt/apache-maven/bin' >> ~/.bash_profile; fi
	@source ~/.bash_profile

$(APACHEMVN): $(OPENJDKDIR)
	@echo "$(APACHEMVN) checked..."
	@if $(SUYUM) list installed | grep apache-maven > /dev/null; then :; else \
		$(SUGET) $(MVN_REPO_URL) -O $(MVN_REPO); \
		$(SUGET) -i s/\$releasever/6/g $(REPO); \
		$(SUYUM) install -y apache-maven; \
	fi

$(SWCODEGEN): $(APACHEMVN)
	@if [ ! -d $(SWAGGERDIR) ]; then git clone https://github.com/swagger-api/swagger-codegen $(SWAGGERDIR); fi
	@cd $(SWAGGERDIR) && mvn clean package

$(MOCKSERVER): $(SWCODEGEN) ../backend/sample-api.yml
	@echo "Generate lcaol mock nodejs server...."
	java -jar $(SWCODEGEN) generate -i ../backend/sample-api.yml -l nodejs-server -o $(MOCKSERVDIR)
	@cd $(MOCKSERVDIR); sed -i -e '/dependencies/a \    "cors": "^2.8.4",' package.json; npm install; \
	sed -i -e "/require('connect')/a var cors = require('cors');" index.js; \
	sed -i -e "/swaggerTools.initializeMiddleware/a app.use(cors());" index.js;
	

