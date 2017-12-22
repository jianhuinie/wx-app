# 示例：
# make dev desc=重构代码
export desc
feature:
	sh ci.sh master $(desc)
dev:
	sh ci.sh dev $(desc)
bugfixed:
	sh ci.sh bugfixed-hanrui-comment $(desc)
test:
	sh ci.sh test $(desc)
master:
	sh ci.sh master $(desc)


.PHONY: feature dev bugfixed test master
