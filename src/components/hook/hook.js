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

}