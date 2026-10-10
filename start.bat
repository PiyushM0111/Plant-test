@echo off
title FloraDoc AI - Plant Health Studio
echo Starting FloraDoc AI Local Server...
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
