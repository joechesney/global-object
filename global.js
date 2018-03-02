#!/usr/bin/env node

const { node: nodeVersion, v8: v8Version } = process.versions;
const message = `Node version: ${nodeVersion}\nV8 Version: ${v8Version}`;
console.log(message);