const { hasUncaughtExceptionCaptureCallback } = require('process');
const  algorithm = require('../Search/jump');
describe('Jumping search' ,()=>{
    it('if array[1,5,6,9,15,16,14] and target is  15 answer must be ' , ()=>{
        let array = [1,5,6,9,15,16,14], target =15;
         const result = algorithm.JumpSearch(array , target);
        expect(result).toBe(4);      
    })
})