function convertDate() {
    const hijriDate = document.getElementById('hijriDate').value;
    if (!hijriDate) {
        document.getElementById('result').textContent = 'يرجى إدخال تاريخ صحيح.';
        return;
    }

    // استخدم مكتبة لتحويل التاريخ مثل moment-hijri.js
    const [year, month, day] = hijriDate.split('-').map(Number);
    const hijri = new HijriDate(year, month - 1, day);
    const gregorian = hijri.toGregorian();

    document.getElementById('result').textContent = 
        `التاريخ الميلادي المقابل هو: ${gregorian.getFullYear()}-${(gregorian.getMonth() + 1).toString().padStart(2, '0')}-${gregorian.getDate().toString().padStart(2, '0')}`;
}

// تأكد من تضمين مكتبة moment-hijri.js في HTML قبل استخدام الدالة
