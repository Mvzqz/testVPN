import { defineConfig } from "@playwright/test";


export default defineConfig({
    testDir:'./tests',
    reporter:[
        ['blob'],
        ['line']
    ],
    use:{
        trace:'on'
    }
})