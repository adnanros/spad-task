import { useState } from "react";

const CheckList = ({ personToCheckOut, onCheckSubmit, onCheckToggler }) => {
    const person = personToCheckOut;
    const [checkout, setCheckout]= useState({
        name: true,
        familyName: true,
        birthDate: true
    });
    const onConfirem = ()=> {
        if(checkout.name && checkout.familyName && checkout.birthDate) {
            onCheckSubmit(person.id);
            onCheckToggler();
        } else {
            onCheckToggler();
        }
    }
    return (
        <div style={{}}>
            <div className="row justify-content-between" style={{'cursor': 'pointer'}}>
                <div className="col-3">Name:</div>
                <div className="col-5">{person.name}</div>
                <div className="col-4">
                    <i class="fa fa-check-circle" aria-hidden="true" 
                    style={{ 'color': !checkout.name? 'black' : 'green' }} 
                    onClick={()=>{setCheckout({...checkout, name:true})}}></i>
                    <i class="fa fa-times-circle" aria-hidden="true" 
                    style={{'color': checkout.name? 'black' : 'red'}} 
                    onClick={()=>{setCheckout({...checkout, name:false})}}></i>
                </div>
            </div>
            <div className="row justify-content-between" style={{'cursor': 'pointer'}}>
                <div className="col-3">Family:</div>
                <div className="col-5">{person.familyName}</div>
                <div className="col-4">
                    <i class="fa fa-check-circle" aria-hidden="true" 
                    style={{ 'color': !checkout.familyName? 'black' : 'green' }}
                    onClick={()=>{setCheckout({...checkout, familyName:true})}}></i>
                    <i class="fa fa-times-circle" aria-hidden="true" 
                    style={{'color': checkout.familyName? 'black' : 'red'}} 
                    onClick={()=>{setCheckout({...checkout, familyName:false})}}></i>
                </div>
            </div>
            <div className="row justify-content-between" style={{'cursor': 'pointer'}}>
                <div className="col-3">Birthday:</div>
                <div className="col-5">{person.birthDate}</div>
                <div className="col-4">
                    <i class="fa fa-check-circle" aria-hidden="true" 
                    style={{ 'color': !checkout.birthDate? 'black' : 'green'}} 
                    onClick={()=>{setCheckout({...checkout, birthDate:true})}}></i>
                    <i class="fa fa-times-circle" aria-hidden="true" 
                    style={{ 'color': checkout.birthDate? 'black' : 'red'}} 
                    onClick={()=>{setCheckout({...checkout, birthDate:false})}}></i>
                </div>
            </div>
            <button onClick={onConfirem}>Confirm</button>

        </div>
    );
}

export default CheckList;