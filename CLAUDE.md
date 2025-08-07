# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an early-stage VS Code extension project for integrating Claude AI functionality. The project currently has minimal structure with only basic dependencies installed.

## Dependencies

- `@anthropic-ai/sdk`: Anthropic's official SDK for Claude API integration
- `@types/vscode`: TypeScript definitions for VS Code extension development
- Node.js modules: `compile`, `run`, `typescriptnpm` for development utilities

## Development Commands

Currently no build, test, or development scripts are configured in package.json. The default test script returns an error message.

## Architecture Notes

- This appears to be a fresh Node.js project intended for VS Code extension development
- No source code files exist yet in the repository root
- The project uses CommonJS module system (type: "commonjs")
- Ready for TypeScript development with VS Code extension APIs

## Next Steps for Development

When developing this extension:
1. Create a `src/` directory for source files
2. Add TypeScript configuration (`tsconfig.json`)
3. Create VS Code extension manifest (`extension.js` or `extension.ts`)
4. Set up build scripts in package.json for compilation and packaging
5. Add VS Code extension-specific configuration