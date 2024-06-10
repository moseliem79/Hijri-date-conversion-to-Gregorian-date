# Hijri-date-conversion-to-Gregorian-date
Hijri date conversion to Gregorian date
-------
# تحويل التاريخ الهجري إلى الميلادي

هذا المشروع عبارة عن صفحة ويب تتيح لك تحويل التواريخ من التقويم الهجري إلى التقويم الميلادي باستخدام JavaScript ومكتبة moment-hijri.js.

## المتطلبات

- متصفح ويب حديث
- اتصال بالإنترنت لتحميل مكتبة moment-hijri.js

## الملفات

- `index.html`: يحتوي على هيكل صفحة الويب.
- `styles.css`: يحتوي على تنسيقات CSS للصفحة.
- `script.js`: يحتوي على كود JavaScript الذي يقوم بعملية التحويل.

## كيفية الاستخدام

1. قم بفتح `index.html` في متصفحك.
2. أدخل التاريخ الهجري بصيغة `YYYY-MM-DD` في حقل الإدخال.
3. اضغط على زر "تحويل" لعرض التاريخ الميلادي المقابل.

## تضمين مكتبة moment-hijri.js

تم تضمين مكتبة `moment-hijri.js` مباشرة من خلال الإنترنت في ملف `index.html`.

## الأكواد

### index.html

```html
<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تحويل التاريخ الهجري إلى الميلادي</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>تحويل التاريخ الهجري إلى الميلادي</h1>
        <label for="hijriDate">أدخل التاريخ الهجري (YYYY-MM-DD):</label>
        <input type="text" id="hijriDate" placeholder="1445-10-20">
        <button onclick="convertDate()">تحويل</button>
        <p id="result"></p>
    </
