@echo off
setlocal

REM ====== НАСТРОЙКИ ======

REM Вставь сюда свой ключ OmniRoute
set "ANTHROPIC_AUTH_TOKEN=sk-5baa0c5ced0e7b43-19d6ed-d2fad371"

REM Вставь сюда base URL OmniRoute
set "ANTHROPIC_BASE_URL=http://localhost:20128/v1"

REM Опционально: отключить experimental betas
set "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1"

REM Опционально: модель
set "ANTHROPIC_MODEL=kr/claude-sonnet-4.5"

echo Starting Claude Code via OmniRoute...

claude

endlocal