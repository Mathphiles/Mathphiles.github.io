jekyll build
::set source="E:\blog\myblog\_site"
::set destination="E:\blog\test"
::
:::: 循环遍历文件并删除不需要的文件
::for %%f in ("%destination%\*") do (
::    del "%%f"
::)
::for /d %%f in ("%destination%\*") do (
::    if /i not "%%f"==".git" (
::    del "%%f"
::    )
::)
::copy "%source%\*" %destination%
::for /d %%i in ("%source%\*") do (
::    copy "%%i" "%destination%"
::)