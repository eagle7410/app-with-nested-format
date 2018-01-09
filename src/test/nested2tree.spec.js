import data from './assets/data';
import resultData from './assets/nested-result';
import nested2tree from '../utils/nested2tree';

describe('nested2tree', () => {
    it('Check nested2tree convert', () => {
        expect(resultData.result).toEqual(nested2tree(data));
    });
});
