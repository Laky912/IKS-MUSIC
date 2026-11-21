@echo off
title IKS MUSIC
cd /d "%~dp0"
set "URL=http://127.0.0.1:8787"
where node >nul 2>nul
if errorlevel 1 (
  echo Necesitas instalar Node.js para iniciar IKS MUSIC.
  echo Descarga la version LTS desde https://nodejs.org/
  pause
  exit /b 1
)
start "" /b node server.js
timeout /t 2 /nobreak >nul
where msedge >nul 2>nul && start "" msedge --app=%URL% && exit /b
where chrome >nul 2>nul && start "" chrome --app=%URL% && exit /b
start "" "%URL%"
