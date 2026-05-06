import React from 'react';
import type { TValidator } from '@manojadams/metaforms-core';
import { useClient } from '@/common/hooks';
import MuiForms, { metaAPI } from 'mui-forms';
import schema from './schema.json';

// Custom validation: from date should not be in future
const validateFromDate: TValidator = (_value, _validatorArgs) => {
    const fromDate = new Date(_value as string);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    fromDate.setHours(0, 0, 0, 0);
    if (fromDate.getTime() >= currentDate.getTime()) {
        return false;
    }
    return true;
};

// Custom validation: to date should not be before the field passed in validation args
const validateToDate: TValidator = (_value, _validatorArgs) => {
    const fromDate = metaAPI.metaForm.getFieldValue('custom_validation_form', 'default', 'fromDate');
    const toDate = new Date(_value as string);
    toDate.setHours(0, 0, 0, 0);
    if (fromDate) {
        const fromDateObj = new Date(fromDate as string);
        fromDateObj.setHours(0, 0, 0, 0);
        if (toDate.getTime() <= fromDateObj.getTime()) {
            return false;
        }
    }
    return true;
};

const ValidationFormCustom = () => {
    const render = useClient();
    return render && (
        <MuiForms
            name="custom_validation_form"
            schema={schema}
            validators={{
                'fromDate': validateFromDate,
                'toDate': validateToDate
            }}
            onSubmit={() => {}}
        />
    );
};

export default ValidationFormCustom;
