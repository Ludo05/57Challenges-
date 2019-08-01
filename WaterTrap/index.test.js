const {trappingWater} = require('./index');


describe('Test trapping water',  () => {
    xit('should return the right amounts',  () => {
        expect(trappingWater([])).toBe(0)
    });
 it('should return the right amounts',  () => {
        expect(trappingWater([0,1,0,1])).toBe(1)
    });
 xit('should return the right amounts',  () => {
        expect(trappingWater([0,1,0,1,2,0,2])).toBe(3)
    });
});
