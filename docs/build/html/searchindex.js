Search.setIndex({"docnames": ["000-OFEP-template", "001-OFEP-cloud-native-pattern", "002-OFEP-kubecon-demo", "003-OFEP-CUE-upstream", "004-OFEP-kubernetes-sync-service", "005-OFEP-provider-hook", "006-OFEP-flagd-sockets", "007-OFEP-flag-change-events", "008-OFEP-provider-flag-metadata", "009-OFEP-add-dispose", "010-OFEP-flagd-grpc-sync", "011-OFEP-transaction-context-propagation", "012-OFEP-inline-evaluation", "013-OFEP-ofo-flag-service", "014-OFEP-ofo-flagd-client-support", "015-OFEP-provider-client-mapping", "016-OFEP-provider-metadata-capability-discovery", "017-OFEP-single-context-paradigm", "OFEP_Index", "README", "index", "ofep_docs"], "filenames": ["000-OFEP-template.md", "001-OFEP-cloud-native-pattern.md", "002-OFEP-kubecon-demo.md", "003-OFEP-CUE-upstream.md", "004-OFEP-kubernetes-sync-service.md", "005-OFEP-provider-hook.md", "006-OFEP-flagd-sockets.md", "007-OFEP-flag-change-events.md", "008-OFEP-provider-flag-metadata.md", "009-OFEP-add-dispose.md", "010-OFEP-flagd-grpc-sync.md", "011-OFEP-transaction-context-propagation.md", "012-OFEP-inline-evaluation.md", "013-OFEP-ofo-flag-service.md", "014-OFEP-ofo-flagd-client-support.md", "015-OFEP-provider-client-mapping.md", "016-OFEP-provider-metadata-capability-discovery.md", "017-OFEP-single-context-paradigm.md", "OFEP_Index.md", "README.md", "index.rst", "ofep_docs.rst"], "titles": ["NAME", "001-OFEP-cloud-native-pattern.md", "002-OFEP-kubecon-demo", "003-OFEP-CUE-upstream", "004-OFEP-inotfiy-interface", "005-OFEP-provider-hook.md", "NAME", "007-OFEP-flag-change-events", "OFEP-007: Surfacing flag metadata", "Add dispose functionality to API", "OFEP: Add gRPC sync support to flagd", "Transaction Context Propagation", "Inline Evaluation of Flag Rules", "flag service deployment driven by OpenFeature Operator", "flagd client support driven by OpenFeature Operator", "Provider to client mapping", "OFEP-provider-metadata-capability-discovery", "OFEP-single-context-paradigm", "OFEP Index", "Open Feature Enhancement Proposals", "Welcome to OFEP-TESTING\u2019s documentation!", "&lt;no title&gt;"], "terms": {"The": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "ofep": [0, 6, 9, 11, 12, 13, 14, 15, 19], "begin": 0, "brief": 0, "overview": 0, "thi": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19], "should": [0, 1, 4, 5, 7, 8, 11, 12, 15, 17], "one": [0, 1, 5, 8, 14, 15, 17], "two": [0, 1, 3, 8], "paragraph": 0, "just": [0, 1], "explain": 0, "what": [0, 8, 15, 16], "goal": [0, 9, 13, 15, 20], "i": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "go": [0, 1, 6, 10, 11, 12], "without": [0, 7, 8, 17], "dive": 0, "too": 0, "deepli": 0, "why": 0, "now": [0, 3, 17], "how": [0, 1, 6, 7, 11], "etc": 0, "ensur": 0, "anyon": 0, "open": [0, 1, 2, 4, 7, 8, 10, 13, 16, 20, 21], "document": [0, 4, 5, 19], "form": 0, "clear": 0, "understand": [0, 8, 12, 17], "intent": [0, 12], "from": [0, 1, 3, 4, 7, 8, 10, 12, 14, 16, 19], "read": [0, 2], "": [0, 1, 3, 5, 7, 10, 11, 12, 13, 14, 16, 17], "next": [0, 3, 11], "least": 0, "can": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17], "take": [0, 12, 15, 17], "up": [0, 1, 4, 8, 12, 17], "whole": 0, "page": [0, 7], "some": [0, 1, 2, 3, 7, 8, 9, 11, 16, 17], "case": [0, 1, 7, 9, 10, 12, 15, 17, 20], "guid": [0, 10], "newcom": 0, "project": [0, 1, 2, 19], "new": [0, 1, 3, 6, 7, 11, 12, 14, 15, 17, 19], "employe": 0, "team": [0, 15], "transfer": 0, "follow": [0, 1, 2, 5, 6, 8, 9, 10, 13, 14, 16, 19], "ani": [0, 1, 3, 5, 7, 8, 9, 10, 11, 13], "link": [0, 10], "get": [0, 1, 4, 9, 12, 13], "full": [0, 6], "context": [0, 1, 4, 7, 8, 12, 14, 16, 20, 21], "chang": [0, 1, 4, 10, 16, 20, 21], "necessari": [0, 14], "If": [0, 3, 5, 15], "you": [0, 1, 2, 9], "t": [0, 1, 6, 7, 8, 9, 11, 15, 16, 17], "show": [0, 6], "random": 0, "engin": [0, 1], "have": [0, 1, 2, 3, 5, 7, 8, 9, 10, 15, 17], "them": [0, 1, 2], "acquir": 0, "nearli": 0, "necess": 0, "rfc": 0, "enough": 0, "To": [0, 1, 9, 12, 15, 17], "help": [0, 1], "achiev": [0, 13], "prior": 0, "discuss": [0, 1, 4, 19], "more": [0, 4, 5, 10, 14], "here": [0, 1, 3, 4, 11, 12, 14], "provid": [0, 1, 7, 8, 9, 10, 11, 13, 20, 21], "so": [0, 1, 8, 13, 17], "don": [0, 7, 15], "simpli": [0, 7], "repeat": 0, "yourself": 0, "requir": [0, 1, 2, 3, 4, 5, 6, 12, 13, 14], "given": [0, 1, 3, 7, 12, 15, 17], "abov": 0, "solut": [0, 7, 10, 11, 12, 13, 14, 16], "an": [0, 1, 5, 6, 7, 8, 11, 12, 13, 14, 16, 17], "detail": 0, "further": [0, 1, 3, 10], "us": [0, 1, 2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20], "point": [0, 3, 11, 15, 19], "onward": 0, "header": 0, "ar": [0, 1, 3, 6, 7, 8, 10, 11, 12, 14, 15, 16, 17], "gener": [0, 3, 5, 7, 8], "freeform": 0, "depend": 0, "style": 0, "head": 0, "2": [0, 15, 18], "try": 0, "organ": 0, "your": [0, 1, 12], "inform": [0, 1, 4], "self": 0, "contain": [0, 1, 7, 11, 13, 14], "answer": [0, 12], "critic": 0, "question": [0, 16], "order": [0, 9, 16, 20], "build": [0, 2, 3], "knowledg": 0, "rather": [0, 1], "than": [0, 1, 6, 7, 15], "forc": [0, 1, 13], "reader": 0, "jump": 0, "around": [0, 1, 6, 8], "gain": 0, "often": [0, 4, 6, 12], "split": 0, "sub": 0, "3": [0, 18], "These": [0, 1], "data": [0, 7, 10, 11, 12], "eas": [0, 3], "mani": [0, 1, 3, 8, 11, 14], "which": [0, 1, 8, 12, 15, 16, 17, 19], "work": [0, 11, 15, 19, 20], "rough": 0, "api": [0, 1, 4, 5, 7, 11, 14, 17, 20, 21], "intern": [0, 9, 13], "extern": [0, 1, 13, 14], "packag": 0, "give": [0, 1, 10], "idea": [0, 1], "about": [0, 1, 3, 8], "subsystem": [0, 7], "surfac": [0, 20, 21], "area": 0, "those": [0, 7, 8, 17], "result": [0, 14], "recommend": 0, "altern": [0, 1, 14, 17], "approach": [0, 6, 10], "perhap": [0, 1, 14], "idiomat": 0, "less": [0, 7, 17], "touch": [0, 1], "Or": 0, "mai": [0, 4, 5, 7, 8, 9, 10, 11, 12, 15, 16, 17], "realiz": 0, "complex": [0, 1, 10], "problem": [0, 1], "For": [0, 1, 3, 5, 8, 10, 11, 16], "author": [0, 1, 7, 9, 10, 12, 13, 15, 16, 17, 18], "type": [0, 1, 3, 4, 7, 8, 10, 11, 17], "out": [0, 1, 2, 8, 11], "high": [0, 12, 20], "level": [0, 1, 2, 3, 7, 17], "serv": [0, 1, 19], "rubber": 0, "duck": 0, "debug": [0, 9], "catch": 0, "lot": [0, 1], "issu": [0, 1, 4, 19], "unknown": [0, 14], "write": [0, 1, 2, 6], "real": [0, 2, 4, 10], "code": [0, 3, 6, 12, 15], "hello": 1, "folk": 1, "want": [1, 3, 4, 5, 8], "share": [1, 4], "thought": 1, "initi": [1, 3, 5, 7], "design": [1, 20], "featur": [1, 2, 4, 5, 7, 8, 10, 13, 14, 16, 17, 20, 21], "kubernet": [1, 4, 12, 13, 14, 19], "layer": [1, 6], "my": [1, 3, 7, 15], "engag": 1, "involv": [1, 17, 20], "group": 1, "primarili": 1, "focus": 1, "server": [1, 3, 4, 7, 10, 12, 14, 17], "side": [1, 2, 12, 13, 14, 17], "capabl": [1, 20, 21], "present": [1, 3, 6, 13], "flag": [1, 2, 4, 5, 10, 11, 14, 15, 16, 17, 20, 21], "workload": [1, 14], "we": [1, 2, 3, 4, 6, 7, 8, 12, 15, 17, 19], "assum": 1, "sort": [1, 3, 15], "web": [1, 7, 12, 14, 17], "howev": [1, 11], "would": [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 14], "like": [1, 8, 9, 11, 14, 17, 19], "incorpor": 1, "support": [1, 3, 4, 5, 6, 7, 8, 12, 15, 16, 17, 20, 21], "local": [1, 11], "af_unix": 1, "socket": [1, 6], "process": [1, 3, 11], "control": [1, 2, 7, 13], "base": [1, 2, 5, 7, 10, 11, 15, 17], "end": [1, 20], "also": [1, 2, 4, 6, 8, 9, 14, 19], "much": [1, 19], "our": 1, "overarch": 1, "narr": 1, "abil": [1, 7, 11], "A": [1, 5, 7, 8, 9, 14], "b": [1, 3, 5], "test": [1, 5, 6, 15], "consid": [1, 8, 10, 17], "logic": [1, 5], "event": [1, 4, 5, 9, 10, 12, 16, 20, 21], "activ": [1, 17, 20], "horizont": 1, "pod": [1, 4, 6, 13, 14], "autosc": 1, "exampl": [1, 2, 3, 7, 8, 10, 11, 14, 20], "In": [1, 7, 8, 9, 10, 11, 13, 17], "illustr": [1, 6], "creat": [1, 3, 4, 5, 6, 8, 13, 14, 19], "latter": [1, 8], "flask": 1, "public": [1, 12], "internet": 1, "system": [1, 5, 7, 10, 13], "programm": 1, "world": 1, "wide": 1, "At": [1, 3, 5, 15], "time": [1, 4, 5, 10, 11], "me": 1, "seem": 1, "illog": 1, "need": [1, 2, 3, 4, 5, 7, 9, 15, 17], "worri": 1, "rbac": 1, "acl": 1, "tl": [1, 6, 10], "concern": [1, 14], "when": [1, 6, 7, 9, 11, 12, 15, 17, 19], "make": [1, 7, 12, 15, 16], "highli": 1, "sensit": 1, "avail": [1, 16], "typic": [1, 4, 11, 17], "appropri": [1, 4, 12], "over": [1, 4, 6], "alon": [1, 4], "servic": [1, 3, 4, 7, 11, 12, 14, 17, 20, 21], "previous": 1, "mention": 1, "reason": [1, 7, 9, 11, 13, 14], "becaus": [1, 3, 12], "stateless": [1, 10], "scalabl": 1, "natur": [1, 8, 14, 15], "multi": [1, 4], "tenant": 1, "environ": 1, "constrain": 1, "namespac": [1, 4, 8, 13], "account": [1, 12], "someth": [1, 7, 17], "overcom": 1, "centralis": 1, "cluster": [1, 4, 14], "feel": 1, "factor": 1, "easi": [1, 3], "augment": [1, 11], "suggest": [1, 8], "conjunct": 1, "reconcili": 1, "primari": 1, "custom": [1, 4, 13, 14], "resourc": [1, 4, 9, 13, 14], "mutat": [1, 11, 13], "valid": [1, 2, 3, 17], "admiss": [1, 2], "webhook": 1, "enabl": [1, 3, 4, 6, 9, 10, 15, 19], "kei": [1, 2, 7, 8], "function": [1, 6, 7, 16, 20, 21], "nutshel": 1, "pet": 1, "name": [1, 7, 9, 13, 15, 16, 20, 21], "combin": [1, 2], "cover": [1, 11], "major": 1, "rapidli": 1, "usabl": 1, "thei": [1, 4, 8, 15, 17], "fairli": [1, 17], "well": [1, 17], "trodden": 1, "interact": 1, "label": [1, 4], "annot": [1, 4], "am": [1, 10], "undecid": 1, "current": [1, 3, 4, 9, 10, 11, 13, 17], "penalti": 1, "size": [1, 10], "yaml": [1, 3], "file": [1, 3, 6, 15], "store": [1, 11, 12, 15], "larg": [1, 15], "histori": 1, "directli": [1, 3], "refer": [1, 4], "object": [1, 17], "doe": [1, 5], "openfeatur": [1, 2, 5, 7, 9, 11, 12, 15, 16, 17, 20, 21], "io": [1, 4, 13], "standingord": 1, "1": [1, 15, 18], "deploy": [1, 4, 14, 20, 21], "encapsul": 1, "where": [1, 8, 11], "deriv": [1, 3, 10], "its": [1, 2, 4, 7, 13, 14], "owner": [1, 8], "referenc": 1, "map": [1, 20, 21], "agent": [1, 11], "trivial": [1, 12, 14], "onc": [1, 11], "ha": [1, 7, 8, 12, 13, 14, 17], "been": [1, 14, 17], "run": [1, 4, 5, 7, 11], "emploi": 1, "option": [1, 4, 5, 6, 7, 8, 10, 15, 16, 17], "scope": [1, 8, 11, 12, 13, 14], "purpos": [1, 4], "inlin": [1, 20, 21], "json": [1, 3], "manifest": 1, "encod": 1, "might": [1, 4, 8, 9], "remark": 1, "authorit": 1, "sourc": [1, 3, 4, 7], "refresh": [1, 4], "job": [1, 4], "after": [1, 5], "compon": [1, 3, 13, 16], "inject": [1, 4, 14], "complet": 1, "setup": [1, 12], "host": 1, "desir": 1, "within": [1, 4, 6, 11, 13, 14], "deal": 1, "port": 1, "transport": [1, 6], "path": [1, 6, 8, 14, 15], "locat": 1, "possibli": 1, "expand": [1, 3, 10], "back": [1, 12, 13], "pvc": 1, "v": [1, 6, 10], "configmap": [1, 4], "scenario": [1, 2, 8], "being": [1, 4, 8, 14], "alter": 1, "modifi": [1, 17], "micro": 1, "confd": 1, "supplementari": 1, "coexist": 1, "same": [1, 6, 11, 13], "ecosystem": 1, "necessarili": 1, "immedi": [1, 5], "associ": [1, 7], "applic": [1, 2, 5, 6, 7, 8, 13, 14, 15, 16, 17], "It": [1, 4, 6, 17, 19], "possibl": [1, 3, 6, 10, 14, 17], "fetch": [1, 4, 12, 17], "import": [1, 7, 16], "known": [1, 12], "persist": 1, "program": 1, "encourag": 1, "subscrib": [1, 4, 7], "mechan": [1, 4, 8, 10, 11, 12, 17], "look": [1, 3, 4, 7, 11], "default": [1, 5, 15], "argument": [1, 4], "against": [1, 2, 3, 4, 17], "believ": [1, 2, 4], "wa": [1, 13, 17], "discourag": 1, "other": [1, 5, 15, 17], "intract": 1, "secondari": 1, "wider": 1, "laid": 1, "few": 1, "kept": 1, "memori": 1, "bad": 1, "especi": [1, 15], "attempt": [1, 7], "backend": 1, "think": [1, 4], "disk": 1, "isn": [1, 11, 15], "singl": [1, 3, 10, 11, 15, 20, 21], "nest": 1, "construct": 1, "invers": 1, "number": [1, 8, 18], "could": [1, 2, 3, 4, 7, 8, 9, 11, 14, 15], "compens": 1, "distribut": 1, "per": [1, 3, 4, 17], "expens": 1, "orphan": 1, "format": [1, 8, 20], "compound": 1, "all": [1, 3, 4, 7, 10, 11, 17], "access": [1, 8, 13, 14, 17], "both": [1, 2], "plane": 1, "overlai": 1, "network": [1, 14, 17], "There": [1, 6, 14], "risk": 1, "turn": [1, 2, 5], "off": [1, 2, 5, 9], "someon": [1, 8], "els": 1, "mean": [1, 3, 14, 15], "machineri": [1, 6], "built": 1, "do": [1, 5, 17], "check": 1, "permiss": [1, 6, 14], "As": [1, 3, 5, 8, 16], "see": [1, 7, 8, 14], "invit": 1, "reinvent": 1, "wheel": 1, "call": [1, 9, 11, 12, 15, 17], "increas": 1, "neither": 1, "immun": 1, "distanc": 1, "across": 1, "node": [1, 9, 11], "unless": [1, 4], "separ": [1, 17], "fail": 1, "restart": [1, 7], "start": [1, 4, 6, 17], "behaviour": 1, "introduc": [1, 6, 10, 11, 12, 13, 14, 15], "failur": [1, 4], "hold": 1, "true": [1, 12, 16], "let": 1, "know": 1, "had": 1, "meet": 1, "improv": [1, 10, 17], "accommod": 1, "vendor": [1, 9], "concept": [1, 11, 20], "allow": [1, 2, 3, 5, 6, 7, 8, 9, 10, 13, 15, 17], "indic": [1, 7], "instig": 1, "merg": 1, "overrid": [1, 5, 11, 12], "field": [1, 8], "remoteflagprovid": 1, "implement": [1, 3, 5, 7, 10, 12, 17], "strategi": 1, "credenti": 1, "secret": [1, 4], "consum": [1, 7, 8, 9], "sidecar": [1, 4, 12, 13, 14], "multipl": [1, 11, 17], "protocol": [1, 3], "propos": [1, 2, 3, 4, 7, 10, 20, 21], "af_loc": 1, "famili": 1, "decid": [1, 2, 5], "whether": [1, 2, 3, 12], "sock_stream": 1, "sock_dgram": 1, "onli": [1, 4, 10, 15], "u": [1, 3, 7, 8], "http": [1, 3, 7, 10, 16], "top": [1, 3, 10], "below": [1, 7, 11, 14], "updat": [1, 7, 10, 13, 17, 20], "reflect": 1, "initialis": 1, "That": [1, 12], "said": 1, "learn": 1, "istio": 1, "car": 1, "overhead": [1, 10], "upgrad": 1, "mainten": 1, "worth": [1, 4], "explor": [1, 4], "roll": 1, "implic": 1, "rollout": 1, "due": [1, 14], "st": 1, "d": [1, 12], "realli": 2, "good": 2, "client": [2, 3, 4, 5, 7, 10, 11, 12, 13, 17, 20, 21], "develop": [2, 5, 11], "infrastructur": [2, 14], "sever": 2, "technologi": [2, 11], "veri": 2, "compel": 2, "oper": [2, 4, 5, 7, 8, 15, 17, 20, 21], "flagd": [2, 3, 4, 6, 7, 12, 13, 15, 20, 21], "sigstor": 2, "cosign": 2, "cue": [2, 20, 21], "imag": 2, "potenti": [2, 9, 14], "spun": 2, "eventu": 2, "tie": 2, "configur": [2, 4, 7, 10, 13, 14, 15, 17, 20], "sign": 2, "comment": 2, "welcom": 2, "ievalu": 2, "extend": [2, 4, 7, 8, 9, 14, 16, 17], "featureflag": 2, "integr": [2, 3, 7, 8], "evalu": [2, 4, 5, 7, 8, 11, 17, 20, 21], "includ": [2, 9, 11, 16], "evolv": [3, 16], "differ": [3, 8, 15], "varieti": [3, 14], "librari": [3, 9, 15], "conveni": [3, 11], "openapi": 3, "golang": [3, 4, 6, 11], "great": [3, 15], "fast": 3, "match": [3, 10, 12, 14], "specif": [3, 4, 5, 7, 10, 11, 16, 18], "promis": [3, 9, 17], "exactli": 3, "free": [3, 15], "offer": [3, 12], "grpc": [3, 6, 20, 21], "predica": 3, "truth": [3, 7], "proto": 3, "c": [3, 4], "composit": 3, "between": [3, 10, 11, 14], "choos": [3, 5, 15], "dsl": 3, "defin": [3, 5, 7, 10, 11, 12, 13, 16, 17], "drive": [3, 13], "protobuf": 3, "toolchain": 3, "automat": [3, 5, 7, 11], "benefit": [3, 6, 8, 14, 20], "contribut": 3, "extens": [3, 5, 13], "simplifi": [3, 13, 14], "By": 3, "switch": 3, "chain": 3, "produc": 3, "spec": [3, 8, 18], "user": [3, 5, 7, 11, 14, 15, 17, 20], "who": 3, "own": [3, 4], "though": [3, 17], "through": [3, 4, 6, 10, 15, 19], "instead": 3, "protoc": 3, "tool": 3, "jame": 3, "milligan": 3, "investig": 3, "step": [3, 5], "agreement": [3, 14], "replac": 3, "abl": [3, 4, 8, 9, 15, 16], "prove": 3, "becom": [3, 17], "downstream": 3, "deploi": 4, "ofo": [4, 13, 14], "companion": 4, "volum": 4, "via": [4, 14], "optim": 4, "wai": [4, 7, 8, 9, 11, 15, 17], "faster": [4, 6], "notifi": 4, "inspir": 4, "therealmitchconnor": 4, "regress": 4, "trigger": 4, "reload": [4, 7], "silverbullet": 4, "academ": 4, "move": 4, "direct": [4, 20], "speed": 4, "sync": [4, 20, 21], "token": 4, "mount": 4, "var": [4, 15], "serviceaccount": 4, "request": [4, 9, 11, 12, 14, 17, 19], "watch": [4, 13], "featureflagconfigur": 4, "determin": [4, 12, 15], "perform": [4, 7, 10, 17, 20], "compat": 4, "isync": [4, 10], "ctx": 4, "string": [4, 7, 8, 17], "error": [4, 5, 7], "chan": 4, "inotifi": 4, "factori": 4, "rest": 4, "queue": 4, "workqueu": 4, "newratelimitingqueu": 4, "defaultcontrollerratelimit": 4, "labelset": 4, "set": [4, 7, 8, 12, 15, 20], "labelmap": 4, "optionsmodifi": 4, "func": 4, "meta_v1": 4, "listopt": 4, "labelselector": 4, "selectorfromset": 4, "config": [4, 15], "informerfactori": 4, "informerfor": 4, "batch_v1": 4, "resyncperiod": 4, "durat": 4, "cach": [4, 17], "sharedindexinform": 4, "return": [4, 6, 8, 11, 12], "newsharedindexinform": 4, "newfilteredlistwatchfromcli": 4, "batchv1": 4, "restclient": 4, "index": [4, 20, 21], "namespaceindex": 4, "metanamespaceindexfunc": 4, "sharedinform": 4, "re": 4, "loop": 4, "list": [4, 13], "hundr": 4, "Near": 4, "describ": [4, 8, 13, 15, 16], "lai": [4, 8], "foundat": 4, "previou": [4, 11, 13], "deep": 4, "mode": 4, "delet": [4, 10, 13], "addit": [4, 6, 10, 17, 20], "load": [4, 7, 13], "tightli": 4, "coupl": 4, "bind": 4, "limit": [4, 13, 15, 20], "arch": 4, "part": 5, "manag": [5, 7, 8, 10, 11, 13, 14, 20], "systen": 5, "standard": [5, 8], "variou": [5, 12], "stage": [5, 14], "interfac": [5, 6, 7, 9, 10, 17, 20, 21], "transpar": 5, "certain": [5, 16], "behavior": [5, 7], "relev": 5, "x": [5, 6, 10, 11], "add": [5, 7, 8, 16, 17, 20, 21], "experiment": [5, 14, 19], "basic": [5, 10], "target": 5, "audienc": 5, "henc": 5, "aspect": 5, "success": 5, "each": 5, "befor": [5, 7, 11, 15], "publish": 5, "later": 5, "extra": 5, "regist": [5, 7, 9, 16], "setprovid": [5, 7, 12, 15], "e": [5, 8, 10, 11, 12, 13, 14], "g": [5, 8, 11, 12, 13, 14], "invoc": [5, 11], "sdk": [5, 7, 9, 16, 17, 18], "hint": 5, "execut": [5, 14, 17], "final": 5, "talk": 6, "anoth": [6, 11, 12], "far": 6, "unix": 6, "tcp": 6, "ip": [6, 11], "stack": 6, "term": 6, "ownership": 6, "outlin": [6, 14, 17], "net": 6, "conn": 6, "exemplifi": 6, "underli": 6, "err": 6, "dialunix": 6, "nil": 6, "proc": 6, "sock": 6, "dial": 6, "server_fil": 6, "withinsecur": 6, "withdial": 6, "unixconnect": 6, "log": [6, 7, 16], "fatal": 6, "did": 6, "connect": [6, 10], "defer": 6, "close": 6, "alreadi": [6, 7, 12, 13, 14, 15, 17], "ipc": 6, "grpc_servic": 6, "servesocket": 6, "method": [6, 7, 12, 17], "facilit": [6, 9, 14], "note": [6, 8, 10, 11, 13, 14, 17], "wouldn": 6, "paramet": [6, 17], "modifii": 6, "exist": [6, 7, 10, 14, 17], "http_servic": 6, "leverag": [6, 11], "similar": [6, 7, 9, 10, 11], "listen": [7, 10, 14], "valu": [7, 8, 11, 12], "launchdarkli": 7, "cloudbe": 7, "paradigm": [7, 9, 20, 21], "app": [7, 12, 14, 15, 17], "characterist": 7, "aren": [7, 9], "ti": 7, "action": 7, "imper": 7, "ideal": 7, "framework": 7, "react": [7, 10], "callback": [7, 11], "uncommon": 7, "readi": [7, 12], "dure": [7, 11], "banner": 7, "color": 7, "global": [7, 9, 11, 15, 17], "handler": [7, 9, 16], "providerev": [7, 16], "maintain": [7, 8, 10], "emit": [7, 12], "happen": [7, 11], "invok": 7, "eventdata": 7, "aforement": 7, "respons": [7, 11], "One": 7, "dynam": 7, "sinc": [7, 8], "driven": [7, 20, 21], "consist": 7, "eventingprovid": 7, "class": [7, 11, 12, 16], "myeventingprovid": 7, "readonli": [7, 16], "metadata": [7, 13, 20, 21], "const": 7, "fire": 7, "eventemitt": 7, "polldatasourc": 7, "conceptu": 7, "newflagdata": 7, "configurationchang": 7, "getclient": [7, 15], "addhandl": 7, "undefin": 7, "flagkeyschang": 7, "myflagd": 7, "onmyflagchang": 7, "onanychang": 7, "hypothet": 7, "enumer": 7, "export": [7, 17], "enum": 7, "provider_readi": 7, "provider_error": 7, "provider_configuration_chang": 7, "shutdown": 7, "provider_shutdown": 7, "structur": [7, 8], "changemetadata": 7, "boolean": [7, 8, 17], "attach": 7, "occurr": 7, "particularli": 7, "Such": 7, "model": [7, 17], "angular": 7, "Not": 7, "subscript": 7, "never": 7, "ve": 7, "partial": 7, "address": [7, 12, 15], "github": [7, 10, 16], "com": [7, 10, 16], "pull": [7, 10, 16, 19], "36": 7, "cancel": 7, "30": 7, "j": [7, 16], "usag": 7, "arbitrari": 8, "hook": [8, 11, 20, 21], "url": [8, 10], "attribut": 8, "telemetri": 8, "otel": 8, "span": 8, "view": 8, "trace": 8, "easili": [8, 17], "navig": 8, "webpag": 8, "expos": [8, 14, 17], "kind": [8, 13], "simpl": [8, 14], "runtim": [8, 11], "pass": [8, 17], "itself": 8, "semant": 8, "futur": [8, 14], "wish": 8, "common": [8, 13, 14], "amongst": 8, "expir": 8, "date": 8, "agnost": 8, "explicitli": [8, 11], "NOT": 8, "prefer": 8, "emerg": 8, "pave": 8, "cow": 8, "bag": 8, "pair": 8, "small": 8, "primit": 8, "strawman": 8, "pleas": [8, 19], "poke": 8, "hole": 8, "flagmetadata": 8, "resolut": 8, "therefor": 8, "former": 8, "specifi": [8, 9], "subset": 8, "record": 8, "typescript": [8, 17], "empti": 8, "miss": 8, "must": [8, 10, 17], "interpret": 8, "immut": 8, "won": [8, 9], "ad": [8, 11], "remov": 8, "edit": 8, "left": 8, "mayb": 8, "prefix": 8, "r": 8, "convent": 8, "smart": 8, "enhanc": [9, 20, 21], "cleanli": 9, "sometim": 9, "timer": 9, "correctli": 9, "handl": 9, "analyt": 9, "flush": 9, "platform": 9, "stop": 9, "clean": 9, "cleanup": 9, "synchron": 9, "asynchron": 9, "practic": 9, "languag": [9, 11, 12], "idiom": 9, "dictat": 9, "precis": 9, "non": [9, 12, 20], "break": 9, "void": [9, 11, 17], "instanc": [9, 12, 16], "async": [9, 11], "await": 9, "act": 10, "remot": 10, "But": 10, "beyond": 10, "period": 10, "util": [10, 11], "stream": 10, "receiv": 10, "push": 10, "perfectli": 10, "schema": 10, "contract": 10, "come": [10, 15, 19], "reduc": 10, "payload": 10, "establish": [10, 14], "thank": 10, "live": 10, "main": [10, 15], "poc": 10, "297": 10, "minim": [10, 14], "offici": 10, "With": [10, 11], "affect": 11, "suppli": [11, 17], "id": 11, "auth": 11, "appli": 11, "thread": 11, "carrier": 11, "storag": 11, "child": 11, "proof": [11, 20], "opentelemetri": 11, "baggag": 11, "found": 11, "length": 11, "vari": 11, "java": 11, "threadloc": 11, "nativ": [11, 20, 21], "situat": 11, "benefici": 11, "async_hook": 11, "12": [11, 18], "17": [11, 18], "mark": 11, "stabl": 11, "16": [11, 18], "4": [11, 18], "asynclocalstoragetransactioncontext": 11, "transactioncontextmanag": 11, "privat": 11, "asynclocalstorag": 11, "evaluationcontext": [11, 17], "gettransactioncontext": 11, "getstor": 11, "settransactioncontext": 11, "settransactioncontextpropag": 11, "javascript": 11, "express": 11, "middlewar": 11, "req": 11, "_re": 11, "nextfunct": 11, "targetingkei": 11, "properti": [11, 16], "occur": [11, 17], "balanc": [11, 13], "inherit": 11, "flowchart": 11, "lr": 11, "seek": 12, "find": 12, "zero": 12, "latenc": [12, 15], "mobil": [12, 14], "todai": [12, 15], "most": [12, 17], "fals": [12, 15, 16], "even": 12, "accept": [12, 17], "scale": [12, 20], "comput": 12, "caller": 12, "outsid": 12, "lifecycl": 12, "startup": 12, "interv": 12, "basi": 12, "stock": 12, "ruleevaluatingprovid": 12, "getbooleanevalu": 12, "et": 12, "al": 12, "rulefetch": 12, "fetcher": 12, "download": 12, "until": [12, 14], "jsonlog": 12, "broad": 12, "myrulesprovid": 12, "convert": 12, "goe": 12, "getinst": [12, 15], "api_kei": 12, "append": 13, "pattern": [13, 14, 17, 20, 21], "therebi": 13, "rout": [13, 14], "campaign": 13, "abstract": 13, "behind": 13, "draft": [13, 17, 20], "subsequ": 13, "withdrawn": [13, 20], "recognis": 13, "modular": 13, "broader": 13, "flagservic": 13, "definit": [13, 14], "crd": [13, 14], "cr": 13, "permit": [13, 14], "ingress": [13, 14], "routabl": 13, "contrast": [13, 17], "minimum": 13, "apivers": 13, "k8": 13, "v1": 13, "role": 13, "creationtimestamp": 13, "null": 13, "rule": [13, 20, 21], "apigroup": 13, "verb": 13, "patch": 13, "restrict": 13, "feasibl": 14, "traffic": 14, "huge": 14, "cater": 14, "creep": 14, "reach": 14, "best": 14, "keep": 14, "thing": [14, 15], "crud": 14, "httprout": 14, "gatewai": 14, "secur": [14, 20], "still": 14, "beta": 14, "commun": 14, "inher": 14, "convers": 14, "bear": 14, "burden": 14, "ingest": 14, "place": [14, 17], "incom": 14, "grpcrout": 14, "diagram": 14, "depict": 14, "architectur": [14, 20], "insid": 14, "green": 14, "box": 14, "subdomain": 14, "kga": 14, "implementor": 14, "demonstr": 14, "select": 15, "singleton": 15, "solv": 15, "space": 15, "multiplexingprovid": 15, "n": 15, "sadli": 15, "fall": 15, "wast": 15, "addition": 15, "giant": 15, "pain": 15, "degre": 15, "flexibl": [15, 17], "particular": [15, 16], "pick": 15, "none": 15, "sweet": 15, "getbooleanvalu": [15, 17], "redesign": 15, "default_provid": 15, "flagdprovid": 15, "filebasedprovid": 15, "myfil": 15, "signal": [16, 17], "expect": 16, "25": 16, "denot": 16, "intellig": 16, "decis": 16, "warn": 16, "doesn": [16, 17], "somefeatur": 16, "someotherfeatur": 16, "somefeatureprovid": 16, "mind": 17, "summari": 17, "bulk": 17, "longer": 17, "reconcil": 17, "frequent": 17, "o": 17, "fit": 17, "emphas": 17, "realtim": 17, "conform": 17, "better": 17, "short": 17, "invalid": 17, "whatev": 17, "oncontextset": 17, "oldcontext": 17, "newcontext": 17, "while": 17, "resolv": 17, "stale": 17, "consequ": 17, "static": 17, "constructor": 17, "alwai": 17, "ergonom": 17, "retain": 17, "similarli": 17, "flagkei": 17, "defaultvalu": 17, "flagevaluationopt": 17, "getbooleandetail": 17, "evaluationdetail": 17, "correspond": 17, "unreason": 17, "imposs": 17, "cannot": 17, "flagvalu": 17, "hookcontext": 17, "beforehookcontext": 17, "hookhint": 17, "titl": 18, "tag": 18, "0": 18, "6": 18, "michael": 18, "beemer": 18, "david": 18, "hirsch": 18, "14": 18, "15": 18, "7": 18, "9": 18, "11": 18, "5": 18, "13": 18, "8": 18, "10": 18, "repositori": 19, "focal": 19, "research": 19, "creation": 19, "ideat": 19, "lineag": 19, "pep": 19, "kep": 19, "templat": 19, "discoveri": [20, 21], "state": 20, "approv": 20, "background": 20, "assumpt": 20, "001": [20, 21], "cloud": [20, 21], "md": [20, 21], "workflow": 20, "stand": 20, "post": 20, "kubecon": [20, 21], "flow": 20, "007": [20, 21], "caveat": 20, "demo": [20, 21], "004": [20, 21], "inotfii": [20, 21], "003": [20, 21], "upstream": [20, 21], "dispos": [20, 21], "reject": 20, "transact": [20, 21], "propag": [20, 21], "005": [20, 21], "pend": 20, "review": 20, "section": 20, "002": [20, 21], "takeawai": 20}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"name": [0, 6], "state": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "draft": [0, 3, 18], "withdrawn": [0, 14, 18], "pend": 0, "review": 0, "approv": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 16, 17, 18], "reject": [0, 12, 18], "background": [0, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "propos": [0, 6, 8, 9, 11, 12, 13, 14, 15, 16, 19], "section": 0, "exampl": [0, 5, 9, 15, 16], "implement": [0, 6, 9, 11, 15, 16], "001": 1, "ofep": [1, 2, 3, 4, 5, 7, 8, 10, 16, 17, 18, 20, 21], "cloud": 1, "nativ": 1, "pattern": 1, "md": [1, 5], "assumpt": [1, 5, 14], "oper": [1, 13, 14], "workflow": [1, 5], "direct": 1, "set": [1, 11, 17], "configur": 1, "reload": 1, "stand": 1, "order": [1, 5, 11], "high": 1, "scale": 1, "manag": 1, "secur": 1, "perform": 1, "addit": 1, "architectur": 1, "post": 1, "kubecon": [1, 2], "remot": 1, "endpoint": 1, "integr": 1, "point": 1, "flow": 1, "002": 2, "demo": [2, 7], "work": 2, "involv": 2, "end": 2, "user": 2, "takeawai": 2, "003": 3, "cue": 3, "upstream": 3, "004": 4, "inotfii": 4, "interfac": 4, "design": [4, 7, 17], "realtim": 4, "updat": [4, 12], "benefit": [4, 7], "caveat": [4, 7], "005": 5, "provid": [5, 12, 15, 16, 17], "hook": [5, 17], "us": 5, "case": 5, "007": [7, 8], "flag": [7, 8, 12, 13], "chang": [7, 17], "event": 7, "surfac": 8, "metadata": [8, 16], "non": 8, "goal": 8, "other": 8, "detail": 8, "add": [9, 10], "dispos": 9, "function": [9, 17], "api": [9, 12], "grpc": 10, "sync": 10, "support": [10, 14], "flagd": [10, 14], "task": 10, "ssl": 10, "certif": 10, "token": 10, "authent": 10, "transact": 11, "context": [11, 17], "propag": 11, "regist": 11, "get": 11, "merg": 11, "inlin": 12, "evalu": 12, "rule": 12, "format": 12, "what": 12, "might": 12, "look": 12, "like": 12, "servic": 13, "deploy": 13, "driven": [13, 14], "openfeatur": [13, 14], "rbac": 13, "client": [14, 15], "limit": 14, "proof": 14, "concept": 14, "map": 15, "capabl": 16, "discoveri": 16, "singl": 17, "paradigm": 17, "On": 17, "handler": 17, "initi": 17, "remov": 17, "mutat": 17, "return": 17, "valu": 17, "from": 17, "befor": 17, "stage": 17, "index": 18, "activ": 18, "open": 19, "featur": 19, "enhanc": 19, "welcom": 20, "test": 20, "": 20, "document": [20, 21]}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 57}, "alltitles": {"NAME": [[0, "name"], [6, "name"]], "State: ( DRAFTING | WITHDRAWN | PENDING REVIEW | APPROVED | REJECTED )": [[0, "state-drafting-withdrawn-pending-review-approved-rejected"]], "Background": [[0, "background"], [6, "background"], [8, "background"], [9, "background"], [10, "background"], [11, "background"], [12, "background"], [13, "background"], [14, "background"], [15, "background"], [16, "background"], [17, "background"]], "Proposal": [[0, "proposal"], [6, "proposal"], [8, "proposal"], [9, "proposal"], [11, "proposal"], [12, "proposal"], [13, "proposal"], [14, "proposal"], [15, "proposal"], [16, "proposal"]], "Sections": [[0, "sections"]], "[Example] Implementation": [[0, "example-implementation"]], "001-OFEP-cloud-native-pattern.md": [[1, "ofep-cloud-native-pattern-md"]], "State: APPROVED": [[1, "state-approved"], [2, "state-approved"], [4, "state-approved"], [5, "state-approved"], [7, "state-approved"], [8, "state-approved"], [9, "state-approved"], [10, "state-approved"], [11, "state-approved"], [13, "state-approved"], [15, "state-approved"], [16, "state-approved"], [17, "state-approved"]], "Assumptions": [[1, "assumptions"], [5, "assumptions"], [14, "assumptions"]], "Operator pattern": [[1, "operator-pattern"]], "Workflow": [[1, "workflow"]], "Direct set": [[1, "direct-set"]], "Configuration reloading": [[1, "configuration-reloading"]], "Standing orders": [[1, "standing-orders"]], "High-scale stateful configuration management": [[1, "high-scale-stateful-configuration-management"]], "Security": [[1, "security"]], "Performance": [[1, "performance"]], "Additional architecture": [[1, "additional-architecture"]], "Post Kubecon configuration": [[1, "post-kubecon-configuration"]], "remote endpoint configuration": [[1, "remote-endpoint-configuration"]], "Integration points": [[1, "integration-points"]], "Flow": [[1, "flow"]], "002-OFEP-kubecon-demo": [[2, "ofep-kubecon-demo"]], "Work involved": [[2, "work-involved"]], "End-user takeaways": [[2, "end-user-takeaways"]], "003-OFEP-CUE-upstream": [[3, "ofep-cue-upstream"]], "State: DRAFTING": [[3, "state-drafting"]], "004-OFEP-inotfiy-interface": [[4, "ofep-inotfiy-interface"]], "Design": [[4, "design"], [7, "design"], [17, "design"]], "Realtime updates": [[4, "realtime-updates"]], "Benefits": [[4, "benefits"], [7, "benefits"]], "Caveats": [[4, "caveats"], [7, "caveats"]], "005-OFEP-provider-hook.md": [[5, "ofep-provider-hook-md"]], "Example Use Case": [[5, "example-use-case"]], "Example Workflow": [[5, "example-workflow"]], "Hook Ordering": [[5, "hook-ordering"]], "State: ( APPROVED )": [[6, "state-approved"]], "Implementation": [[6, "implementation"], [11, "implementation"]], "007-OFEP-flag-change-events": [[7, "ofep-flag-change-events"]], "Demo": [[7, "demo"]], "OFEP-007: Surfacing flag metadata": [[8, "ofep-007-surfacing-flag-metadata"]], "Non-goals": [[8, "non-goals"]], "other details": [[8, "other-details"]], "Add dispose functionality to API": [[9, "add-dispose-functionality-to-api"]], "Example Implementation": [[9, "example-implementation"], [15, "example-implementation"], [16, "example-implementation"]], "OFEP: Add gRPC sync support to flagd": [[10, "ofep-add-grpc-sync-support-to-flagd"]], "Tasks": [[10, "tasks"]], "SSL certificates and token authentication": [[10, "ssl-certificates-and-token-authentication"]], "Transaction Context Propagation": [[11, "transaction-context-propagation"]], "Register Transaction Context Propagator": [[11, "register-transaction-context-propagator"]], "Set Transaction Context": [[11, "set-transaction-context"]], "Get Transaction Context": [[11, "get-transaction-context"]], "Context Merge Order": [[11, "context-merge-order"]], "Inline Evaluation of Flag Rules": [[12, "inline-evaluation-of-flag-rules"]], "State: REJECTED": [[12, "state-rejected"]], "Updated Provider API": [[12, "updated-provider-api"]], "Rule Format": [[12, "rule-format"]], "What it might look like": [[12, "what-it-might-look-like"]], "flag service deployment driven by OpenFeature Operator": [[13, "flag-service-deployment-driven-by-openfeature-operator"]], "RBAC": [[13, "rbac"]], "flagd client support driven by OpenFeature Operator": [[14, "flagd-client-support-driven-by-openfeature-operator"]], "State: WITHDRAWN": [[14, "state-withdrawn"]], "Limitations": [[14, "limitations"]], "Proof of concept": [[14, "proof-of-concept"]], "Provider to client mapping": [[15, "provider-to-client-mapping"]], "OFEP-provider-metadata-capability-discovery": [[16, "ofep-provider-metadata-capability-discovery"]], "OFEP-single-context-paradigm": [[17, "ofep-single-context-paradigm"]], "Provider changes": [[17, "provider-changes"]], "On-context-set handler": [[17, "on-context-set-handler"]], "Initialize function": [[17, "initialize-function"]], "Remove context mutator": [[17, "remove-context-mutator"]], "Hook changes": [[17, "hook-changes"]], "Remove return value from before stage": [[17, "remove-return-value-from-before-stage"]], "OFEP Index": [[18, "ofep-index"]], "Active": [[18, "active"]], "Draft": [[18, "draft"]], "Rejected": [[18, "rejected"]], "Withdrawn": [[18, "withdrawn"]], "Approved": [[18, "approved"]], "Open Feature Enhancement Proposals": [[19, "open-feature-enhancement-proposals"]], "Welcome to OFEP-TESTING\u2019s documentation!": [[20, "welcome-to-ofep-testing-s-documentation"]], "OFEP Documentation": [[21, null]]}, "indexentries": {}})