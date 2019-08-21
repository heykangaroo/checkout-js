import { Instrument } from '@bigcommerce/checkout-sdk';
import { expirationDate } from 'card-validator';
import classNames from 'classnames';
import creditCardType from 'credit-card-type';
import React, { useCallback, FunctionComponent } from 'react';

import { TranslatedString } from '../../locale';
import { LoadingOverlay } from '../../ui/loading';
import { CreditCardIcon } from '../creditCard';

import mapFromInstrumentCardType from './mapFromInstrumentCardType';

export interface ManageInstrumentsTableProps {
    instruments: Instrument[];
    isDeletingInstrument: boolean;
    onDeleteInstrument(id: string): void;
}

const ManageInstrumentsTable: FunctionComponent<ManageInstrumentsTableProps> = ({
    instruments,
    isDeletingInstrument,
    onDeleteInstrument,
}) => {
    if (instruments.length === 0) {
        return (
            <p><TranslatedString id="payment.instrument_manage_modal_empty_text" /></p>
        );
    }

    return (
        <LoadingOverlay isLoading={ isDeletingInstrument }>
            <table className="table">
                <thead className="table-thead">
                    <tr>
                        <th><TranslatedString id="payment.instrument_manage_table_header_payment_method_text" /></th>
                        <th><TranslatedString id="payment.instrument_manage_table_header_ending_in_text" /></th>
                        <th><TranslatedString id="payment.instrument_manage_table_header_expiry_date_text" /></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody className="table-tbody">
                    { instruments.map(instrument => (
                        <ManageInstrumentsRow
                            instrument={ instrument }
                            key={ instrument.bigpayToken }
                            onDeleteInstrument={ onDeleteInstrument }
                        />
                    )) }
                </tbody>
            </table>
        </LoadingOverlay>
    );
};

interface ManageInstrumentsRowProps {
    instrument: Instrument;
    onDeleteInstrument(id: string): void;
}

const ManageInstrumentsRow: FunctionComponent<ManageInstrumentsRowProps> = ({
    instrument,
    onDeleteInstrument,
}) => {
    const cardType = mapFromInstrumentCardType(instrument.brand);
    const cardInfo = creditCardType.getTypeInfo(cardType);
    const isExpired = expirationDate({
        month: instrument.expiryMonth,
        year: instrument.expiryYear,
    }).isValid === false;

    const handleDelete = useCallback(() => {
        onDeleteInstrument(instrument.bigpayToken);
    }, [
        instrument,
        onDeleteInstrument,
    ]);

    return (
        <tr>
            <td data-test="manage-instrument-cardType">
                <CreditCardIcon cardType={ cardType } />

                { cardInfo && <span className="instrumentModal-instrumentCardType">
                    { cardInfo.niceType }
                </span> }
            </td>
            <td data-test="manage-instrument-last4">
                { instrument.last4 }
            </td>
            <td
                className={ classNames({ 'instrumentModal-instrumentExpiry--expired': isExpired }) }
                data-test="manage-instrument-expiry"
            >
                { `${instrument.expiryMonth}/${instrument.expiryYear}` }
            </td>
            <td>
                <button
                    className="button button--tiny table-actionButton optimizedCheckout-buttonSecondary"
                    data-test="manage-instrument-delete-button"
                    onClick={ handleDelete }
                    type="button"
                >
                    <TranslatedString id="common.delete_action" />
                </button>
            </td>
        </tr>
    );
};

export default ManageInstrumentsTable;
