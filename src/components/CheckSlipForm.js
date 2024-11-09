import React, { useState } from 'react';
import axios from 'axios';

const CheckSlipForm = () => {
    const [slipData, setSlipData] = useState('');
    const [amount, setAmount] = useState('');
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('data', slipData);
        formData.append('amount', amount);
        if (file) formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:3000/check-slip', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('เกิดข้อผิดพลาดในการตรวจสอบสลิป');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="ข้อมูล QR Code" onChange={(e) => setSlipData(e.target.value)} />
                <input type="number" placeholder="ยอดเงิน" onChange={(e) => setAmount(e.target.value)} />
                <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
                <button type="submit">ตรวจสอบสลิป</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CheckSlipForm;
