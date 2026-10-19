@echo off
chcp 65001 >nul
title Catequesis - planilla de asistencia (NO CERRAR)
cd /d "%~dp0"

echo.
echo  ==========================================================
echo    CATEQUESIS - PLANILLA DE ASISTENCIA
echo  ==========================================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo  No se encontro Node.js en esta PC.
  echo.
  echo  1^) Entra a https://nodejs.org
  echo  2^) Baja el boton que dice LTS e instalalo ^(Siguiente, Siguiente, Finalizar^)
  echo  3^) Volve a hacer doble clic en este archivo
  echo.
  pause
  exit /b 1
)

echo  Esta ventana tiene que quedar ABIERTA mientras usas la planilla.
echo  Cuando termines, cerrala y listo.
echo.

node servidor.js --abrir

echo.
echo  El servidor se detuvo. Ya podes cerrar esta ventana.
pause
