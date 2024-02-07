@echo off

:: Wartet 0.5 Sekunden und öffnet die Webseite auf dem lokalen Webserver
start cmd.exe /c "timeout /t 0.5 & start http://localhost:8080/index.html"

:: Startet den lokalen Webserver
x86_64-pc-windows-msvc-simple-http-server.exe --nocache --ip  127.0.0.1 --port 8080
