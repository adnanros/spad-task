import { useState } from "react";

const CheckList = ({ personToCheckOut, onCheckSubmit, onCheckToggler }) => {
    const person = personToCheckOut;
    const [checkout, setCheckout] = useState({
        name: true,
        familyName: true,
        birthDate: true
    });
    const onConfirem = () => {
        if (checkout.name && checkout.familyName && checkout.birthDate) {
            onCheckSubmit(person.id);
            onCheckToggler();
        } else {
            onCheckToggler();
        }
    }
    return (
        <div className="check-list">
            <div className="check-list-frame">
                <div className="title">Name:</div>
                <div className="value">{person.name}</div>
                <div className="actions">
                    <i className="fa fa-check-circle" aria-hidden="true"
                        style={{ 'color': !checkout.name ? 'black' : 'green' }}
                        onClick={() => { setCheckout({ ...checkout, name: true }) }}></i>
                    <i className="fa fa-times-circle" aria-hidden="true"
                        style={{ 'color': checkout.name ? 'black' : 'red' }}
                        onClick={() => { setCheckout({ ...checkout, name: false }) }}></i>
                </div>
            </div>
            <div className="check-list-frame">
                <div className="title">Family:</div>
                <div className="value">{person.familyName}</div>
                <div className="actions">
                    <i className="fa fa-check-circle" aria-hidden="true"
                        style={{ 'color': !checkout.familyName ? 'black' : 'green' }}
                        onClick={() => { setCheckout({ ...checkout, familyName: true }) }}></i>
                    <i className="fa fa-times-circle" aria-hidden="true"
                        style={{ 'color': checkout.familyName ? 'black' : 'red' }}
                        onClick={() => { setCheckout({ ...checkout, familyName: false }) }}></i>
                </div>
            </div>
            <div className="check-list-frame">
                <div className="title">Birthday:</div>
                <div className="value">{person.birthDate}</div>
                <div className="actions">
                    <i className="fa fa-check-circle" aria-hidden="true"
                        style={{ 'color': !checkout.birthDate ? 'black' : 'green' }}
                        onClick={() => { setCheckout({ ...checkout, birthDate: true }) }}></i>
                    <i className="fa fa-times-circle" aria-hidden="true"
                        style={{ 'color': checkout.birthDate ? 'black' : 'red' }}
                        onClick={() => { setCheckout({ ...checkout, birthDate: false }) }}></i>
                </div>
            </div>
            <div className="confirm-button">
                <button className="btn-ordinary" onClick={onConfirem}>Confirm</button>
            </div>
        </div>
    );
}

export default CheckList;