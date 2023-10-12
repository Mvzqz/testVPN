import { defineConfig } from "@playwright/test";


export default defineConfig({
    testDir:'./tests',
    reporter:[
        ['list'],
        ['html'],
    ],
    use:{
        trace:'on'
    }
})