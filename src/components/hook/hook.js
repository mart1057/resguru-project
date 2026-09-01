// Records a booking/move-in deposit (earnest, roomDeposit, ...) collected
// from a tenant as building income, using the same "[category] note"
// remark encoding as manual income entries (see parseIncomeRemark) so it
// shows up correctly in the existing income tables/dashboard.
function recordDepositIncome(axios, buildingId, amount, title) {
    const numericAmount = parseFloat(amount)
    if (!buildingId || !numericAmount || numericAmount <= 0) {
        return Promise.resolve()
    }

    return axios.post('https://api.resguru.app/api/building-incomes', {
        data: {
            title,
            amount: numericAmount,
            date: new Date().toISOString(),
            remark: `[ค่าเช่าล่วงหน้า] ${title}`,
            building: buildingId,
        }
    }).catch((err) => {
        console.log('recordDepositIncome error', err)
    })
}

function convertDateNoTime(data_date) {
    const timestamp = data_date;
    const date = new Date(timestamp);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate
}

// Service-report status - DISPLAY ONLY.
// The backend enum is unchanged: New | In Progress | Completed | Canceled.
// We surface 5 states to the user by deriving "เกินเวลา" (overdue) when an
// in-progress job is past its appointment date. Nothing here is ever written
// back - writers must keep using the raw backend values.
//   New         -> ใหม่
//   In Progress -> มอบหมายแล้ว   (past appointmentDate -> เกินเวลา)
//   Completed   -> เสร็จสิ้น
//   Canceled    -> ยกเลิก
function serviceStatusInfo(rawStatus, appointmentDate) {
    const s = (rawStatus || '').toString().trim().toLowerCase().replace(/\s+/g, '');
    let key = 'new';
    if (s === 'inprogress' || s === 'assigned') key = 'assigned';
    else if (s === 'completed' || s === 'closed' || s === 'success') key = 'closed';
    else if (s === 'canceled' || s === 'cancelled' || s === 'cancel') key = 'canceled';

    if (key === 'assigned' && appointmentDate) {
        const due = new Date(appointmentDate);
        if (!isNaN(due.getTime()) && due.getTime() < Date.now()) key = 'overdue';
    }

    const map = {
        new:      { label: 'ใหม่',        text: '#EA2F5C', bg: '#FFE1E8' },
        assigned: { label: 'มอบหมายแล้ว', text: '#D48C00', bg: '#FFF2BC' },
        closed:   { label: 'เสร็จสิ้น',    text: '#0B9A3C', bg: '#CFFBDA' },
        overdue:  { label: 'เกินเวลา',     text: '#DA1E28', bg: '#FFD7D9' },
        canceled: { label: 'ยกเลิก',       text: '#5C6B79', bg: '#E9EEF6' },
    };
    return { key, ...map[key] };
}

// building-income's remark is encoded as "[category] free-text note",
// since it has no dedicated category relation - this splits it back out.
function parseIncomeRemark(remark) {
    const match = typeof remark === 'string' ? remark.match(/^\[(.+?)\]\s*(.*)$/) : null;
    if (match) {
        return { category: match[1], note: match[2] };
    }
    return { category: '-', note: remark || '' };
}

export {
    convertDateNoTime,
    parseIncomeRemark,
    recordDepositIncome,
    serviceStatusInfo,
}