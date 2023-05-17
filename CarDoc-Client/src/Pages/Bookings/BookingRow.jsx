import React from 'react';
import Swal from 'sweetalert2';

const BookingRow = ({ booking, handleDelete, handleConfirmation }) => {
    const { _id, customerName, email, date, service, phone, img, price, status } = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-full w-12 h-12">
                            <img src={img} alt="Service booking" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">{date}</div>
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{phone} <br /> {email}</td>
            <td>
                $ {price}
            </td>
            <th>
                { status === 'confirm' ? <span className='badge badge-success badge-outline'>Confirmed</span> :
                    <button onClick={() => handleConfirmation(_id)} className="btn btn-ghost btn-xs">Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;