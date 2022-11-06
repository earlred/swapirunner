import {getVehicles} from './getVehicles';
import React from 'react';
import {describe, expect, it, jest} from '@jest/globals';
jest.setTimeout(20000);
describe('Function getVehicles should return data', () => {
    // Render test
    it('should return data', async () => {
        const result = await getVehicles({});
        expect(result.isSuccessful).toBe(true);
        expect(result.data).not.toBe(null);
    });
});
