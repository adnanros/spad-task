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
        <div style={{ 'border': '1px solid #ccc', 'padding': '10px', }}>
            <div className="row justify-content-between mx-1/2" style={{'borderBottom': '1px solid #ccc'}}>
                <div className="col-3">Name:</div>
                <div className="col-7">{person.name}</div>
                <div className="col-2" style={{ 'cursor': 'pointer' }}>
                    <i className="fa fa-check-circle" aria-hidden="true"
                        style={{ 'color': !checkout.name ? 'black' : 'green' }}
                        onClick={() => { setCheckout({ ...checkout, name: true }) }}></i>
                    <i className="fa fa-times-circle" aria-hidden="true"
                        style={{ 'color': checkout.name ? 'black' : 'red' }}
                        onClick={() => { setCheckout({ ...checkout, name: false }) }}></i>
                </div>
            </div>
            <div className="row justify-content-between mx-1/2" style={{'borderBottom': '1px solid #ccc'}}>
                <div className="col-3">Family:</div>
                <div className="col-7">{person.familyName}</div>
                <div className="col-2" style={{ 'cursor': 'pointer' }}>
                    <i className="fa fa-check-circle" aria-hidden="true"
                        style={{ 'color': !checkout.familyName ? 'black' : 'green' }}
                        onClick={() => { setCheckout({ ...checkout, familyName: true }) }}></i>
                    <i className="fa fa-times-circle" aria-hidden="true"
                        style={{ 'color': checkout.familyName ? 'black' : 'red' }}
                        onClick={() => { setCheckout({ ...checkout, familyName: false }) }}></i>
                </div>
            </div>
            <div className="row justify-content-between mx-1/2 mb-3" style={{'borderBottom': '1px solid #ccc'}}>
                <div className="col-3">Birthday:</div>
                <div className="col-7">{person.birthDate}</div>
                <div className="col-2" style={{ 'cursor': 'pointer' }}>
                    <i className="fa fa-check-circle" aria-hidden="true"
                        style={{ 'color': !checkout.birthDate ? 'black' : 'green' }}
                        onClick={() => { setCheckout({ ...checkout, birthDate: true }) }}></i>
                    <i className="fa fa-times-circle" aria-hidden="true"
                        style={{ 'color': checkout.birthDate ? 'black' : 'red' }}
                        onClick={() => { setCheckout({ ...checkout, birthDate: false }) }}></i>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-sm" onClick={onConfirem} style={{ 'backgroundColor': '#57EFDD' }}>Confirm</button>
            </div>
        </div>
    );
}

export default CheckList;