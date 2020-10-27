/*
 * Este script lê o arquivo fonte "sgahelper.js" e gera como saída 
 * o arquivo em formato bookmarklet "sgahelper.url".
 */

const fs = require('fs');
const bookmarkleter = require('bookmarkleter');

const bookmarklet = bookmarkleter(
    fs.readFileSync('sgahelper.js', 'utf8'),
    {
        iife: true,
        minify: true
    }
);

fs.writeFileSync('sgahelper.url', bookmarklet);